/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = new Object();
  nums.forEach((num) => {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  });
  for (let el in obj) {
    if (obj[el] === 1) {
      return el;
    }
  }
};
