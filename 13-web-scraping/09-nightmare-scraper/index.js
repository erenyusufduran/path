const request = require('request-promise');
const cheerio = require('cheerio');

const baseUrl = "'https://www.imdb.com";

async function scrapeTitlesRanksAndRatings() {
  const result = await request.get(`${baseUrl}/chart/moviemeter?ref_=nc_mc_mpm`);
  const $ = cheerio.load(result);

  const movies = $('li.ipc-metadata-list-summary-item')
    .map((i, element) => {
      const title = $(element).find('.ipc-title__text').text();
      const descriptionUrl = baseUrl + $(element).find('a').attr('href');
      const imdbRating = $(element).find('.ipc-rating-star').text().split('(')[0].trim();
      return { title, descriptionUrl, imdbRating, rank: i };
    })
    .get();
  return movies;
}

async function scrapePosterUrl(movies) {
  try {
    const moviesWithPosterUrls = await Promise.all(
      movies.map(async (movie) => {
        const html = await request.get(movie.descriptionUrl);
        const $ = cheerio.load(html);
        movie.posterUrl = baseUrl + $('.ipc-lockup-overlay').attr('href');
        return movie;
      })
    );
    return moviesWithPosterUrls;
  } catch (error) {
    console.error(error);
    return movies;
  }
}

async function main() {
  const movies = await scrapeTitlesRanksAndRatings();
  const moviesWithPosters = await scrapePosterUrl(movies);
  console.log(moviesWithPosters);
}

main();
