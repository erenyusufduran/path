# Recursion

- Understand the two essential components of a recursive functions.
- Use helper method recursion and pure recursion to solve more difficult problems.

## What is recursion?

A **process** (a function in our case) that calls itself.

- JSON.parse / JSOn.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal

> In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.

## The call stack

- It's a **stack** data structure.
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JS sees the **return** keywork or when the function ends, the compiler will remove (**pop**)

- YOu're used to functions being pushed on the call stack and popped off when they are done.
- When we write recursive functions, we keep pushing new functions onto the call stack!

> Invoke the **same** function with a different input until you reach your base case!

- **Base Case** is the condition when the recursion ends.

---

## Common Recursion Pitfalls

- No base case
- Forgetting to return or returning the wrong thing!

## Pure Recursion

- For arrays, use methods like **slice, the spread operator**, and **concat** that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like **slice, substr, or substring** to make copies of strings.
- To make copies of objects use **Object.assign, or the spread operator**