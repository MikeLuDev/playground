const visit = require('./helpers/visit');

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

const myTree = new TreeNode(1);
visit(myTree);
