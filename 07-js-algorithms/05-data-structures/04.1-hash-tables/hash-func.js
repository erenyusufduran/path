// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     const value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 13));
console.log(hash("orange", 13));
console.log(hash("cyan", 13));
console.log(hash("maroon", 13));
