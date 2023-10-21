const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function scrapeListings(page) {
  await page.goto('https://sfbay.craigslist.org/search/sof', { waitUntil: 'networkidle0' });
  const html = await page.content();

  const $ = cheerio.load(html);
  const listings = $('.result-info')
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
  return listings;
}

async function scrapeJobDescriptions(listings, page) {
  for (let i = 0; i < listings.length; i++) {
    await page.goto(listings[i].url, { waitUntil: 'networkidle0' });
    const html = await page.content();

    const $ = cheerio.load(html);
    const jobDescription = $('#postingbody').text();
    const compensation = $('p.attrgroup > span:nth-child(1) > b').text();

    listings[i].jobDescription = jobDescription;
    listings[i].compensation = compensation;

    await sleep(1000);
  }
}

async function sleep(miliseconds) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const listings = await scrapeListings(page);
  const listingsWithJobDescriptions = await scrapeJobDescriptions(listings, page);
}

main();
