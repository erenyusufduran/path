const request = require('request-promise');
const cheerio = require('cheerio');

async function oldMain() {
  const result = await request.get('https://codingwithstefan.com/table-example');
  const $ = cheerio.load(result);

  $('body > table > tbody > tr > td').each((index, element) => {
    console.log($(element).text());
  });
}

async function main() {
  const result = await request.get('https://codingwithstefan.com/table-example');
  const $ = cheerio.load(result);

  $('body > table > tbody > tr').each((index, element) => {
    const tds = $(element).find('td');
    const company = $(tds[0]).text();
    console.log(company);

    // console.log($($(element).find('td')[0]).text());
  });
}

main();
