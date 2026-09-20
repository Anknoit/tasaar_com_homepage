import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const p = await b.newPage();
p.on('console', m => { if (['error','warning'].includes(m.type())) console.log(`[console.${m.type()}] ${m.text().slice(0,400)}`); });
p.on('pageerror', e => console.log('[pageerror] ' + e.message.slice(0,500)));
p.on('requestfailed', r => console.log('[requestfailed] ' + r.url().slice(0,120) + ' :: ' + r.failure()?.errorText));
await p.setViewport({ width: 1440, height: 1000 });
await p.goto('http://localhost:3999/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 6000));
const overlay = await p.evaluate(() => {
  const nd = document.querySelector('nextjs-portal');
  return nd ? (nd.shadowRoot ? nd.shadowRoot.textContent.slice(0, 600) : 'portal, no shadowRoot') : 'no error overlay';
});
console.log('OVERLAY: ' + overlay);
await b.close();
