# Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

> Using past knowledge to make solving a future problem easier.

## Overlapping Subproblems

A problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are reused several times.

### _Fibonacci Squence_

Every number after the first two is the sum of the two preceding ones.

### _Merge Sort_

We were splitting the array two pieces every time. Then we were merging them.

### Optimal Substructure

A problem is said to have **optimal substructure** if an optimal solution can be constructed from optimal solutions of it subproblems.

## Memoization

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

        function fib(n, memo=[]) {
            if (memo[n] !== undefined) return memo[n];
            if (n <= 2) return 1;
            const res = fib(n-1, memo) + fib(n-2, memo);
            memo[n] = res;
            return res;
        }

- With memoization we are getting faster.

## Tabulation

- Storing the result of a previous result in a **table** (usually an array)
- Usually done using **iteration**
- Better **space complexity** can be achieved using tabulation
- Tabulation Version of Fibonacci:

        function fib(n) {
            if (n <= 2) return 1;
            const fibNums = [0, 1, 1];
            for (let i = 3; i <= n; i++) {
                fibNums[i] = fibNums[i-1] + fibNums[i-2];
            }
            return fibNums[n];
        }

- With memoization we could take stack over flow error. Because it is a recursive function, and using stack. Tabulation don't give error.
