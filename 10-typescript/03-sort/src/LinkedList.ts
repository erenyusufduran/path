class ListNode {
  next: ListNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: ListNode | null = null;

  add(data: number): void {
    const listNode = new ListNode(data);
    if (!this.head) {
      this.head = listNode;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = listNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let listNode = this.head;
    while (listNode.next) {
      length++;
      listNode = listNode.next;
    }
    return length;
  }

  at(index: number): ListNode {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;
    let listNode: ListNode | null = this.head;
    while (listNode) {
      if (counter === index) {
        return listNode;
      }
      counter++;
      listNode = listNode.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let listNode: ListNode | null = this.head;
    while (listNode) {
      console.log(listNode.data);
      listNode = listNode.next;
    }
  }
}
