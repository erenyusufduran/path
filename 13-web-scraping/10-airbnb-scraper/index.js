const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function scrapeHomesInIndexPage(url) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const html = await page.content(() => document.body.innerHTML);
    const $ = await cheerio.load(html);

    const homes = $("a.noopener")
      .map((_, element) => $(element).attr('href'))
      .get();
    console.log(homes);
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  scrapeHomesInIndexPage(
    'https://www.airbnb.com.tr/s/Avrupa-Yakas%C4%B1--%C4%B0stanbul--T%C3%BCrkiye/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&query=Avrupa%20Yakas%C4%B1%2C%20%C4%B0stanbul%2C%20T%C3%BCrkiye&place_id=ChIJhTq6hpGkyhQRC5OjsPQ0MVY&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-12-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&federated_search_session_id=ef8872e4-55d4-47a9-a962-293f9cad31f0&search_type=unknown&pagination_search=true&cursor=eyJzZWN0aW9uX29mZnNldCI6MiwiaXRlbXNfb2Zmc2V0IjoxOCwidmVyc2lvbiI6MX0%3D'
  );
}

main();
