const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
require('dotenv').config();

async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://accounts.craigslist.org/login');
    await page.type('input#inputEmailHandle', 'erenyusufduran1905@gmail.com');
    await page.type('input#inputPassword', process.env.password);
    await page.click('button#login');

    await page.goto('https://accounts.craigslist.org/login/home?show_tab=settings');

    const content = await page.content();
    const $ = await cheerio.load(content);
    console.log($("body > article > section > div.accountsettings > table > tbody > tr:nth-child(1) > td.setting_value").text())
    
  } catch (error) {
    console.error(error);
  }
}

main();
