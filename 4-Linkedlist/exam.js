class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  addFirst(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }

    current.next = newNode;
  }

  size(){
    let current = this.head;
    let count = 0;

    while(current.next){
      count++;
      current = current.next;
    }

    return count;
  }

  addAt(val,index){

    let newNode = new Node(val);

    if(index < 0 || index > this.size()){
      console.log("Index is out of bounds");
      return;
    }

    if(index === 0){
      this.head = newNode;
      return;
    }

    let current = this.head;

    for(let i = 1; i < index; i++){
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop(){
    if(!this.head){
      console.log("Linked is empty");     
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      console.log("Linked list is empty");
      return;
    }

    let current = this.head;
    while(current.next.next){
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index){
    if(index < 0 || index > this.size()){
      console.log("Linked list is empty");
      return;
    }

    if(index === 0){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for(let i = 1; i < index; i++){
      current = current.next
    }

    current.next = current.next.next;
  }

  search(target){
    let current = this.head;
    let count = 0;

    while(current){
      if(current.val === target){
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  reverse(){
    let prev = null;
    let current = this.head;
    let next = null;
    
    while(current){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  modify(index,newVal){
    if(index < 0 || index > this.size()){
      console.log("Index is out of bounds");
      return;
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
  }

  printList(){
    let listStr = "";
    let current = this.head;

    while(current){
      listStr += current.val + "->";
      current = current.next;
    }

    console.log(listStr + "NULL");
    
  }
}