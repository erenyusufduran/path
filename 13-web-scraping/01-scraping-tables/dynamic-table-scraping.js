const request = require('request-promise');
const cheerio = require('cheerio');

async function main() {
  const result = await request.get('https://codingwithstefan.com/table-example');
  const $ = cheerio.load(result);

  const scrapedRows = [];
  const tableHeaders = [];

  $('body > table > tbody > tr').each((index, element) => {
    if (!index) {
      const ths = $(element).find('th');
      ths.each((_, element) => {
        tableHeaders.push($(element).text().toLowerCase());
      });
      return true;
    }

    const tableRow = {};
    const tds = $(element).find('td');
    tds.each((_index, element) => {
      tableRow[tableHeaders[_index]] = $(element).text();
    });

    scrapedRows.push(tableRow);
  });

  console.log(scrapedRows);
}

main();
