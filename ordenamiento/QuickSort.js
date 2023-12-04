/**
 * @this Array
 * @description Ordena y retorna una copia de un `Array` de números usando el algoritmo `Merge Sort`
 * @returns {Number[]}
 */
function quickSort() {
  // Copia del array original y su longitud
  let array = [...this];
  let length = array.length;

  // Si un array tiene 1 item o menos significa que ya está ordenado
  if (length < 2) return array;

  // Obtenemos el valor pivote
  let middle = array[Math.floor(length / 2)];
  
  // Variables para alojar los valores menores, mayores e iguales al pivote
  let mid = [];
  let min = [];
  let max = [];

  // Bucle para recorrer el array
  for (let i = 0; i < length; i++) {
    // Verificamos que el item sea de tipo `Number`
    if (typeof array[i] !== 'number')
      throw new TypeError('The array has items that are not numeric');

    // Si el item es igual al pivote lo añadimos a la variable `mid`
    if (array[i] === middle) {
      mid.push(array[i]);
    }
    // Si el item es menor que el pivote lo añadimos a la variable `min`
    if (array[i] < middle) {
      min.push(array[i]);
    }
    // Si el item es mayor que el pivote lo añadimos a la variable `max`
    if (array[i] > middle) {
      max.push(array[i]);
    }
  }

  // Retornamos la concatenación de la recursividad de los valores
  // menores al pivote, los valores medios y la recursividad de los
  // valores mayores al pivote
  return [].concat(min.quickSort(), mid, max.quickSort());
}

module.exports = quickSort;
