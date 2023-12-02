/**
 * Clase constructora de información del nodo de una `Queue`
 */
class QueueNode {
  /**
   * @param value Valor para almacenar en el nodo
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Clase constructora de una `Queue`
 */
class Queue {
  /**
   * @param {Number|undefined} maxSize Tamaño máximo que tendrá la `Queue`
   */
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

  /**
   * Añade un nodo al final de la `Queue`
   * @param {QueueNode.value} value Valor que tendrá el nodo
   * @returns {1|0} `1` si se añade un nodo, `0` si no se añade
   */
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

  /**
   * Añade múltiples nodos al final de la `Queue`
   * @param {QueueNode.value[]} values Lista de valores a añadir
   * @returns {Number} Cantidad de nodos añadidos
   */
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

  /**
   * Elimina el primer nodo de la `Queue`
   * @returns {QueueNode.value|null} Valor del nodo eliminado
   */
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

  /**
   * Verifica si la `Queue` está vacía
   * @returns {Boolean}
   */
  isEmpty() {
    return !this.length;
  }

  /**
   * Verifica si la `Queue` alcanzó su tamaño máximo
   * @returns {Boolean}
   */
  isFull() {
    if (!this.MAX_SIZE) return false;
    return this.MAX_SIZE === this.length;
  }

  /**
   * Retorna todos los valores de la `Queue` encadenados
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

  /**
   * Retorna el tamaño actual de la `Queue`
   * @returns {Number}
   */
  size() {
    return this.length;
  }

  /**
   * Retorna la primera posición actual de la `Queue`
   * @returns {QueueNode.value|null}
   */
  front() {
    return this.head;
  }

  /**
   * Retorna la última posición actual de la `Queue`
   * @returns {QueueNode.value|null}
   */
  back() {
    return this.tail;
  }
}
