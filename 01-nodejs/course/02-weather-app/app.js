require("dotenv").config();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Data: ", data);
    forecast(data.latitude, data.longitude, (error, data) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log("Data: ", data);
      }
    });
  }
});
