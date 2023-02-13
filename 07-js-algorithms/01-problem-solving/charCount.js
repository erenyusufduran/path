/*
 * make object to return at end
 * loop over string, for each character.
 *      if the char is a number / letter AND is a key in object, add one to count
 *      if he char is a number / letter AND not in object, add it to object and set value to 1
 *      if char is something else (space, period, etc.) don't do anything
 * return object at end
 */
function charCount(str) {
  const obj = new Object();
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  console.log(obj);
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

charCount("ER  - EN Yasd etrsdg  as FLskd .. . asşdlas");
