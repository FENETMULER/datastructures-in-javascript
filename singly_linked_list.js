class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      // or this.head === null or length === 0.
      return undefined;
    }

    if (this.length === 1) {
      let current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let removed = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return removed;
    }

    this.head = this.head.next;
    this.length--;

    return removed;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const item = this.get(index);

    if (!item) {
      return false;
    }
    item.val = value;
    return true;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value); // double negation to get the corresponding bool value.
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    // prints entire list
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
