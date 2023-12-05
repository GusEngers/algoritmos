const assert = require('assert');
const { describe, it } = require('node:test');

const binarySearch = require('./BinarySearch');
Array.prototype.binarySearch = binarySearch;

let arr1 = [1, 5, 2, 76, 23, 67];
let arr2 = [1, 2, 3, 45, 56, 57, 67, 78, 79, 90, 175, 235];

describe('binarySearch', function () {
  it('El método debe lanzar un error de tipo SyntaxError si el array no esta ordenado', function () {
    try {
      arr1.binarySearch(76);
      throw 'No se lanzó el error';
    } catch (error) {
      assert(error instanceof SyntaxError, 'El tipo de error debe ser SyntaxError');
    }
  });

  it('El método debe lanzar un error de tipo TypeError si el valor buscado no es un número', function () {
    try {
      arr1.binarySearch('dasd');
      throw 'No se lanzó el error';
    } catch (error) {
      assert(error instanceof TypeError, 'El tipo de error debe ser TypeError');
    }
  });

  it('El método debe retornar `-1` si no encuentra el elemento buscado', function () {
    assert.strictEqual(arr2.binarySearch(69), -1);
    assert.strictEqual(arr2.binarySearch(1025), -1);
    assert.strictEqual(arr2.binarySearch(5), -1);
  });

  it('El método debe retornar el índice del elemento buscado si lo encuentra', function () {
    assert.strictEqual(
      arr2.binarySearch(56),
      arr2.findIndex((a) => a === 56)
    );
    assert.strictEqual(arr2.binarySearch(235), arr2.length - 1);
    assert.strictEqual(arr2.binarySearch(1), 0);
  });
});
