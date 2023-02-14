# Big O Notation

We say that an algorithm is O(f(n)) if the number of simple operation the computer has to do is eventually less than a constant times f(n), as n increases.

-       f(n) could be linear (f(n) = n)
-       f(n) could be quadratic (f(n) = n**2)
-       f(n) could be constant (f(n) = 1)
-       f(n) could be something entirely different.

> In Big O Notation we are handling for the worst scenario.


-       for loops -> O(n)
-       O(n) operation inside of an O(n) operation. --> O(n**2)

## **Simplifying Big O Expressions**

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thums are consequences of the definition of big O notation.

- ### Constants Don't Matter
    -       O(2n) --> O(n)
    -       O(500) --> O(1)
    -       O(13* n ** 2) --> O(n ** 2)
- ### Smaller Terms Don't Matter
    -       O(n + 10) --> O(n)
    -       O(1000n + 50) --> O(n)
    -       O(n ** 2 + 5n + 8) --> O(n ** 2)
- ### Big O Shorthands
    - Analyzing complexity with big O can get complicated
    - There are several rules of thumb tha can help, these rules won't **ALWAYS** work, but are a helpful starting point.
        1.      Arithmetic operations are constant
        2.      Variable assignment is constant
        3.      Accessing elements in an array (by index) or object (by key) is constant
        4.      In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## **Space Complexity**

So far, we've been focusing on **time complexity**, how can we analyze the runtime ofn an algorithm as the size of the inputs increases?

We can also use big O notation to analyze **space complexity**;  how much additional memory do we need to allocaate in order to run the code in our algorithm?

### What about the inputs?

- Sometimes you'll hear the team **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs.

- Unless otherwise noted, when we talk about space complexity, technically we'll be talknig about auxiliary space complexity.

### Space Complexity in JS

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

---
    function sum(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }  
- O(1) space, because we have 2 variables, they are total and i.

---        

    function double(arr) {
        let  newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(2 * arr[i]);
        }
        return newArr;
    }
- O(n) space, because if 5 length arr goes inside, returns 5 length array.

## **Logarithms**

- We've encountered some of the most common complexities: O(1), O(n), O(n**2)
- Sometimes big O expressions involve more complex mathematical expressions
- One that appears more often than you might like is the logarithm!

- The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one.**

### Logarithm Complexity

Logarithmic time complexity is great!

- Certain searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.

## **Recap**

- To analyze the performance of an algorithm, we use Big O Notation.
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm.
- Big O Notation doesn't care about precision, only about general trends(linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.

---

## **Analyzing Performance of Arrays and Objects**

### The BIG O of Objects

- Unordered, key value pairs!

**Objects**
- When you don't need order
- When you need fast access / insertion and removal

        Insertion - O(1)
        Removal - O(1)
        Searching - O(n)
        Access - O(1)

    - When you don't need any ordering, objects are an excellent choice!

            Object.keys - O(n)
            Object.values - O(n)
            Object.entries - O(n)
            hasOwnProperty - O(1)

### When are Arrays Slow?

**Arrays**
- When you need order
- When you need fast access / insertion and removal (sort of....)

        Insertion - It depends...
        Removal - It depends...
        Searching - O(n)
        Access - O(1)

        If you push an element, O(1)
        If you add for first element, O(n)

        push - O(1)
        pop - O(1)
        shift - O(n)
        unshift - O(n)
        concat - O(n)
        slice - O(n)
        splice - O(n)
        sort - O(n * logn)
        forEach / map / filter / reduce / etc. - O(n)

        If you handling for last element, it is O(1). If you change all indexes, O(n)

1. Objects are fast at pretty much everything, but there's no order.
2. Arrays are great when you need an order, but still be mindful that it's better if you can do it to add and remove from the end and avoid adding and removing from the beginning.