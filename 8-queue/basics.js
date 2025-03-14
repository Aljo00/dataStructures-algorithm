// basic implementation queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow, can't perform dequeue";
    }

    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Underflow, can't perform peek";
    }

    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    console.log(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(96);
myQueue.enqueue(786);

// myQueue.dequeue();
// console.log(myQueue.dequeue());
// console.log(myQueue.peek());

myQueue.printQueue();
