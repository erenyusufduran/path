require("dotenv").config();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, { temperature }) => {
      if (error) {
        return console.log(error);
      }
      console.log(`In ${location} is currently ${temperature} degrees out.`);
    });
  });
}
