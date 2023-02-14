function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let _arr = [];
  for (let element of arr) {
    if (_arr.indexOf(element) === -1) {
      _arr.push(element);
    }
  }
  return _arr.length;
}

function countUniqueValuesV2(arr) {
  arr.length === 0 && 0;
  const i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
