class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    let newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }

        current = current.right;
      }
    }
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      process.stdout.write(node.value + " ");
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node) {
      process.stdout.write(node.value + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      process.stdout.write(node.value + " ");
    }
  }

  deleteNode(root, value) {
    if (!root) return null;

    //Search for the node we want to delete
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      //node found. Now we have to delete that node.

      //case 1 :-- node have no child
      if (!root.left && !root.right) return null;

      //case2 :-- node have only one child
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      //case3 :- node have 2 child
      let value = this.getMinVal(root.right);
      root.value = value.value;
      root.right = this.deleteNode(root.right, value.value);
    }

    return root;
  }

  getMinVal(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  findTheClosest(target) {
    let current = this.root;
    let closeVal = current.value;

    while (current) {
      if (Math.abs(target - current.value) < Math.abs(target - closeVal)) {
        closeVal = current.value;
      }

      if (target < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return closeVal;
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return "There is no Second largest element in this tree.";
    }

    let current = this.root;
    let parent = null;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      let temp = current.left;
      while (temp.right) {
        temp = temp.right;
      }

      return temp.value;
    }

    return parent.value;
  }

  findMin(node = this.root) {
    if (!node) return "The Tree is empty";
    if (!node.left) return node.value;
    return this.findMin(node.left);
  }

  findKthMin(k) {
    let count = 0;
    let result = null;

    function inOrder(node) {
      if (!node || result !== null) return result;
      inOrder(node.left);

      count++;
      if (count === k) {
        result = node.value;
        return;
      }

      inOrder(node.right);
    }

    inOrder(this.root);
    return result !== null ? result : "K is out of range";
  }

  areIdentical(root1, root2) {
    if (!root1 && !root2) return true;

    if (!root1 || !root2) return false;

    return (
      root1.value === root2.value &&
      this.areIdentical(root1.left, root2.left) &&
      this.areIdentical(root1.right, root2.right)
    );
  }

  // 1️⃣ Calculate height of the tree
  getHeight(node) {
    if (!node) return -1; // Height of null node is -1
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // 2️⃣ Calculate depth of a node
  getDepth(node, value, depth = 0) {
    if (!node) return -1; // If not found, return -1

    if (node.value === value) return depth; // If found, return depth

    let leftDepth = this.getDepth(node.left, value, depth + 1); // Check left subtree
    if (leftDepth !== -1) return leftDepth; // If found in left subtree, return it

    return this.getDepth(node.right, value, depth + 1); // Check right subtree
  }

  findThirdLargest() {
    let count = 0;
    let result = null;

    function reverseInOrder(node) {
      if (!node || count >= 3) return;

      // Traverse right first (higher values)
      reverseInOrder(node.left);

      count++;
      if (count === 3) {
        result = node.value;
        return;
      }

      // Traverse left
      reverseInOrder(node.right);
    }

    reverseInOrder(this.root);
    return result !== null ? result : "Tree has less than 3 nodes";
  }

  isBalanced() {
    function checkHeight(node) {
      if (!node) return 0; // Base case: height of null node is 0

      let leftHeight = checkHeight(node.left);
      if (leftHeight === -1) return -1; // If left subtree is unbalanced, return -1

      let rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1; // If right subtree is unbalanced, return -1

      if (Math.abs(leftHeight - rightHeight) > 1) return -1; // If imbalance found

      return Math.max(leftHeight, rightHeight) + 1; // Return height of current node
    }

    return checkHeight(this.root) !== -1;
  }

  printLeafNodes(node = this.root) {
    if (!node) return; // Base case: If node is null, return

    // If the node has no children, it is a leaf node
    if (!node.left && !node.right) {
      console.log(node.value);
      return;
    }

    // Recursively call for left and right subtree
    if (node.left) this.printLeafNodes(node.left);
    if (node.right) this.printLeafNodes(node.right);
  }
}

const bst = new BST();

bst.insertNode(50);
bst.insertNode(30);
bst.insertNode(40);
bst.insertNode(20);
bst.insertNode(70);
bst.insertNode(60);
bst.insertNode(80);

const bst2 = new BST();
bst2.insertNode(50);
bst2.insertNode(30);
bst2.insertNode(40);
bst2.insertNode(20);
bst2.insertNode(70);
bst2.insertNode(60);
bst2.insertNode(80);

console.log(bst.findThirdLargest());

console.log(bst.isBalanced());

bst.printLeafNodes()

// console.log(bst.getHeight(bst.root));

// console.log(bst.getDepth(bst.root, 50))

// console.log("This is inOrder traversal");
// bst.inOrder(bst.root);

// console.log("\nThe close value of 20 is ", bst.findTheClosest(60));

// console.log("This is preOrder traversal");
// bst.preOrder(bst.root);

// console.log(" \nThis is postOrder traversal");
// bst.postOrder(bst.root);

// console.log(
//   "\nThe Second largest value of this tree is " + bst.findSecondLargest()
// );

// console.log("The Minimum value of this node is " + bst.findMin());

// console.log("The 5th smallest number is " + bst.findKthMin(1));

// console.log(
//   "The two trees are identical " + bst.areIdentical(bst.root, bst2.root)
// );
