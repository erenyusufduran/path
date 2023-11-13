const request = require('request-promise').defaults({proxy: "43.153.11.102:443"})
const cheerio = require('cheerio');

const url = 'https://sfbay.craigslist.org/search/sof';
const scrapeResult = {
  title: 'Technical Autonomous Vehicle Trainer',
  description: 'Long text about the job, requirements etc..',
  datePosted: new Date('2018-07-13'),
  url: 'https://sfbay.craigslist.org/eby/sof/d/san-ramon-software-engineer-php-mysql/7686679366.html',
  hood: '(SOMA / south beach)',
  address: '1201 Bryant St.',
  conpensation: '23/hr',
};

const scrapeResults = [];

async function scrapeCraigslist() {
  try {
    const htmlResult = await request.get(url);
    const $ = cheerio.load(htmlResult);

    $('.result-info').each((index, element) => {
      const resultTitle = $(element).children('.result-title');
      const title = resultTitle.text();
      const url = resultTitle.attr('href');
      const scrapeResult = { title, url };
      scrapeResults.push(scrapeResult);
    });

    console.log(scrapeResult)
  } catch (error) {
    console.error(error);
  }
}

scrapeCraigslist();
