const isPalindrome = (x) => {
  const numStr = x.toString();
  if (numStr.length === 1) return true;
  if (numStr.length === 2) return numStr[0] === numStr[1];
  if (numStr[0] === numStr.slice(-1)) return isPalindrome(numStr.slice(1, -1));
  return false;
};
