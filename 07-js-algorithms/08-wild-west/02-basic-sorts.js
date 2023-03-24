function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
}

numArray = [5, 46, 87, 12, 43, 67, 98, 56, 342, 1, 2, 4547, 78];
// bubbleSort(numArray);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
}

// selectionSort(numArray);
console.log(numArray);
