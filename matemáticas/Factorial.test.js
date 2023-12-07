const assert = require('assert');
const { it, describe } = require('node:test');
const factorial = require('./Factorial');

describe('factorial', function () {
  it('La función debe lanzar un error si se busca el factorial de un número negativo', function () {
    try {
      factorial(-1);
      throw assert.AssertionError('No se lanzó el error');
    } catch (error) {
      assert(error instanceof Error, 'El error no es una instancia de Error');
    }
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
