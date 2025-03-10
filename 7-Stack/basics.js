// basic stack implementation

class Stack {
  constructor(){
    this.stack = [];
  }

  push(val){
    this.stack.push(val);
  }

  size(){
    return this.stack.length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  pop(){
    if(this.isEmpty()){
      return "Stack is empty";
    }

    return this.stack.pop();
  }

  peek(){
    if(this.isEmpty()){
      return "Stack is empty";
    }

    return this.stack[this.size() - 1];
  }

  printStack(){
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    for(let i = 0; i < this.size(); i++){
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();

stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.isEmpty());
stack.printStack()

const arr = [1,2,3,45];
console.log(arr.pop());
