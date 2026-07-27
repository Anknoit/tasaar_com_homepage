import puppeteer from 'puppeteer-core';

(async () => {
    const paths = [
        'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe',
        'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe'
    ];
    let browser;
    for (const p of paths) {
        try {
            browser = await puppeteer.launch({ executablePath: p, headless: true });
            if (browser) break;
        } catch (e) { }
    }

    if (!browser) {
        console.error('No browser found');
        process.exit(1);
    }

    const page = await browser.newPage();

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 10000 });
    await new Promise(r => setTimeout(r, 2000));

    const heroClass = await page.$eval('.hero-section', el => el.className);
    console.log('Hero Section className:', heroClass);
    const canvasClass = await page.$eval('#hero-universe', el => el.className);
    console.log('Canvas className:', canvasClass);
    const productsClass = await page.$eval('.products-grid', el => el.className);
    console.log('Products Grid className:', productsClass);

    await browser.close();
})();
