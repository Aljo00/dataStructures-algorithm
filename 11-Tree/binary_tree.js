class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    let newTreeNode = new TreeNode(value);

    if (!this.root) {
      this.root = newTreeNode;
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (!current.left) {
        current.left = newTreeNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newTreeNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  printTree() {
    if (!this.root) return "Tree is Empty";

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      process.stdout.write(current.value + " ");

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log();
  }
}

const Tree = new BinaryTree();

Tree.insertNode(5);
Tree.insertNode(10);
Tree.insertNode(20);
Tree.insertNode(10);
Tree.insertNode(33);
Tree.insertNode(50);
Tree.insertNode(60);
Tree.printTree();
