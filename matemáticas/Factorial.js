/**
 * Obtiene el factorial de un número entero
 * @param {Number} num Número para obtener su factorial
 * @returns {BigInt} Factorial del número ingresado
 */
function factorial(num) {
  if (!Number.isInteger(num)) throw Error("The value isn't integer number");
  if (num < 0) throw RangeError("Values less than to 0 aren't accepted");
  if (num <= 1) return 1;

  let result = 1n;
  let count = 1n;
  while (count <= num) {
    result *= count;
    count++;
  }
  return result;
}

/**
 * Verifica si un número es un factorial, si es así retorna su valor base y en caso contrario retorna `null`
 * @param {Number} num Valor del factorial
 * @returns {Number|null}
 */
function reverseFactorial(num) {
  num = Number(num);
  if (!Number.isInteger(num)) throw Error("The value isn't integer number");
  if (num <= 0) throw RangeError("Values less than or equal to 0 aren't accepted");

  if (num === 1) return 1;

  let result = num;
  let count = 2;

  while (result > 1) {
    result /= count;
    count++;
  }

  if (result === 1) return count - 1;
  return null;
}

module.exports = { factorial, reverseFactorial };
