/**
 * @this Array
 * @description Ordena y retorna un nuevo `Array` ordenado usando el algoritmo `Bubble Sort`
 * @returns {Number[]} Nuevo `Array` ordenado
 */
function bubbleSort() {
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
    
    // Bucle para obtener el segundo item a comparar
    for (let j = i + 1; j < length; j++) {
      // En cada iteración, si el item de la posición `j` es menor
      // que en la posición `i` se intercambian sus posiciones
      if (array[j] < array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  // Retornamos el nuevo array
  return array;
}

module.exports = bubbleSort;
