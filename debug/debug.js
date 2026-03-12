const { chromium } = require('playwright');
require('dotenv').config();

(async () => {
  const url = process.env.BASE_URL || 'https://login.velo-ai.tech/';
  console.log('Opening', url);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: false, devtools: true, slowMo: 200 });
  } catch (err) {
    console.warn('Failed to launch channel "chrome" — falling back to bundled Chromium:', err.message);
    browser = await chromium.launch({ headless: false, devtools: true, slowMo: 200 });
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    console.log('Browser launched, navigating...');
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    console.log('Navigation completed. Current URL:', page.url());
  } catch (err) {
    console.error('Navigation failed:', err && err.message ? err.message : err);
    try {
      console.log('Attempting to fetch page content anyway...');
      const html = await page.content();
      console.log('Page content length:', html ? html.length : 'no content');
    } catch (err2) {
      console.error('Failed to read page content:', err2 && err2.message ? err2.message : err2);
    }
  }
  console.log('Page opened (or attempted). You should see the browser.');
  console.log('Press Ctrl+C in this terminal to close the browser and exit.');

  // keep the process alive so you can interact with the browser
  await new Promise(() => {});
})();
