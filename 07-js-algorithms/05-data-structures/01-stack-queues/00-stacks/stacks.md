# Stacks

A **LIFO** data structure!

The last element added to the stack will be the first element removed from the stack.

## How Is It Used?
This about a stack of **plates**, or a stack of **markers**, or a stack of **..anything**.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

## Where Stacks Are Used?
- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

> ### There is more than one way of implementing a stack.
- **Array Implementation**
    - Use push and pop methods
- **Linked List Implementation**
    - Use push and pop methods

**Big O of Stacks**
- Insertion - **O(1)**
- Removal - **O(1)**
- Searching - **O(n)**
- Access - **O(n)**

## Recap
- Stacks are a **LIFO** data structure where the last value in is always the first one out.
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built in data structure in JS, but are relatively simple to implement.