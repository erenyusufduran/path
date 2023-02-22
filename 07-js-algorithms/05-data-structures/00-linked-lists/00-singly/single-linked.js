class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Adding a new node to the end of the Linked List!
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Removing a node from the end of the Linked List!
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Removing from the start.
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Adding to the beginning.
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Retrieving a node by it's position in the Linked List!
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Changing the value of a node based on it's position in the Linked List!
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // Adding a note to the spesific position.
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(val);
    // With !! we are taking a list then we are taking with ! false, then ! we are taking true
    if (index === 0) return !!this.unshift(val);
    const prev = this.get(index - 1);
    const newNode = new Node(val);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let _next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      _next = node.next;
      node.next = prev;
      prev = node;
      node = _next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hi");
list.push("You");
list.push("are");
list.push("erdfsdf");
console.log(list);

list.pop();
list.print();
list.reverse();
list.print();
