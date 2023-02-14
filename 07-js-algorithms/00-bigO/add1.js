/*
 *   What does better mean?
 * First two is more important as well.
 *  - Faster
 *  - Less memory-intensive
 *  - More readable
 */

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToV2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(addUpTo(100000000));
let t2 = performance.now();

console.log(t2 - t1);

/*
 * We say that an algorithm is O(f(n)) if the number of simple operation the
 * computer has to do is eventually less than a constant times f(n), as n icreases.
 */
