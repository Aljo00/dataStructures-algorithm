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

  printStack() {}
}

let stack = new Stack();

stack.push(30);
stack.push(40);
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
// queue.enQueue(10);
// queue.enQueue(20);
// queue.enQueue(30);
// queue.display();

// queue.deQueue();
// queue.display();

// queue.enQueue(40);
// queue.display();

// queue.deQueue();
// queue.display();

//Combine two sorted arrays into one array with o(n) time complexity

function mergeSortArr(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

let arr1 = [1, 3, 5, 7, 9, 10, 11];
let arr2 = [1, 2, 4, 6, 8, 25, 1000];

// console.log(mergeSortArr(arr1, arr2));
