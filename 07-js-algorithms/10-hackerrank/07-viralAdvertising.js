function viralAdvertising(n) {
  let sharedWith = 5;
  let liked = 0;
  let totalLiked = 0;
  while (n) {
    if (n === 0) {
      break;
    }
    n--;
    liked = Math.floor(sharedWith / 2);
    sharedWith = liked * 3;
    totalLiked += liked;
  }
  return totalLiked;
}
