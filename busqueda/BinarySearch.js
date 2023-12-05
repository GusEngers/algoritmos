const isSortedNumbers = require('../auxiliares/IsSortedNumbers');

Array.prototype.isSortedNumbers = isSortedNumbers;

/**
 * @this Array
 * @description Busca el valor indicado y retorna el índice donde está alojado el valor en el `Array`
 * @param {Number} value Valor a buscar
 * @returns {Number} Índice del `Array` si se encuentra el elemento, `-1` si no se encuentra
 */
function binarySearch(value) {
  // Verificar errores
  if (typeof value !== 'number') throw new TypeError(`${value} isn't a numeric value`);
  if (!this.isSortedNumbers()) throw new SyntaxError("Array isn't ordered");

  // Obtenemos el índice más bajo y el más alto
  let min = 0;
  let max = this.length;

  // Mientras que el índice más alto supere al más bajo
  while (max >= min) {
    // Obtenemos el índice medio
    let middle = Math.floor(min + (max - min) / 2);

    // VALOR ENCONTRADO
    // Si es igual al valor buscado retornamos el índice
    if (value === this[middle]) return middle;

    // EL VALOR SE ENCUENTRA ANTES DE LA POSICIÓN MEDIA
    // Si es menor que el valor buscado, cambiamos el índice más alto
    // por el índice anterior al índice medio
    if (value < this[middle]) {
      max = middle - 1;
    } else {
      // EL VALOR SE ENCUENTRA DESPUÉS DE LA POSICIÓN MEDIO
      // Caso contrario, cambiamos el índice más bajo por el índice
      // posterior al índice medio
      min = middle + 1;
    }
  }

  // Si al finalizar el bucle no obtenemos un resultado significa
  // que el valor buscado no existe, retornamos `-1` entonces
  return -1;
}

module.exports = binarySearch;
