const getPuzzle = async (length) => {
  const response = await fetch(
    `https://random-word-api.herokuapp.com/word?length=${length}`,
    {}
  );
  if (response.status === 200) {
    const data = await response.json();
    return data[0];
  } else {
    throw new Error("Unable to get puzzle.");
  }
};

/*
 * Promise chaining is super useful when we're trying to do two things in a row.
 * Both end up being just promise calls.
 * So imagine that we had another function similar to get country called get countries in region.
 * --> If we wanna fetch more things:
 *  Based off of their region, we can get all oher countries in that region and print them.
 *  --> That would require us to create two function with two seperate promises where the data for the first
 *      promise needs to be received. Before the second promise, we have to know what region is country in.
 */

// const getPuzzle = (wordCount) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     const proxy = "https://cors-anywhere.herokuapp.com/";

//     request.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject("An error has taken place.");
//       }
//     });

//     request.open(
//       "GET",
//       `${proxy}http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
//     );
//     request.send();
//   });
// };

const getPuzzle_WithoutAsync = (wordCount) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";

  return fetch(
    `${proxy}http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch the puzzle.");
      }
    })
    .then((data) => data.puzzle);
};

// const _getPuzzle = (wordCount, callback) => {
//   const request = new XMLHttpRequest();
//   const proxy = "https://cors-anywhere.herokuapp.com/";

//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       callback(undefined, data.puzzle);
//     } else if (e.target.readyState === 4) {
//       callback("An error has taken place", undefined);
//       console.log("An error has taken place.");
//     }
//   });
//   request.open(
//     "GET",
//     `${proxy}http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
//   );
//   request.send();
// };

// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest();
//   const proxy = "https://cors-anywhere.herokuapp.com/";

//   request.open(
//     "GET",
//     `${proxy}http://puzzle.mead.io/puzzle?wordCount=3`,
//     false
//   );
//   request.send();

//   if (request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText);
//     return data.puzzle;
//   } else if (request.readyState === 4) {
//     throw new Error("Things did not go well.");
//   }
// };
