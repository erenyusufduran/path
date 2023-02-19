# Hash Tables

- Hash tables are used  to store **key-value** pairs.
- They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all of the following operations:
    - finding values,
    - adding new values,
    - removing values

Nearly every programming language has some sort of hash table data structure. Because of their speed, hash tables are very commonly used!

---

- To implement a hash table, we'll be using an array.
- In order to look up vlaues by key, we need a way to *convert keys into valid array indices*.
- A function that performs this task is called a **hash function**.

### What Makes a Good Hash?
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly.
3. Deterministic (same input yields same output)

### Refining Our Hash
Problems with our current hash:
1. Only hashes strings
2. Not constant time - linear in key length
3. Could be a little more random

### Prime Numbers
- The prime number in the hash is helpful in spreading out the keys more uniformly.
- It is also helpful if the array that you're putting values into has a prime length.
- <a href="https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why">Does making array size a prime number help in hash table implementation? </a>
- <a href="https://stackoverflow.com/questions/1145217/why-should-hash-functions-use-a-prime-number-modulus">Why should hash functions use a prime number modulus?</a>
- <a href="https://levelup.gitconnected.com/prime-numbers-and-why-blockchains-cant-exist-without-them-f629bdc54bb3">Prime numbers — and why blockchains can’t exist without them!</a>

### Dealing with Collisions
- Even with a large array and a great hash function, collisions are inevitable.
- There are many strategies for dealing with collisions, but we'll focus on two:
    1. **Seperate Chaining**
        - With *seperate chaining*, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
        - This allows us to store multiple key-value pairs at the same index.
    2. Linear Probing
        - With *linear probing*, when we find a collision, we search through the array to find the next empty slot.
        - Unlike with seperate chaining, this allows us to store a single key-value at each index.