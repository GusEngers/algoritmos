/**
 * @this Array
 * @description Verifica si un array de números está ordeanado
 * @param {number} [sort=0] `0` verificar orden ascendente, `1` verificar orden descendente
 * @returns {Boolean}
 */
function isSortedNumbers(sort = 0) {
  // Verificar errores
  if (![0, 1].includes(sort))
    throw new SyntaxError("'isSortedNumbers' only accepts values 0 and 1");

  // Un array con un elemento o menos ya está ordenado
  if (this.length < 2) return true;

  // Recorremos el array desde el inicio hasta la anteúltima posición
  for (let i = 0; i < this.length - 1; i++) {
    // Si el item no es de tipo numérico se lanza un error
    if (typeof this[i] !== 'number' || typeof this[i + 1] !== 'number')
      throw new TypeError(`The item at position ${i} must be numeric`);

    // Si el orden es ascendente verifica si el item actual es mayor
    // que el item posterior
    if (sort === 0 && this[i] > this[i + 1]) {
      return false;
    }

    // Si el orden es descendente verifica si el item actual es menor
    // que el item posterior
    if (sort === 1 && this[i] < this[i + 1]) {
      return false;
    }
  }

  // Si no se obtienen resultados en el bucle significa que el
  // array está ordenado
  return true;
}

module.exports = isSortedNumbers;
