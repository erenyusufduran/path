function breakingRecords(scores) {
  const arr = [0, 0];
  const maxMin = [scores[0], scores[0]];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxMin[0]) {
      arr[1]++;
      maxMin[0] = scores[i];
    } else if (maxMin[1] > scores[i]) {
      arr[0]++;
      maxMin[1] = scores[i];
    }
  }
  return arr.reverse();
}
