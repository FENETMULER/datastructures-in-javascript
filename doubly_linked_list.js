class Node {
    constructor(val) {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let removed = this.tail;

        if (this.length === 1) {
            
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }
        
        let prev = this.tail.prev;
        prev.next = null;
        this.tail = prev;
        this.length--;
        return removed;

    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let removed = this.head;

        if (this.length === 1) {

            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }

        let next = this.head.next;
        next.prev = null;
        this.head = next;
        this.length--;

        return removed;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let distFromStart = index;
        let distFromEnd = (this.length - 1) - index;

        if (distFromStart < distFromEnd || distFromStart === distFromEnd) {
            let current = this.head;
            let counter = 0;

            while(counter < index) {
                current = current.next;
                counter++;
            }
            return current;

        } else {
            let current = this.tail;
            let counter = this.length - 1;

            while(counter > index) {
                current = current.prev;
                counter--;
            }
            return current;
        }

    }

    set(index, val) {
        let item = this.get(index);

        if (!item) {
            return false;
        }
        item.val = val;
        return true;

    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val)
        let current = this.get(index);
        let prev = current.prev;
        prev.next = newNode;
        newNode.next = current;
        newNode.prev = prev;
        current.prev = newNode;
        this.length++;

        return true;

    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (this.length === 1) return this.shift();
        if (index === this.length - 1) return this.pop();

        let current = this.get(index); // Node to be removed.
        let next = current.next;
        let prev = current.prev;
        prev.next = next;
        next.prev = prev;
        this.length--;

        return current;

    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = current.prev;
            current.prev = next;
            current = next;
        }
    }

    printList() {
        let current = this.head;
        let arr = []
        while(current) {
            arr.push(current);
            current = current.next;
        }
        console.log(arr);
        console.log(`length: ${this.length}`)
    }
}


let list = new DoublyLinkedList();

list.push('One');
list.push('Two');
list.push('Three');

list.unshift('Zero');
list.push('Four');
list.push('Five');

list.reverse();


list.printList();