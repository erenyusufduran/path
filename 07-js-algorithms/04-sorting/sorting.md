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