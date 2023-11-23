const request = require('request-promise');
const cheerio = require('cheerio');

const sampleResult = {
  title: 'Bohemian Rhapsody',
  rank: 1,
  imdbRating: 8.4,
  descriptionUrl: '',
  posterUrl: '',
};

async function scrapeTitlesRanksAndRatings() {
  const result = await request.get('https://www.imdb.com/chart/moviemeter?ref_=nc_mc_mpm');
  const $ = await cheerio.load(result);

  const movies = $('li.ipc-metadata-list-summary-item')
    .map((i, element) => {
      const title = $(element).find('.ipc-title__text').text();
      const descriptionUrl = "https://www.imdb.com" + $(element).find('a').attr('href');
      const imdbRating = $(element).find('.ipc-rating-star').text().split('(')[0].trim();
      return { title, descriptionUrl, imdbRating, rank: i };
    })
    .get();
  console.log(movies);
}

scrapeTitlesRanksAndRatings();
