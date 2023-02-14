/*
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 *
 * Time: O(N)
 */
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

/*
 * Implement a function called, areThereDuplicates which accepts a variable
 * number of arguments, and checks whether there are any duplicates among the
 * arguments passed in. You can solve this using the frequency counter pattern
 * OR the multiple pointers pattern.
 *
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 *
 * Time - O(n)
 * Space - O(n)
 */
function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let obj = {};
  for (let arg in arguments) {
    if (!obj[arguments[arg]]) {
      obj[arguments[arg]] = 1;
    } else {
      obj[arguments[arg]]++;
    }
  }
  for (let element in obj) {
    if (obj[element] > 1) {
      return true;
    }
  }
  return false;
}

/*
 * Write a function called averagePair. Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target
 * average. There may be more than one pair that matches the average target.
 */
function averagePair(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === target) return true;
    else if (avg < target) start++;
    else end--;
  }
  return false;
}

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
