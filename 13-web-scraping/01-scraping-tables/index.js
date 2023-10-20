const request = require('request-promise');
const cheerio = require('cheerio');
const axios = require('axios');

async function oldMain() {
  const result = await request.get('https://codingwithstefan.com/table-example');
  const $ = cheerio.load(result);

  $('body > table > tbody > tr > td').each((index, element) => {
    console.log($(element).text());
  });
}

async function tableMain() {
  const result = await axios.get('https://codingwithstefan.com/table-example');
  const $ = cheerio.load(result.data);

  const scrapedRows = [];
  $('body > table > tbody > tr').each((index, element) => {
    if (!index) return true;
    const tds = $(element).find('td');
    const company = $(tds[0]).text();
    const contact = $(tds[1]).text();
    const country = $(tds[2]).text();

    const scrapedRow = { company, contact, country };
    scrapedRows.push(scrapedRow);
  });

  console.log(scrapedRows);
}

async function main() {
  const result = await request.get('https://www.hunkarturizm.com/turbulteni');
  const $ = cheerio.load(result);

  const scrapedRows = [];
  $('body > div.turtakvim > div > div > table > tbody > tr').each((index, element) => {
    const tds = $(element).find('td');
    const tourName = $(tds[0]).text();
    const goDate = $(tds[1]).text();
    const returnDate = $(tds[2]).text();
    const price = $(tds[3]).text();
    const quota = $(tds[4]).text();

    if (tourName !== 'Bu ay için turumuz bulunmamaktadır.') {
      const scrapedRow = { tourName, goDate, returnDate, price, quota };
      scrapedRows.push(scrapedRow);
    }
  });

  console.log(scrapedRows);
}

main();
