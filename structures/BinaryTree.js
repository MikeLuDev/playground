const visit = require('./helpers/visit');

class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const nodeOne = new BinaryTreeNode(1);

visit(nodeOne);
