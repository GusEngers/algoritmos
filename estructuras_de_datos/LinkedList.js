class LLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(maxSize) {
    this.items = null;
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (typeof maxSize !== 'number' || maxSize < 1) {
      throw new RangeError('A maximum queue size must be set that is greater than or equal to 1');
    } else {
      this.MAX_SIZE = maxSize;
    }
  }
}