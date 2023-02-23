const request = require("request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=New%20York`;

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
