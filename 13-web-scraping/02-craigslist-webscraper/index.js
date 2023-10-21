const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const scrapingResults = [];

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://sfbay.craigslist.org/search/sof', { waitUntil: 'networkidle0' });
  const html = await page.content();
  const $ = cheerio.load(html);
  $('.title-blob').each((_, element) => console.log($(element).text()));
}

main();
