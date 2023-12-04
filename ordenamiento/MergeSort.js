/**
 * @this Array
 * @description Ordena y retorna una copia de un `Array` de números usando el algoritmo `Merge Sort`
 * @returns {Number[]}
 */
function mergeSort() {
  // Copia del array original y su longitud
  let array = [...this];
  let length = array.length;

  // Si un array tiene 1 item o menos significa que ya está ordenado
  if (length < 2) return array;

  /**
   * @description Auxiliar para combinar dos subarrays
   * @param {Array} arr1 Subarray 1
   * @param {Array} arr2 Subarray 2
   * @returns {Number[]}
   */
  function merge(arr1, arr2) {
    // Array de almacenamiento de los valores ordenados
    let results = [];
    // Índices para subarrays 1 y 2
    let i = 0;
    let j = 0;

    // Bucle que se detiene cuando uno de los dos índices sea mayor que
    // la longitud de su subarray
    while (i < arr1.length && j < arr2.length) {
      // Verificamos que el item sea de tipo `Number`
      if (typeof arr1[i] !== 'number' || typeof arr2[j] !== 'number')
        throw new TypeError('The array has items that are not numeric');

      // Si el item en el subarray 1 es menor que el del subarray 2
      // lo añadimos al resultado final. Aumentos el índice `i`
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        // En caso contrario añadimos el valor del subarray 2 al resultado
        // final. Aumentamos el índice `j`
        results.push(arr2[j]);
        j++;
      }
    }

    // Retornamos el resultado final concatenados con los sobrentes de los
    // subarray 1 y 2. Los sobrantes indican que ya están ordenados.
    return results.concat(arr1.slice(i), arr2.slice(j));
  }

  // Obtenemos el índice medio del array y obtenemos dos subarrays
  let middle = Math.floor(length / 2);
  let arr1 = array.slice(0, middle);
  let arr2 = array.slice(middle);

  // Usamos la función auxiliar pasando recursivamente los subarrays 1 y 2
  return merge(arr1.mergeSort(), arr2.mergeSort());
}

module.exports = mergeSort;
