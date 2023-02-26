let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(myBook.title);

myBook.title = "Animal Farm";

console.log(myBook.title);

let otherBook = {
  title: "A People History",
  author: "Howard Zinn",
  pageCount: 723,
};

function getSummary(book) {
  console.log(`${book.title}, ${book.author}`);
}

getSummary(myBook);
getSummary(otherBook);

function convertFahrenheit(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celcius: (fahrenheit - 32) * (5 / 9),
  };
}

let temps = convertFahrenheit(59);
console.log(temps);
