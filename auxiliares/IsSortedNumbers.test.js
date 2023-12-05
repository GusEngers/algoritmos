const assert = require('assert');
const { describe, it } = require('node:test');
const isSortedNumbers = require('./IsSortedNumbers');

Array.prototype.isSortedNumbers = isSortedNumbers;

let arr1 = [1, 2, 3, 4, 5, 5, 5, 6];
let arr2 = [6, 5, 5, 5, 4, 3, 2, 1];
let arr3 = [-1, 34, 45, 10];
let arr4 = [-34, -24, -10, 0, 24];
let arr5 = [23, 'sdas', [], {}];
let arr6 = [1, 2, 'af'];

describe('isSortedNumbers', function () {
  it('El método debe lanzar un error de tipo SyntaxError si se proporciona argumentos distintos de los valores numéricos `0` y `1`', function () {
    try {
      [].isSortedNumbers('sad');
    } catch (error) {
      assert(error instanceof SyntaxError, 'El tipo de error debe ser SyntaxError');
    }
  });

  it('El método debe lanzar un error de tipo TypeError si algún elemento del array no es un número', function () {
    try {
      arr5.isSortedNumbers();
      arr6.isSortedNumbers();
      throw 'No se lanza un error al tener un elemento distinto a un número en el array';
    } catch (error) {
      assert(error instanceof TypeError, 'El tipo de error debe ser TypeError');
    }
  });

  it('El método debe verificar los números del array en orden ascendente', function () {
    assert.strictEqual(arr1.isSortedNumbers(0), true);
  });

  it('El método debe verificar los números del array en orden descendente', function () {
    assert.strictEqual(arr2.isSortedNumbers(1), true);
  });

  it('El método debe verificar si el array no está ordenado', function () {
    assert.strictEqual(arr3.isSortedNumbers(0), false);
    assert.strictEqual(arr3.isSortedNumbers(1), false);
  });

  it('El método debe verificar el orden de números negativos', function () {
    assert.strictEqual(arr4.isSortedNumbers(), true);
    assert.strictEqual(arr4.isSortedNumbers(1), false);
  });
});
