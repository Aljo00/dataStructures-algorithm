// basic stack implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.stack[this.size() - 1];
  }

  deleteTarget(target) {
    let tempStack = [];

    while (!this.isEmpty()) {
      let top = this.stack.pop();
      if (top === target) break;
      tempStack.push(top);
    }

    while (tempStack.length) {
      this.push(tempStack.pop());
    }
  }

  printStack() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    console.log(this.stack);
  }
}

const stack = new Stack();

stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.isEmpty());
stack.deleteTarget(40);
stack.printStack();
