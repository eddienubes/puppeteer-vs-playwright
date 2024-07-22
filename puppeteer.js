import puppeteer from 'puppeteer';
import { performance } from 'node:perf_hooks';
// import puppeteer from 'puppeteer-core';

console.log('Puppeteer ---')

const start = performance.now();

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
    headless: true
});
const page = await browser.newPage();

page.once('load', () => console.log(`Page loaded ${ performance.now() - start }ms`));

// function logRequest(interceptedRequest) {
//     console.log('A request was made:', interceptedRequest.url());
// }

// page.on('request', logRequest);


// Set screen size.
await page.setViewport({ width: 1080, height: 1024 });

console.log(`setViewport: ${ performance.now() - start }ms`)

// Navigate the page to a URL.
await page.goto('https://google.com');

console.log(`goto: ${ performance.now() - start }ms`)

await page.screenshot({
    path: 'screenshot.jpg'
});

console.log(`screenshot: ${ performance.now() - start }ms`)

await browser.close();