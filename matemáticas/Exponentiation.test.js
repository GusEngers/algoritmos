const assert = require('assert');
const { it, describe } = require('node:test');

const exponentiation = require('./Exponentiation');

describe('exponentiation', function () {
  it('La potencia de un número con base 0 es 0', function () {
    assert.strictEqual(exponentiation(0, 12), Math.pow(0, 12));
  });

  it('La potencia de un número con exponente 0 es 1', function () {
    assert.strictEqual(exponentiation(12, 0), Math.pow(12, 0));
  });

  it('Potencias con exponentes positivos', function () {
    assert.strictEqual(exponentiation(2, 12), Math.pow(2, 12));
    assert.strictEqual(exponentiation(5, 3), Math.pow(5, 3));
    assert.strictEqual(exponentiation(10, 10), Math.pow(10, 10));
  });

  it('Potencias con exponentes negativos', function () {
    assert.strictEqual(exponentiation(2, -12), Math.pow(2, -12));
    assert.strictEqual(exponentiation(5, -3), Math.pow(5, -3));
    assert.strictEqual(exponentiation(10, -10), Math.pow(10, -10));
  });

  it('Potencias con bases decimales', function () {
    assert.strictEqual(exponentiation(2.5, 12), Math.pow(2.5, 12));
    assert.strictEqual(exponentiation(5.34, 3), Math.pow(5.34, 3));
    assert.strictEqual(exponentiation(10.235, -10), Math.pow(10.235, -10));
  });
});
