class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.rirght;
      } else {
        return true;
      }
    }
    return false;
  }
  dfsInOrder() {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node);
      node.rigth && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  checkHeight(root) {
    if (!root) return -1;
    const leftHeight = this.checkHeight(root.left);
    if (leftHeight === -Infinity) return -Infinity;
    const rightHeight = this.checkHeight(root.right);
    if (rightHeight === -Infinity) return -Infinity;

    const heightDiff = Math.abs(leftHeight - rightHeight);
    return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
  }
  checkBalance() {
    return this.checkHeight(this.root) !== -Infinity;
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(10);
bst.insert(12);
bst.insert(7);
bst.insert(2);
bst.insert(3);
console.log(bst);

console.log(bst.find(2));
console.log(bst.checkBalance());
