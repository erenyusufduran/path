# Problem Solving Approach & Patterns

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns

> <font size="3px">Algorithms is a **process** or **set of steps** to accomplish a certain task.</font>

Almost everything that you do in programming involves some kind of algorithm!

- It's the **foundation** for being a successful problem solving and developer.

<font size="4px">How do you Improve?</font>

---

## 1. **Devise** a plan for solving problems

### Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve / Simplify
- Look Back and Refactor

#### **1. Understand The Problem**

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
5. How should I label the important pieces of data that aree a part of the problem?

#### **2. Concrete Examples**

Coming up with examples can help you understand the problem better

Examples also provide sanity checks that your eventual soluyion works how it should

1. Start with simple examples.
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

#### **3. Break It Down**

- Explicitly write out the speps you need to take.
    - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

#### **4. Solve or Simplify**

**Simplify**
- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

#### **5. Look Back & Refactor**

**Refactoring Questions**
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

---

## 2. **Master** common problem solving patterns

### Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n**2) operations with arrays/strings.

- Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

        same([1,2,3], [4,1,9]) ->  true
        same([1,2,1], [4,4,1]) -> false

        function same(arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }
            for (let i = 0; i < arr1.length; i++) {
                let correctIndex = arr2.indexOf(arr1[i] ** 2)
                if(correctIndex === -1) {
                    return false;
                }
                arr2.splice(correctIndex, 1);
            }
            return true;

**Anagrams**

Given two strings, write a function to determine if the second string is an anagram of the first. an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

### Multiple Pointers

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

**Very** efficient for solving problems with minimal space complexity as well.

        function sumZero(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = i+1; j < arr.length; j++) {
                    if (arr[i] + arr[j] === 0) {
                        return [arr[i], arr[j]];
                    }
                }
            }
        }

        function sumZeroV2(arr) {
            let left = 0;
            let right = arr.length - 1;
            while (left < right) {
                let sum = arr[left] + arr[right];
                if (sum === 0) {
                    return [arr[left], arr[right]];
                } else if (sum > 0) {
                    rigth--;
                } else {
                    left++;
                }
            }
        }

**countUniqueValues**

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorte

### Sliding Window

This pattern involves creaating a **window** which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.d

### Divide and Conquer Pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously **decrease time complexity**