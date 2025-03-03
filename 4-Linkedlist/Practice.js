class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Linkedlist {
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
            newNode.next = this.head;
            this.head = newNode;
        }

        let current = this.head;
        while (current) {
            current = current.next;
        }

        current.next = newNode;
    }

    printList(){
        let current = this.head;
        let liststr = "";

        while(current){
            liststr += current.val + " --> ";
            current = current.next;
        }

        console.log(liststr + " NULL");
        
    }
}

let linkedList = new Linkedlist();
linkedList.addFirst(5);
linkedList.addFirst(6)
linkedList.printList()