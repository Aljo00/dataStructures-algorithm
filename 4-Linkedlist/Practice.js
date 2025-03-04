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
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(val) {
    let newNode = new Node(val);

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

  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }

    return count;
  }

  addAt(val, index) {
    let newNode = new Node(val);

    if (index < 0 || index > this.size()) {
      console.log("Index is out of bounds");
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 1; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    this.head = this.head.next;
  }

  removeLast() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log("Index is out of bounds");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next; // Store the next node
      current.next = prev; // Reverse the pointer
      prev = current; // Move prev to current
      current = next; // Move current to next node
    }

    this.head = prev; // Update head to the new first node
  }

  search(target) {
    let current = this.head;
    let index = 0;
    let result = [];
    while (current) {
      if (current.val === target) {
        result.push(index);
      }

      index++;
      current = current.next;
    }
    if (result.length > 0) {
      console.log(result);
    } else {
      console.log("-1");
    }
  }

  modifyList(index, newVal) {
    if (!this.head) {
      console.log("List is empty");
    }

    let current = this.head;
    let count = 0;

    while(current){
      if(count === index){
        current.val = newVal;
        return;
      }

      count++;
      current = current.next;
    }

    console.log("indedx is out of bounds");
    
  }

  printList() {
    let listStr = "";
    let current = this.head;

    while (current) {
      listStr += current.val + "-> ";
      current = current.next;
    }
    console.log(listStr + "NULL");
  }
}

let list = new LinkedList();

list.addFirst(10);
list.addAt(20, 0);
list.addLast(30);
list.addLast(30);
list.addLast(30);
// list.removeTop();
// list.removeLast()
// list.removeAt(0)
list.search(30);
list.modifyList(0,50)
list.printList();
