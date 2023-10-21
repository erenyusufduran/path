const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const scrapingResults = [];

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://sfbay.craigslist.org/search/sof', { waitUntil: 'networkidle0' });
  const html = await page.content();

  const $ = cheerio.load(html);
  const results = $('.result-info')
    .map((_, element) => {
      const titleElement = $(element).find('.posting-title');
      const timeElement = $($($(element).find('.meta')).find('span')).attr('title');
      const hoodElement = $(element).find('.supertitle');

      const title = $(titleElement).text();
      const url = $(titleElement).attr('href');
      const datePosted = new Date(timeElement);
      const hood = $(hoodElement).text().trim().replace('(', '').replace(')', '');
      return { title, url, datePosted, hood };
    })
    .get();
  console.log(results);
}

main();
