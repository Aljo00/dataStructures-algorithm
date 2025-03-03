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

    arrayToLinkedList(arr){

        this.head = new Node(arr[0]);
        let current = this.head;

        for(let i = 1; i < arr.length; i++){
            current.next = new Node(arr[i]);
            current = current.next;
        }
    }

    printList(){
        let current = this.head;
        let liststr = "";
        while(current){
            liststr += current.val + " -> ";
            current = current.next;
        }

        console.log(liststr + "NULL")
    }
}

let linkedlist = new LinkedList();

linkedlist.arrayToLinkedList([1,2,3,4,5])
linkedlist.printList()