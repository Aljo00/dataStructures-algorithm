class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  size(){
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, val){
    let newNode = new Node(val);

    if(index < 0 || index > this.size()){
      console.log("Index is out of bounnds;");
      return;
    }

    if(index === 0){
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop(){
    if(!this.head){
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index){
    if( index < 0 || index > this.size()){
      console.log("Index is out of bounds");
      return;
    }

    if(index === 0){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index-1; i++) {
      current = current.next 
    }

    current.next = current.next.next;
  }

  PrintList() {
    let current = this.head;
    let listStr = "";
    while (current) {
      listStr += current.val + " -> ";
      current = current.next;
    }
    console.log(listStr + "NULL");
  }
}

const linkedList = new LinkedList();
linkedList.addFirst(25);
linkedList.addFirst(5);
linkedList.addFirst(10);
linkedList.addLast(5);
linkedList.addAt(3, 1);
linkedList.removeTop()
linkedList.removeLast()
linkedList.removeAt(2)
linkedList.PrintList();
