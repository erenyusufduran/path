const request = require("request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=Kayseri`;

request({ url, json: true }, (error, response) => {
  const res = response.body;
  if (error) {
    console.log("Unable to connect to weather service");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      `It is currently ${res.current.temperature} degrees out. There is a %${res.current.precip} chance of rain`
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXJlbi1kdXJhbiIsImEiOiJjbGVpNjUyb2EwMDc0NDVxc3owYTBpbnZ2In0.DNAkP2Fv4rxmDTShMM39yQ&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
