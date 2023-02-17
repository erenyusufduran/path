# Sorting Algorithms

Sorting is the process of rearranging the items in collection (e.g. an array) so that the items are in some kind of order.

- Sorting numbers from smallest to largest
- Sorting movies based on release year
    
    ---

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disanvantages.

    ---

## Telling JS how to Sort?
- The built-in sort method accepts an optional comparator function.
- You can use this comparator function to tell JS how you want it to sort.
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
    - If it returns a negative number, a should come before a.
    - If it returns a positive number, a should come after b.
    - If it returns 0, a and b are the same as far as the sort is concerned.

            function numberCompare(num1, num2) {
                return num1 - num2;
            }
            [6, 4, 15, 10].sort(numberCompare);
            output -> [4, 6, 10, 15]


            function compareByLen(str1, str2) {
                return str2.length - str1.length;
            }
            ["Steele", "Colt", "Algorithms"].sort(compareByLen)
            output -> ["Algorithms", "Steele", "Colt"]

---

## Bubble Sort  

A sorting algorithm where the largest values bubble up to the top!

- Start looping from with a variable called i the end of the array towards the beginning.
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values
- Return the sorted array
- **Worst Case** O(n**2)
- **Best Case** O(1)

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

- Store the first element as the smallest value.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new **minimum** and continue until the end of the array.
- If the **minimum** is not the value (index) you initiaily began with, swap the two values.

## Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted.

- Start by picking the second element in array.
- Compare the second elemenet with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.

---

- Bubble sort, selection sort, and insertion sort are all roughly equivalent
- All have avergae time complexities that are quadratic
- We can do better... but we need more complex algorithms!

## ** Intermediate Sorting Algorithms**

- The sorting algorithms we've learned so far don't scale well.

### **Faster Sorts**

- There is a family of sorting algorithms that can improve time complexity **from O(n ** 2) to O(n*logn)**.
- There's tradeoff between efficiency and simplicity.
- The more efficient algorithms are much less simple, and generally take longer to understand.


## Merge Sort

- It's a combination of two things - merging and sorting.

    ---
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
- This function should run in **O(n + m)** time and **(n+m)** space and **should not** modiy the parameters passed to it.

    ---

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at:
    - If the  value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
    - Once we exhaust one array, push in all remaining values from the other array.
- Time Complexity **O(n * logn)** Best / Average / Worst  
- Space Complexity **O(n)**

## Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.

Works by selecting one element (called the **pivot**) and finding the index where the pivot should end up in the sorted array.

### **Pivot Helper**

- In order to implement merge sort, it's useful to first implement a function responsible arranging elements, in an array on either side of a pivot.
- Given an array, this helper function should designate an element as the pivot.
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this **in place**, that is, it should not create a new array.
- When complete, the helper should return the index of the pivot.

    ---
**Picking Pivot**
- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity, we'll always choose the pivot to be the first element. 

    ---
**Pivot Pseudo**
1. It will help to accept three arguments: an array, a start index, an end index
2. Grab the pivot from the start of the array
3. Store the current pivot index in a variable
4. Loop through the array from the start until the end
    - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.

    ---
**Quick Sort Pseudo**
1. Call the pivot helper on the array
2. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and tthe subarray to the right of that index.
3. Your base case occurs when you consider a subarray with less than 2 elements.

- Time Complexity **O(n * logn)** Best / Average
    - **O(n ** 2)** Worst
- Space Complexity **O(logn)**

---

## **Comparison Sorts**

### *Average Time Complexity*
- Bubble Sort - **O(n ** 2)**
- Insertion Sort - **O(n ** 2)**
- Selection Sort - **O(n ** 2)**
- Quick Sort - **O(n * logn)**
- Merge Sort - **O(n * logn)**

