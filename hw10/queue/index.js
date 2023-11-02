class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    #size = 0;
    constructor() {
        this.first = null;
    }

    enqueue(element) {
        let newNode = new Node(element);
        if(this.isEmpty()){
            this.first = newNode;
        }
        else {
            let current = this.first;
            while(current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.#size++;
    }

    dequeue() {
        if(this.isEmpty()){
            return false;
        }
        else {
            let current = this.first;
            if(!current) {
                return false;
            }

            this.first = current.next;
        }

        this.#size--;
    }

    front() {
        if(!this.first) {
            return null;
        }

        return this.first.data;
    }

    isEmpty() {
        return this.#size === 0;
    }

    size() {
        return this.#size;
    }

    print() {
        let current = this.first;
        let arr = [];
        if(!current) {
            console.log(...arr);
            return false;
        }
        while(current.next) {
            // arr = [...arr, current.data];
            arr.push(current.data);
            current = current.next;
        }

        arr.push(current.data);
        console.log(...arr);
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 2 3
console.log("Front element: " + queue.front()); // Output: Front element: 1
queue.dequeue();
queue.print(); // Output: 2 3
console.log("Queue size: " + queue.size()); // Output: Queue size: 2