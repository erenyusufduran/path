# Singly Linked Lists

A data structure that contains a **head, tall** and **length** property.

Linked Lists consists of nodes, and each **node** has a **value** and a **pointer** to another node or null.

**Lists**
- Dont have indexes!
- Connected via nodes with a **next** pointer.
- Random access is not allowed.
**Arrays**
- Indexed in order!
- Insertion and deletion can be expensive.
- Can quickly be accessed at a spesific index.

### **Big O** of Singly Linked Lists

- Insertion - **O(1)**
- Removal - *It depends* **O(1) or O(n)**
- Searching - **O(n)**
- Access - **O(n)**

## Recap

- Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
- Arrays contain a built in index whereas Linked Lists don't.
- The idea of a list data structure that consists of nodes is the foundation for other data structures like **Stacks** and **Queues**