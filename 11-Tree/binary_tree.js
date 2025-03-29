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

  // DFS Approach: Recursive Height Calculation
  getHeightDFS(node = this.root) {
    if (!node) return 0; // Base case: Empty tree or leaf node

    let leftHeight = this.getHeightDFS(node.left);
    let rightHeight = this.getHeightDFS(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
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

  getDepth(node, value, depth = 0) {
    if (!node) return -1; // Node not found

    if (node.value === value) return depth;

    let leftDepth = this.getDepth(node.left, value, depth + 1);
    if (leftDepth !== -1) return leftDepth; // If found in left subtree

    return this.getDepth(node.right, value, depth + 1);
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

console.log(Tree.getHeightDFS())
console.log(Tree.getDepth(Tree.root, 60))
Tree.printTree();
