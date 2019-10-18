const visit = require('./helpers/visit');

class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new BinaryTreeNode(data);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    // Node should be inserted left
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    // Node should be inserted right
    else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  // Set root to return value of removeNode
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    // const returnNode = node;

    if (node === null) return null;
    // Node to be removed is on the left side
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // Node to be removed is on the right side
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // Found the node to be removed
    else {
      // Deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // Deleting node with one child
      else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Deleting a node with two children
      else {
        const aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);

        return node;
      }
    }
  }
}

const BT = new BinarySearchTree();
BT.insert(0);
BT.insert(2);
BT.insert(1);
BT.insert(-3);

console.log(BT);
