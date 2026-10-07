const puppeteer = require('puppeteer-core');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new', args: ['--hide-scrollbars','--mute-audio'],
  });
  const out = path.resolve(__dirname, '..', '..', 'rm');
  for (const reduce of [true, false]) {
    const page = await browser.newPage();
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    page.on('pageerror', e => errs.push('PAGEERROR: ' + e.message));
    await page.setViewport({ width: 1440, height: 900 });
    if (reduce) await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle2', timeout: 45000 });
    await new Promise(r => setTimeout(r, 3500));

    const state = await page.evaluate(() => {
      const de = document.documentElement;
      const vis = s => { const e = document.querySelector(s); if (!e) return 'missing';
        const c = getComputedStyle(e); return c.display === 'none' ? 'hidden' : `visible(op=${c.opacity})`; };
      return {
        preloaderPresent: !!document.querySelector('#preloader'),
        docHeight: de.scrollHeight,
        horizontalOverflow: de.scrollWidth > de.clientWidth,
        heroH1: document.querySelector('.hero__title')?.innerText.replace(/\n/g,' '),
        heroH1Visible: vis('.hero__title'),
        cursor: vis('#cursor'),
        heroVideoDisplay: getComputedStyle(document.querySelector('#heroVideo')).display,
        heroPosterVisible: vis('.hero .scene__poster'),
        chaptersLit: document.querySelectorAll('.chapter.is-lit').length,
        chaptersTotal: document.querySelectorAll('.chapter').length,
        statsText: [...document.querySelectorAll('.stat__n')].map(n => n.textContent),
        workCards: document.querySelectorAll('.card').length,
        marqueeItems: document.querySelectorAll('.marquee__track span').length,
        footerLinks: [...document.querySelectorAll('.footer__links a')].map(a => a.textContent.trim()),
      };
    });
    console.log(`\n=== prefers-reduced-motion: ${reduce ? 'reduce' : 'no-preference'} ===`);
    console.log(JSON.stringify(state, null, 2));
    console.log('console errors:', errs.length ? errs : 'none');
    await page.screenshot({ path: `${out}-${reduce ? 'reduce' : 'normal'}.png` });
    await page.close();
  }
  await browser.close();
})();
