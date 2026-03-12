import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
  Status
} from '@cucumber/cucumber';

import {
  chromium,
  Browser,
  BrowserContext,
  Page,
  ConsoleMessage
} from 'playwright';

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import { getLaunchOptions } from '../config/browserConfig';

dotenv.config({ override: true });

declare module '@cucumber/cucumber' {
  interface World {
    browser: Browser;
    context: BrowserContext;
    page: Page;
  }
}

let browser: Browser;

setDefaultTimeout(60_000);

BeforeAll(async () => {
  browser = await chromium.launch(getLaunchOptions());
});

AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

Before(async function () {

  this.context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: 'test-results/videos/'
    }
  });

  await this.context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true
  });

  this.page = await this.context.newPage();

  // Log browser console messages
  this.page.on('console', (msg: ConsoleMessage) => {
    console.log(`BROWSER [${msg.type()}] ${msg.text()}`);
  });

  // Log page errors
  this.page.on('pageerror', (err: Error) => {
    console.error(`BROWSER ERROR: ${err.message}`);
  });

});

After(async function (scenario) {

  const resultsDir = path.join(process.cwd(), 'test-results');

  const screenshotDir = path.join(resultsDir, 'screenshots');
  const traceDir = path.join(resultsDir, 'traces');
  const htmlDir = path.join(resultsDir, 'html');

  [screenshotDir, traceDir, htmlDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const name = scenario.pickle.name.replace(/\s+/g, '_');

  if (scenario.result?.status === Status.FAILED) {

    await this.page.screenshot({
      path: `${screenshotDir}/${name}.png`,
      fullPage: true
    });

    const html = await this.page.content();

    fs.writeFileSync(`${htmlDir}/${name}.html`, html);

    await this.context.tracing.stop({
      path: `${traceDir}/${name}.zip`
    });

  } else {

    await this.context.tracing.stop();

  }

  await this.context.close();

});