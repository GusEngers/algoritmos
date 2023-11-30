class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(maxSize) {
    this.items = null;
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (typeof maxSize !== 'number' || maxSize < 1) {
      throw new SyntaxError('A maximum queue size must be set that is greater than or equal to 1');
    } else {
      this.maxSize = maxSize;
    }
  }

  enqueue(value) {
    if (this.isFull()) return 0;

    let node = new QueueNode(value);
    if (this.isEmpty()) {
      this.items = node;
      this.head = this.items.value;
      this.tail = this.items.value;
      this.length++;
      return 1;
    }
    node.next = this.items;
    this.items = node;
    this.tail = this.items.value;
    this.length++;
    return 1;
  }

  enqueueMany(values) {
    if (!Array.isArray(values)) {
      throw new SyntaxError('enqueueMany only accepts an Array of values');
    }
    let count = 0;
    for (let value of values) {
      let temp = this.enqueue(value);
      if (temp === 0) return count;
      count += temp;
    }
    return count;
  }

  dequeue() {
    if (this.isEmpty()) return this.items;
    if (this.length === 1) {
      this.items = this.head = this.tail = null;
      this.length--;
      return this.items;
    }

    let prev = null;
    let current = this.items;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.head = prev.value;
    this.length--;
    return current.value;
  }

  isEmpty() {
    return !this.length;
  }

  isFull() {
    return this.maxSize === this.length;
  }

  peek() {
    if (this.isEmpty()) return null;

    let str = '|';
    let current = this.items;
    while (current !== null) {
      str += ` ${current.value} |`;
      current = current.next;
    }
    return str;
  }
}

const queue = new Queue();
console.log(
  queue.enqueueMany(['hik', 'asdasd', 123, 67, 'Hola', 7684, 'assafa', 'adhasd', 'aaa', 10])
);
console.log('\nRonda uno');
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());

console.log('\nRonda dos');
console.log('Borrado:', queue.dequeue());
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());

console.log('\nRonda tres');
console.log('Borrado:', queue.dequeue());
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());

console.log('\nRonda cuatro');
console.log('Borrado:', queue.dequeue());
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());

console.log('\nRonda cinco');
console.log('Borrado:', queue.dequeue());
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());

console.log('\nRonda seis');
console.log('Borrado:', queue.dequeue());
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());

console.log('\nRonda siete');
console.log('Borrado:', queue.dequeue());
console.log('Head:', queue.head);
console.log('Tail:', queue.tail);
console.log('Length:', queue.length);
console.log(queue.peek());
