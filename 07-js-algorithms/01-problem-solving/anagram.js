function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    obj[letter] ? obj[letter]++ : (obj[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("eren", "nere"));
console.log(validAnagram("goksen", "neksof"));
