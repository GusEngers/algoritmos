/**
 * Clase constructora de información del nodo de un `Stack`
 */
class StackNode {
  /**
   * @param value Valor para almacenar en el nodo
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Clase constructora de un `Stack`
 */
class Stack {
  /**
   * @param {Number} maxSize Tamaño máximo que tendrá la `Stack`
   */
  constructor(maxSize) {
    this.items = null;
    this.length = 0;
    this.top = null;

    if (typeof maxSize !== 'number' || maxSize < 1) {
      throw new RangeError('A maximum stack size must be set that is greater than or equal to 1');
    } else {
      this.MAX_SIZE = maxSize;
    }
  }

  /**
   * Añade un nodo en la cima del `Stack`
   * @param {StackNode.value} value Valor que tendrá el nodo
   * @returns {Number} `1` si se añade un nodo, `0` si no se añade
   */
  push(value) {
    if (this.isFull()) return 0;

    let node = new StackNode(value);
    if (this.isEmpty()) {
      this.items = node;
      this.top = this.items.value;
      this.length++;
      return 1;
    }
    node.next = this.items;
    this.items = node;
    this.top = this.items.value;
    this.length++;
    return 1;
  }

  /**
   * Añade múltiples nodos en la cima del `Stack`
   * @param {StackNode.value[]} values Lista de valores a añadir
   * @returns {Number} Cantidad de nodos añadidos
   */
  pushMany(values) {
    if (!Array.isArray(values)) {
      throw new SyntaxError('pushMany only accepts an Array of values');
    }
    let count = 0;
    for (let value of values) {
      let temp = this.push(value);
      if (temp === 0) return count;
      count += temp;
    }
    return count;
  }

  /**
   * Elimina el nodo de la cima del `Stack`
   * @returns {StackNode.value|null} Valor del nodo eliminado
   */
  pop() {
    if (this.isEmpty()) return this.items;
    let temp = this.top;
    this.items = this.items.next;
    if (this.length === 1) {
      this.top = this.items;
    } else {
      this.top = this.items.value;
    }
    this.length--;
    return temp;
  }

  /**
   * Verifica si el `Stack` está vacio
   * @returns {Boolean}
   */
  isEmpty() {
    return !this.length;
  }

  /**
   * Verifica si el `Stack` alcanzó su tamaño máximo
   * @returns {Boolean}
   */
  isFull() {
    return this.MAX_SIZE === this.length;
  }

  /**
   * Retorna todos los valores del `Stack` encadenados
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
   * Retorna el tamaño actual del `Stack`
   * @returns {Number}
   */
  size() {
    return this.length;
  }

  /**
   * Retorna el valor de la cima del `Stack`
   * @returns {QueueNode.value|null}
   */
  head() {
    return this.top;
  }
}
