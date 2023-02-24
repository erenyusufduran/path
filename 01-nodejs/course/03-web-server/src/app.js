const path = require("path");
const express = require("express");
const hbs = require("hbs");

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();

// Setup handlebars engine and views location.
app.set("view engine", "hbs");
app.set("views", viewsPath); // this is for maybe wanna make something different views path name like templates.
hbs.registerPartials(partialsPath);

// Setup static directory to serve.
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Eren Yusuf Duran",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Eren Yusuf Duran",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Eren Yusuf Duran",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
