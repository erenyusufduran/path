# HEAP

Heaps are another type of trees.

**Very** similar to a binary search tree, but with some different rules!

In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.

## Max Binary Heap
- Each parent has at most two child nodes.
- The value of each parent node is **always** greater than its child nodes.
- In a Max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

### Why do we need to know this?
- Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures.
- They are also used quite a bit, with **graph traversal** algorithms.

### **Insert Pseudocode**
1. Push the value into the values property on the heap.
2. Bubble Up:
    1. Create a variable called index which is the length of the values property -1
    2. Create a variable called parentIndex which is the floor of (index-1)/2
    3. Keep looping as long as the values element at the parentIndex is less than the values element at the child index.
        1. Swap the value of the values element at the parentIndex with the value of the element property at the child index.
        2. Set the index to be the parentIndex, and start over!

### **Removing Pseudocode**
> Also called extractMax
- Remove the root
- Replace with the most recently added
- Adjust (Sink Down) 
    - The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down)

        ---
    1. Swap the first value in the values property with the last one.
    2. Pop from the values property, so you can return the value at the end.
    3. Have the new root *sink down* to the correct spot?
        1. Your parent index starts at 0 (the root)
        2. Find the index of the left child: 2 * index + 1
        3. Find the index of the right child: 2 * index + 2
            - If the left or right child is greater than the element, swap.
            - If both left and right children are larget, swap with the largest child.
        4. The child index you swapped to now becomes the new parent index.
        5. Keep looping and swapping until neither child is larger than the element.
        6. Return the old root!
    