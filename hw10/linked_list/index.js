class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insert(data, index) {
        if(index < 0 || index > this.size) {
            return false;
        }
        else if(index === 0) {
            this.prepend(data);
        }
        else {
            const newNode = new Node(data);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }

        this.size++;
    }

    removeAt(index) {
        let current = this.head;
        let count = 0;
        while(current.next) {
            if(count === 0 && count === index) {
                this.head = current.next;
                this.size--;
                return true;
            }
            if(count === index - 1) {
                let nextNode = current.next;
                current.next = nextNode.next;
                this.size--;
                return true;
            }
            current = current.next;
            count++;

        }

        return false;
    }

    remove(item) {
        let current = this.head;
        while(current.next) {
            if(current.next.data === item) {
                let nextNode = current.next;
                current.next = nextNode.next;

                this.size--;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    printList() {
        let arr = [];
        let current = this.head;
        while(current.next) {
            arr = [...arr, current.data];
            current = current.next;
        }
        arr = [...arr, current.data];

        console.log(...arr);
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insert(3, 3);
list.printList(); // Output: 0 1 2 3

console.log("Size:", list.getSize()); // Output: Size: 4
list.remove(2);
list.removeAt(2);
list.printList(); // Output: 0 1
console.log("Size:", list.getSize()); // Output: Size: 2