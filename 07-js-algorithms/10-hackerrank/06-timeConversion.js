function timeConversion(s) {
  const arr = Array.from(s);
  let str = "";
  if (arr[8] === "P") {
    if (!(arr[0] + arr[1] === "12")) {
      arr[0] = Number(arr[0]) + 1;
      arr[1] = Number(arr[1]) + 2;
    }
  } else {
    if (arr[0] + arr[1] === "12") {
      arr[0] = 0;
      arr[1] = 0;
    }
  }
  for (let i = 0; i < 8; i++) {
    str += arr[i];
  }
  return str;
}
