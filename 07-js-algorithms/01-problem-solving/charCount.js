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
  const newArr = str.toLowerCase().split("");
  newArr.forEach((element) => {
    if (/[a-z0-9]/.test(element)) {
      obj[element] = ++obj[element] || 1;
    }
  });
  console.log(obj);
}

charCount("ER  - EN Yasdasd");
