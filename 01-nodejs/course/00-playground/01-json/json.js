const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

/*
 * JSON stringify to take an object and convert it to JSON.
 *      in stringify version we can't reach its properties like book.title
 *
 * JSON parse to take JSON data in and convert it to an object.
 *
 * If the data is in JSON format, we can write them to a file.
 *
 * If the data is storing in a JSON file; when we read it,
 *    If we want it to be JSON we should parse the data with JSON.parse, because the data represent binary data.
 *    If we want it to be string, we should parse it to the string with .toString() method.
 */

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("book-data.json", bookJSON);

// const dataBuffer = fs.readFileSync("book-data.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const personBuffer = fs.readFileSync("data.json");
const personJSON = personBuffer.toString();
const personData = JSON.parse(personJSON);
personData.age++;
fs.writeFileSync("data.json", JSON.stringify(personData));
console.log(personData);
