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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    found = false;
    while (current & !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  breadFirstSearch() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node); // or node.value
      node.left && queue.push(node.left);
      node.rigth && queue.push(node.right);
    }
    return data;
  }
  dfsPreOrder() {
    const data = [];
    function traverse(node) {
      data.push(node);
      node.left && traverse(node.left);
      node.rigth && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  dfsPostOrder() {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.rigth && traverse(node.right);
      data.push(node);
    }
    traverse(this.root);
    return data;
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
}

const tree = new BinarySearchTree();
tree.root = new Node(15);
tree.root.right = new Node(16);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
