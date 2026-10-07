// Capture thumb + full-page shots of every live project with one Chrome, concurrent pages.
const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = path.resolve(__dirname, '..', 'assets', 'work');
const CONCURRENCY = 3;

const PROJECTS = [
  ['todo-electrico', 'https://www.todoelectricovictor.com/'],
  ['wurth',          'https://www.wurth.co/'],
  ['alfred',         'https://alfred.co/'],
  ['litsight',       'https://www.litsight.pro/en'],
  ['fanatik',        'https://fanatik.lat/'],
  ['next-tailwind',  'https://next-tailwind-ob.vercel.app/'],
  ['doxa',           'https://doxasistemas.com/'],
  ['uflou',          'https://apps.apple.com/co/app/uflou/id1550087947'],
  ['collection-app', 'https://collection-app-bice.vercel.app/'],
  ['alfred-b2b',     'https://b2b.alfred.co/'],
  ['alfred-fleet',   'https://empresas.alfred.co/'],
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function capture(browser, slug, url) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await sleep(2500);

    // nudge lazy content into view, then return to top
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < Math.min(document.body.scrollHeight, 6000); y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 180));
      }
      window.scrollTo(0, 0);
    });
    await sleep(1200);

    const thumb = await page.screenshot({ type: 'png' });
    await sharp(thumb).resize(1440, 900, { fit: 'cover', position: 'top' })
      .webp({ quality: 80 }).toFile(path.join(OUT, `${slug}-thumb.webp`));

    const full = await page.screenshot({ type: 'png', fullPage: true });
    const meta = await sharp(full).metadata();
    const cappedH = Math.min(meta.height, 5200);
    await sharp(full).extract({ left: 0, top: 0, width: meta.width, height: cappedH })
      .resize({ width: 1100 }).webp({ quality: 78 })
      .toFile(path.join(OUT, `${slug}-full.webp`));

    const t = fs.statSync(path.join(OUT, `${slug}-thumb.webp`)).size;
    const f = fs.statSync(path.join(OUT, `${slug}-full.webp`)).size;
    console.log(`ok   ${slug.padEnd(16)} thumb ${(t/1024).toFixed(0)}KB  full ${(f/1024).toFixed(0)}KB (${meta.width}x${cappedH})`);
    return true;
  } catch (e) {
    console.log(`FAIL ${slug.padEnd(16)} ${String(e.message).slice(0, 90)}`);
    return false;
  } finally {
    await page.close().catch(() => {});
  }
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--hide-scrollbars', '--mute-audio', '--disable-dev-shm-usage', '--no-first-run'],
  });
  // optional slug filter: `node capture.js alfred-b2b alfred-fleet` re-shoots just those
  const only = process.argv.slice(2);
  const queue = only.length ? PROJECTS.filter(([slug]) => only.includes(slug)) : [...PROJECTS];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const [slug, url] = queue.shift();
      await capture(browser, slug, url);
    }
  });
  await Promise.all(workers);
  await browser.close();
  console.log('DONE');
})();
