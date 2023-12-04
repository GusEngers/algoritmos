const assert = require('assert');
const { describe, it } = require('node:test');

// Algoritmos
const selectionSort = require('./SelectionSort');
const bubbleSort = require('./BubbleSort');
const mergeSort = require('./MergeSort');
const quickSort = require('./QuickSort');

// Añadir los prototipos
Array.prototype.selectionSort = selectionSort;
Array.prototype.bubbleSort = bubbleSort;
Array.prototype.mergeSort = mergeSort;
Array.prototype.quickSort = quickSort;

// Ejemplos
let arr1 = [123, 1, 54353, 12, 43, 213, 89, 123, 4342, 4543];
let arr2 = [123, 'sdsd', 'sdd', [12]];
let arr3 = [23, -5, 65, 789];

describe('selectionSort', function () {
  it('El método debe ser un prototype de Array', function () {
    assert.strictEqual(
      Array.prototype.hasOwnProperty('selectionSort'),
      true,
      "Array no tiene un método prototype llamado 'selectionSort'"
    );
  });

  it('El método debe ordenar los elementos del array de forma ascendente', function () {
    assert.deepStrictEqual(
      arr1.selectionSort(),
      arr1.sort((a, b) => a - b),
      'El array no está ordenado de forma ascendente'
    );
  });

  it('El método debe ordenar números negativos', () => {
    assert.deepStrictEqual(
      arr3.selectionSort(),
      arr3.sort((a, b) => a - b),
      'El array no ordena los números negativos'
    );
  });

  it('El método debe lanzar un error de tipo TypeError si algún elemento del array no es un número', function () {
    try {
      arr2.selectionSort();
    } catch (error) {
      assert(error instanceof TypeError, 'El tipo de error lanzado debe ser TypeError');
    }
  });

  it("El método debe tener como mensaje de error 'The item at position <index> must be numeric'", function () {
    try {
      arr2.selectionSort();
    } catch (error) {
      assert.match(error.message, /^The item at position \d+ must be numeric$/);
    }
  });
});

describe('bubbleSort', function () {
  it('El método debe ser un método prototype de Array', function () {
    assert.strictEqual(
      Array.prototype.hasOwnProperty('bubbleSort'),
      true,
      "Array no tiene un prototype llamado 'bubbleSort'"
    );
  });

  it('El método debe ordenar los elementos del array de forma ascendente', function () {
    assert.deepStrictEqual(
      arr1.bubbleSort(),
      arr1.sort((a, b) => a - b),
      'El array no está ordenado de forma ascendente'
    );
  });

  it('El método debe ordenar números negativos', () => {
    assert.deepStrictEqual(
      arr3.bubbleSort(),
      arr3.sort((a, b) => a - b),
      'El array no ordena los números negativos'
    );
  });

  it('El método debe lanzar un error de tipo TypeError si algún elemento del array no es un número', function () {
    try {
      arr2.bubbleSort();
    } catch (error) {
      assert(error instanceof TypeError, 'El tipo de error lanzado debe ser TypeError');
    }
  });

  it("El método debe tener como mensaje de error 'The item at position <index> must be numeric'", function () {
    try {
      arr2.bubbleSort();
    } catch (error) {
      assert.match(error.message, /^The item at position \d+ must be numeric$/);
    }
  });
});

describe('mergeSort', function () {
  it('El método debe ser un método prototype de Array', function () {
    assert.strictEqual(
      Array.prototype.hasOwnProperty('mergeSort'),
      true,
      "Array no tiene un prototype llamado 'mergeSort'"
    );
  });

  it('El método debe ordenar los elementos del array de forma ascendente', function () {
    assert.deepStrictEqual(
      arr1.mergeSort(),
      arr1.sort((a, b) => a - b),
      'El array no está ordenado de forma ascendente'
    );
  });

  it('El método debe ordenar números negativos', () => {
    assert.deepStrictEqual(
      arr3.mergeSort(),
      arr3.sort((a, b) => a - b),
      'El array no ordena los números negativos'
    );
  });

  it('El método debe lanzar un error de tipo TypeError si algún elemento del array no es un número', function () {
    try {
      arr2.mergeSort();
    } catch (error) {
      assert(error instanceof TypeError, 'El tipo de error lanzado debe ser TypeError');
    }
  });

  it("El método debe tener como mensaje de error 'The array has items that are not numeric'", function () {
    try {
      arr2.mergeSort();
    } catch (error) {
      assert.match(error.message, /^The array has items that are not numeric$/);
    }
  });
});

describe('quickSort', function () {
  it('El método debe ser un método prototype de Array', function () {
    assert.strictEqual(
      Array.prototype.hasOwnProperty('quickSort'),
      true,
      "Array no tiene un prototype llamado 'quickSort'"
    );
  });

  it('El método debe ordenar los elementos del array de forma ascendente', function () {
    assert.deepStrictEqual(
      arr1.quickSort(),
      arr1.sort((a, b) => a - b),
      'El array no está ordenado de forma ascendente'
    );
  });

  it('El método debe ordenar números negativos', () => {
    assert.deepStrictEqual(
      arr3.quickSort(),
      arr3.sort((a, b) => a - b),
      'El array no ordena los números negativos'
    );
  });

  it('El método debe lanzar un error de tipo TypeError si algún elemento del array no es un número', function () {
    try {
      arr2.quickSort();
    } catch (error) {
      assert(error instanceof TypeError, 'El tipo de error lanzado debe ser TypeError');
    }
  });

  it("El método debe tener como mensaje de error 'The array has items that are not numeric'", function () {
    try {
      arr2.quickSort();
    } catch (error) {
      assert.match(error.message, /^The array has items that are not numeric$/);
    }
  });
});
