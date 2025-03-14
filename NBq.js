// Implement stack by using two queue;

class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(val) {
    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }

    this.q1.push(val);

    while (this.q2.length !== 0) {
      this.q1.push(this.q2.shift());
    }
  }

  pop() {
    if (this.q1.length === 0) return false;

    return this.q1.shift();
  }

  peek() {
    if (this.q1.length === 0) return false;
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }

  printStack() {
    console.log([...this.q1]);
  }
}

let stack = new Stack();

stack.push(30);
stack.push(40);
console.log(stack.peek());
console.log(stack.pop());
stack.pop();
console.log(stack.isEmpty());
console.log(stack.peek());

//Implement the queue by using two stack;

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(val) {
    this.s1.push(val);
  }

  deQueue() {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    if (!this.s2.length) {
      return false;
    }

    this.s2.pop();
  }

  display() {
    const result = [...this.s2].reverse().concat(this.s1);
    console.log(result);
  }
}

// Example usage
const queue = new Queue();
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.display();

queue.deQueue();
queue.display();

queue.enQueue(40);
queue.display();

queue.deQueue();
queue.display();

//Combine two sorted arrays into one array with o(n) time complexity

// function mergeSortArr(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// let arr1 = [1, 3, 5, 7, 9, 10, 11,20000];
// let arr2 = [1, 2, 4, 6, 8, 25, 1000];

// console.log(mergeSortArr(arr1, arr2));

//Sort a string by using merge sort
function mergeSort(str) {
  if (str.length <= 1) return str;

  let mid = Math.floor(str.length / 2);

  let left = mergeSort(str.slice(0, mid));
  let right = mergeSort(str.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortStr = "";
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortStr += left[i];
      i++;
    } else {
      sortStr += right[j];
      j++;
    }
  }

  return sortStr + left.slice(i) + right.slice(j);
}

// console.log(mergeSort("nmlkjihgfedcba"));

class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
  }
}

class linkedList {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }

    console.log(hash);
    return hash % this.table.length;
  }

  insert(key, value) {
    let index = this.hash(key);
    let newNode = new Node(key, value);

    if (!this.table[index]) {
      this.table[index] = newNode;
    } else {
      let current = this.table[index];

      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }

        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    this.table.forEach((bucket, index) => {
      let str = "";
      let current = bucket;

      // Traverse the linked list in the current bucket
      while (current) {
        str += `(${current.key}: ${current.value}) -> `;
        current = current.next;
      }

      // If bucket is empty
      if (!str) {
        console.log(`${index}: null`);
      } else {
        console.log(`${index}: ${str}null`);
      }
    });
  }
}

const ht = new linkedList();
ht.insert("apple", 10);
ht.insert("banana", 20);
ht.insert("grape", 30);
ht.insert("apricot", 40); // This might cause a collision depending on hash function
ht.insert("banana", 50); // This should update the existing value

ht.display();
