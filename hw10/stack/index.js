class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.top;
    this.top = removedNode.next;
    this.size--;

    return removedNode.data;
  }

  peek() {
    if(this.isEmpty()) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}


const stack = new Stack();
stack.push(1);
stack.push(2);

console.log(stack.pop()); // Should print 2
console.log(stack.peek()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1
console.log(stack.size); // Should print 1
