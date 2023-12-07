/**
 * Obtiene el factorial de un número entero
 * @param {Number} num Número para obtener su factorial
 * @returns {BigInt} Factorial del número ingresado
 */
function factorial(num) {
  if (!Number.isInteger(num)) throw Error("The value isn't integer number");

  if (num <= 1) return 1;

  let result = 1n;
  let count = 1n;
  while (count <= num) {
    result *= count;
    count++;
  }
  return result;
}

module.exports = factorial;
