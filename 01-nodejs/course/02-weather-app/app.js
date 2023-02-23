const request = require("request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=Kayseri`;

request({ url, json: true }, (error, response) => {
  const res = response.body.current;
  console.log(
    `It is currently ${res.temperature} degrees out. There is a %${res.precip} chance of rain`
  );
});
