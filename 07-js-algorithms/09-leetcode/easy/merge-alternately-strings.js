/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let newStr = "";
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== undefined) {
      newStr += word1[i];
    }
    if (word2[i] !== undefined) {
      newStr += word2[i];
    }
  }
  for (let i = word1.length; i < word2.length; i++) {
    newStr += word2[i];
  }
  return newStr;
};

console.log(mergeAlternately("eren", "goksen"));
