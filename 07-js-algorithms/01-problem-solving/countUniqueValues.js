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
