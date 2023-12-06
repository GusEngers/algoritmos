/**
 * @description Realiza la operación matemática de potenciación donde las bases pueden
 * ser cualquier número `Real` y los exponentes sólo aceptan números `Enteros` (negativos
 * y positivos)
 * @param {Number} bas Base de la potencia
 * @param {Number} exp Exponente de la potencia
 * @returns {Number} Resultado de la potenciación
 * @todo Añadir operaciones con exponentes decimales
 */
function exponentiation(bas, exp) {
  if (typeof bas !== 'number') throw new TypeError("The value type of the base isn't a number");
  if (typeof exp !== 'number') throw new TypeError("The value type of the exponent isn't a number");
  if (!Number.isInteger(exp)) throw new SyntaxError('The exponent must be an integer');

  if (bas === 0) return bas;
  if (exp === 0) return 1;

  let result = 1;
  if (exp > 0) {
    while (exp > 0) {
      result *= bas;
      exp--;
    }
    return result;
  }

  while (exp < 0) {
    result *= bas;
    exp++;
  }
  return 1 / result;
}

module.exports = exponentiation;
