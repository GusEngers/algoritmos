/**
 * @this Array
 * @description Verifica si un array está ordeanado
 * @param {number} [sort=0] `0` verificar orden ascendente, `1` verificar orden descendente
 * @returns {Boolean}
 */
function isSortedNumbers(sort = 0) {
  if (![0, 1].includes(sort))
    throw new SyntaxError("'isSortedNumbers' only accepts values 0 and 1");

  if (this.length < 1) return true;

  for (let i = 0; i < this.length - 1; i++) {
    if (typeof this[i] !== 'number' || typeof this[i + 1] !== 'number')
      throw new TypeError(`The item at position ${i} must be numeric`);

    if (sort === 0 && this[i] > this[i + 1]) {
      return false;
    }
    if (sort === 1 && this[i] < this[i + 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isSortedNumbers;
