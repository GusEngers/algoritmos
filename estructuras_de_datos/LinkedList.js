/**
 * Clase constructora de información del nodo de una `LinkedList`
 */
class LLNode {
  /**
   * @param value Valor para almacenar en el nodo
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Clase constructor de una `LinkedList`
 */
class LinkedList {
  /**
   * @param {number|undefined} maxSize Tamaño máximo que tendrá la `LinkedList`
   */
  constructor(maxSize = undefined) {
    this.items = null;
    this.length = 0;
    this.head = null;
    this.tail = null;

    if ((maxSize && typeof maxSize !== 'number') || maxSize < 1) {
      throw new RangeError(
        'A maximum linked list size must be set that is greater than or equal to 1'
      );
    } else {
      this.MAX_SIZE = maxSize;
    }
  }

  /**
   * Añade un nodo al inicio de la `LinkedList`
   * @param {LLNode.value} value Valor del nodo
   * @returns {1|0} `1` si se añade el nodo, `0` si no se añade el nodo
   */
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

  /**
   * Añade un nodo al final de la `LinkedList`
   * @param {LLNode.value} value Valor del nodo
   * @returns {1|0} `1` si se añade el nodo, `0` si no se añade el nodo
   */
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

  /**
   * Añade un nodo en una posición específica de la `LinkedList`
   * @param {LLNode.value} value Valor del nodo
   * @param {Number} index Posición en la `LinkedList`
   * @returns {1|0} `1` si se añade el nodo, `0` si no se añade el nodo
   */
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

  /**
   * Añade nodos masivamente en el inicio de la `LinkedList`
   * @param {LLNode.value[]} values Valores de los nodos
   * @returns {Number} Cantidad de nodos añadidos
   */
  addMany(values) {
    if (!Array.isArray(values)) {
      throw new SyntaxError('addMany only accepts an Array of values');
    }
    let count = 0;
    for (let value of values) {
      let temp = this.addFirst(value);
      if (temp === 0) return count;
      count += temp;
    }
    return count;
  }

  /**
   * Elimina el primer nodo de la `LinkedList`
   * @returns {LLNode.value|null} Valor del nodo eliminado
   */
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

  /**
   * Elimina el último nodo de la `LinkedList`
   * @returns {LLNode.value|null} Valor del nodo eliminado
   */
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

  /**
   * Elimina un nodo alojado en la posición indicada
   * @param {Number} index Posición del nodo en la `LinkedList`
   * @returns {LLNode.value|null} Valor del nodo eliminado
   */
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

  /**
   * Obtiene el valor del primer nodo de la `LinkedList`
   * @returns {LLNode.value|null} Valor del nodo
   */
  getFirst() {
    if (this.isEmpty()) return this.items;
    return this.head;
  }

  /**
   * Obtiene el valor del último nodo de la `LinkedList`
   * @returns {LLNode.value|null} Valor del nodo
   */
  getLast() {
    if (this.isEmpty()) return this.items;
    return this.tail;
  }

  /**
   * Obtiene el valor del nodo alojado en la posición indicada
   * @param {Number} index Posición del nodo en la `LinkedList`
   * @returns {LLNode.value|null} Valor del nodo
   */
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

  /**
   * Verifica si la `LinkedList` está vacía
   * @returns {Boolean}
   */
  isEmpty() {
    return !this.length;
  }

  /**
   * Verifica si la `LinkedList` está completa
   * @returns {Boolean}
   */
  isFull() {
    if (!this.MAX_SIZE) return false;
    return this.length === this.MAX_SIZE;
  }

  /**
   * Retorna el tamaño actual de la `LinkedList`
   * @returns {Number}
   */
  size() {
    return this.length;
  }

  /**
   * Retorna todos lo valores de la `LinkedList` encadenados
   * @returns {String|null}
   */
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
