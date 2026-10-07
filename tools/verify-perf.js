const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new', args: ['--hide-scrollbars','--mute-audio'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setCacheEnabled(false);

  const bytes = { total: 0, byType: {} };
  page.on('response', async res => {
    try {
      const h = res.headers();
      const len = parseInt(h['content-length'] || '0', 10);
      const type = (h['content-type'] || 'other').split(';')[0];
      bytes.total += len;
      bytes.byType[type] = (bytes.byType[type] || 0) + len;
    } catch (_) {}
  });

  await page.evaluateOnNewDocument(() => {
    window.__lcp = 0; window.__cls = 0;
    new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lcp = e.startTime; })
      .observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; })
      .observe({ type: 'layout-shift', buffered: true });
  });

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  const m = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const fcp = performance.getEntriesByName('first-contentful-paint')[0];
    return {
      lcp_ms: Math.round(window.__lcp),
      cls: +window.__cls.toFixed(4),
      fcp_ms: Math.round(fcp ? fcp.startTime : 0),
      domContentLoaded_ms: Math.round(nav.domContentLoadedEventEnd),
      load_ms: Math.round(nav.loadEventEnd),
      requests: performance.getEntriesByType('resource').length,
      transferredKB: Math.round(performance.getEntriesByType('resource')
        .reduce((a, r) => a + (r.transferSize || 0), 0) / 1024),
    };
  });
  console.log('--- initial load (cold cache, 1440x900) ---');
  console.log(JSON.stringify(m, null, 2));

  // keyboard reachability
  const kb = await page.evaluate(() => {
    const f = [...document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')]
      .filter(e => e.offsetParent !== null || e.tagName === 'A');
    return { focusableCount: f.length, firstFocusable: f[0]?.textContent?.trim().slice(0, 30),
             cardsAreButtons: [...document.querySelectorAll('.card')].every(c => c.tagName === 'BUTTON'),
             cardsHaveLabels: [...document.querySelectorAll('.card')].every(c => !!c.getAttribute('aria-label')),
             h1Count: document.querySelectorAll('h1').length };
  });
  console.log('--- accessibility ---');
  console.log(JSON.stringify(kb, null, 2));

  await browser.close();
})();
