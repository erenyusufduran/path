function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log("Swapping");
    console.log(arr);
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    console.log(arr);
  }
  return arr;
}

selectionSort([34, 65, 21, 34, 7, 3, 65, 2]);
