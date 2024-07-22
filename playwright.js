import { chromium } from 'playwright';  // Or 'chromium' or 'firefox'.
import { performance } from "node:perf_hooks";

console.log('Playwright ---')

const start = performance.now();

const browser = await chromium.launch({
    headless: true
});
const context = await browser.newContext();
const page = await context.newPage();

page.on('load', () => console.log(`Page loaded ${ performance.now() - start }ms`));

await page.setViewportSize({ width: 1080, height: 1024 });

console.log(`setViewport: ${ performance.now() - start }ms`)

await page.goto('https://google.com');

console.log(`goto: ${ performance.now() - start }ms`)

await page.screenshot({ path: 'screenshot.png' });

console.log(`screenshot: ${ performance.now() - start }ms`)

await browser.close();
