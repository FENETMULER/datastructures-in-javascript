class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return removed.val;
    }
    this.first = this.first.next;
    this.size--;
    return removed.val;
  }
}

let stack = new Stack();
