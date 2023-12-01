class LLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(maxSize = undefined) {
    this.items = null;
    this.length = 0;
    this.head = null;
    this.tail = null;

    if ((maxSize && typeof maxSize !== 'number') || maxSize < 1) {
      throw new RangeError('A maximum queue size must be set that is greater than or equal to 1');
    } else {
      this.MAX_SIZE = maxSize;
    }
  }

  addFirst(value) {
    if (this.isFull()) return 0;

    const node = new LLNode(value);
    if (this.isEmpty()) {
      this.items = node;
      this.length++;
      this.head = this.tail = this.items.value;
      return 1;
    }
    node.next = this.items;
    this.items = node;
    this.head = this.items.value;
    this.length++;
    return 1;
  }

  addLast(value) {
    if (this.isFull()) return 0;

    const node = new LLNode(value);
    if (this.isEmpty()) {
      this.items = node;
      this.length++;
      this.head = this.tail = this.items.value;
      return 1;
    }
    let current = this.items;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
    this.tail = current.next.value;
    this.length++;
    return 1;
  }

  add(value, index = 0) {
    if (this.isFull()) return 0;
    if (typeof index !== 'number' || index > this.length || index < 0) {
      throw new RangeError(`The index must be a number between 0 and ${this.length}`);
    }
    if (index === 0) return this.addFirst(value);
    if (index === this.length) return this.addLast(value);

    const node = new LLNode(value);
    let current = this.items;
    let prev = null;
    let count = 0;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = node;
    prev.next.next = current;
    this.length++;
    return 1;
  }

  removeFirst() {
    if (this.isEmpty()) return this.items;

    let temp = this.items;
    this.items = temp.next;
    if (this.length === 1) {
      this.head = this.tail = this.items;
    } else {
      this.head = this.items.value;
    }
    this.length--;
    return temp.value;
  }

  removeLast() {
    if (this.isEmpty()) return this.items;

    let prev = null;
    let current = this.items;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    this.length--;
    if (this.length === 0) {
      this.tail = this.head = this.items = null;
      return current.value;
    } else {
      this.tail = prev.value;
      prev.next = null;
      return current.value;
    }
  }

  remove(index = 0) {
    if (this.isEmpty()) return this.items;
    if (typeof index !== 'number' || index > this.length - 1 || index < 0) {
      throw new RangeError(`The index must be a number between 0 and ${this.length - 1}`);
    }
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    let prev = this.items;
    let current = prev.next;
    let count = 1;
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
    this.length--;
    return current.value;
  }

  getFirst() {
    if (this.isEmpty()) return this.items;
    return this.head;
  }

  getLast() {
    if (this.isEmpty()) return this.items;
    return this.tail;
  }

  get(index = 0) {
    if (this.isEmpty()) return this.items;
    if (typeof index !== 'number' || index > this.length - 1 || index < 0) {
      throw new RangeError(`The index must be a number between 0 and ${this.length - 1}`);
    }
    if (index === 0) return this.getFirst();
    if (index === this.length - 1) return this.getLast();

    let prev = this.items;
    let current = prev.next;
    let count = 1;
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    return current.value;
  }

  isEmpty() {
    return !this.length;
  }

  isFull() {
    if (!this.MAX_SIZE) return false;
    return this.length === this.MAX_SIZE;
  }

  size() {
    return this.length;
  }
}

// const linked = new LinkedList();
// linked.addFirst(1);
// // console.log(linked);
// linked.addFirst(2);
// // console.log(linked);
// linked.addFirst(3);
// // console.log(linked);
// console.log(linked.head, linked.tail, '\n');

// console.log(linked);
// linked.remove(2);
// linked.remove(1);
// linked.remove();
// linked.remove();
// console.log(linked);
