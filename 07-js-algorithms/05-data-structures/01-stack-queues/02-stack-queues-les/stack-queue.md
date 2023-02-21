# Stacks and Queues

An arras is a *random access* data structure, where each element can be accessed directly and in constant time. A typical illustration of random access is a book - each page of the book can be open independently of others. Random access is critical to many algorithms, for example binary search.

## Stacks

A stack is a container of objects that are insterted and removed according to the **LIFO** principle. In the pushdown stacks only two operations are allowed:
- **push** them item into the stack,
- **pop** the item out of the stack.

A stack is a limited access data structure - elements can be added and removed from the stack only at the top. **Push** adds and item to the top of the stack, **pop** removes the item from the top.

A helpful analogy is to think of a stack of books; you can remove only the top book, also you can add a new book on the top.

- A stack is a **recursive** data structure. Here is a structural definition of a stack:
    - a stack is either empty or
    - it consists of a top and the rest which is a stack;

### Applications
- The simples application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.
- Another application is an **undo** mechanism in text editors; this operation is accomplished by keeping all text changes in a stack.
- **Backtracking**; This is a process when you need to access the most recent data element in a series of elements.

## Queues

A queue is a container of objects (a linear collection) that are inserted and removed according to the **FIFO** principle. An excellent example of a queue is a line of students in the food court of the UC. New additions to a line made to the back of the queue, while removal happens in the front.

In the queue only two operations are allowed **enqueue** and **dequeue**. 
- Enqueue means to insert an item into the back of the queue.
- Dequeue means removing the front item.

The picture demonstrates the **FIFO** access.

The difference between stacks and queues is in **removing**. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

### Applications

The simplest two search techniques are knows as **DFS** and **BFS**. These two searches are described by looking at how the search tree will be traversed.