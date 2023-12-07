const assert = require('assert');
const { it, describe } = require('node:test');

const { factorial, reverseFactorial } = require('./Factorial');

describe('factorial', function () {
  it('La función debe lanzar un error si se busca el factorial de un número negativo', function () {
    assert.throws(
      () => {
        factorial(-1);
      },
      { message: "Values less than to 0 aren't accepted" }
    );
  });

  it('La función debe retornar 1 si se busca el factorial de los números 1 y 0', function () {
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);
  });

  it('La función debe retornar el factorial de un número', function () {
    assert.strictEqual(factorial(2), 2n);
    assert.strictEqual(factorial(5), 120n);
    assert.strictEqual(factorial(10), 3628800n);
    assert.strictEqual(factorial(15), 1307674368000n);
  });

  it('La función debe retornar un valor de tipo BigInt', function () {
    assert(
      typeof factorial(2) === 'bigint',
      'El tipo de dato devuelto de la función debe ser BigInt'
    );
  });
});

describe('reverseFactorial', function () {
  it('La función debe lanzar un error si se busca el valor base de un factorial menor o igual a 0', function () {
    assert.throws(
      () => {
        reverseFactorial(-1);
        reverseFactorial(0);
      },
      { message: "Values less than or equal to 0 aren't accepted" }
    );
  });

  it('La función debe retornar 1 si se busca la base del factorial 1', function () {
    assert.strictEqual(reverseFactorial(1), 1);
  });

  it('La función debe retornar el valor base del factorial', function () {
    assert.strictEqual(reverseFactorial(2), 2);
    assert.strictEqual(reverseFactorial(120), 5);
    assert.strictEqual(reverseFactorial(3628800), 10);
    assert.strictEqual(reverseFactorial(1307674368000), 15);
  });

  it('La función debe retornar null si el factorial no es un factorial de un valor base', function () {
    assert.strictEqual(reverseFactorial(7), null);
    assert.strictEqual(reverseFactorial(123), null);
    assert.strictEqual(reverseFactorial(567), null);
    assert.strictEqual(reverseFactorial(3), null);
  });
});
