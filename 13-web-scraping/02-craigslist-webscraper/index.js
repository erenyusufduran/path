const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const scrapingResults = [];

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://sfbay.craigslist.org/search/sof', { waitUntil: 'networkidle0' });
  const html = await page.content();

  const $ = cheerio.load(html);
  const results = $('.posting-title')
    .map((_, element) => {
      jQuerySelector = $(element);
      const title = jQuerySelector.text();
      const url = jQuerySelector.attr('href');
      return { title, url };
    })
    .get();
  console.log(results);
}

main();
