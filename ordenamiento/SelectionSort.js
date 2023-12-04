/**
 * @this Array
 * @description Ordena y retorna una copia de un `Array` de números
 * @returns {Number[]} Nuevo `Array` ordenado
 */
function selectionSort() {
  // Copia del array original y su longitud
  let array = [...this];
  let length = array.length;

  // Si un array tiene 1 item o menos significa que ya está ordenado
  if (length < 2) return array;

  // Bucle para obtener el primer item a comparar
  for (let i = 0; i < length - 1; i++) {
    // Verificamos que el item sea de tipo `Number`
    if (typeof array[i] !== 'number')
      throw new TypeError(`The item at position ${i} must be numeric`);

    // Variable auxiliar con la posición del item menor, por defecto es el item actual
    let min = i;
    // Bucle para obtener el segundo item a comparar
    for (let j = i + 1; j < length; j++) {
      // Si el item en `j` es menor que el item menor actual
      // significa que el item en la posición `min` no es el
      // menor, entoces actualizamos `min`
      if (array[j] < array[min]) {
        min = j;
      }
    }

    // Si hubo cambios en `min` al salir del segundo bucle, significa que debemos
    // intercambiar las posiciones entre `min` e `i`
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  // Al finalizar todos los bucles, retornamos el nuevo array
  return array;
}

module.exports = selectionSort;
