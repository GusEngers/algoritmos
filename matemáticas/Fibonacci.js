/**
 * @description Obtiene el valor de la secuencia `Fibonacci` del valor indicado
 * @param {Number} value Valor a buscar su `Fibonacci`
 * @returns {BigInt} `Fibonacci` del valor indicado
 */
function fibonacci(value) {
  // Verificar errores
  if (value < 0) throw new RangeError('Only positive integers are accepted');
  
  // SE UTILIZARÁ NÚMEROS `BigInt` PORQUE NO SE PUEDE REPRESENTAR NÚMEROS
  // ENTEROS MUY GRANDES CON PRECISIÓN

  // Valores por defecto
  if (value === 0) return 0n;
  if (value <= 2) return 1n;
  
  // Array que contendrán las secuencias `Fibonacci`, donde la posición de la secuencia
  // corresponde a su valor. Estas tres corresponden al `Fibonacci` de 0, 1 y 2
  let secuences = [0n, 1n, 1n];

  // Generamos las secuencias, empezando por el índice 3 hasta el valor del argumento `value`
  for (let i = secuences.length; i <= value; i++) {
    // Cada iteración añade la suma del `Fibonacci` de la posición anterior más el
    // `Fibonacci` de la posición ante-anterior
    secuences.push(secuences[i - 1] + secuences[i - 2]);
  }

  // Retornamos el último valor de la secuencia, que corresponde al `Fibonacci` del
  // valor que estábamos buscando
  return secuences[secuences.length - 1];
}

/**
 * ¡USANDO RECURSIVIDAD!
 * @description Obtiene el valor de la secuencia `Fibonacci` del valor indicado
 * @param {Number} value Valor a buscar su `Fibonacci`
 * @returns {Number} `Fibonacci` del valor indicado
 * @deprecated No es útil cuando se busca el `Fibonacci` de números mayores a 40 más o menos
 */
// function fibonacci(value) {
//   if (value < 0) throw new RangeError('Only positive integers are accepted');
//   if (value === 0) return 0;
//   if (value === 1) return 1;
//   return fibonacci(value - 1) + fibonacci(value - 2);
// }

module.exports = fibonacci;
