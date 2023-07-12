function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const m = apples.length;
  const n = oranges.length;
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < m; i++) {
    const point = a + apples[i];
    if (point >= s && point <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < n; i++) {
    const point = b + oranges[i];
    if (point <= t && point >= s) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
