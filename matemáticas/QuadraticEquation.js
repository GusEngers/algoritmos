/**
 * @description Obtiene los resultados posibles de una ecuación de segundo grado.
 * La fórmula de la ecuación es `(a * x^2) + (b * x) + (c) = 0`, donde cada parámetro
 * de la función corresponde a un argumento de la ecuación
 * @param {Number} a Primer valor de la ecuación, corresponde al argumento `a`
 * @param {Number} b Segundo valor de la ecuación, corresponde al argumento `b`
 * @param {Number} c Tercer valor de la ecuación, corresponde al argumento `c`
 * @returns {Number[]|null} Array con los dos valores posible de `x` en caso de
 * que se pueda resolver la ecuación
 */
function quadraticEquation(a, b, c) {
  // Verificar si los datos ingresados son numéricos
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    throw new TypeError("The type of values aren't numerics");

  // Obtener el discriminante
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  // Si el discriminante es menor o igual a 0 significa que la ecuación
  // no tiene solución
  if (discriminant <= 0) return null;

  // Obtenemos el primer resultado posible de la ecuación
  let first = (-b + Math.sqrt(discriminant)) / (2 * a);
  // Obtenemos el segundo resultado posible de la ecuación
  let second = (-b - Math.sqrt(discriminant)) / (2 * a);

  // Retornamos los resultados que resuelven la ecuación
  return [first, second];
}

/**
 * @description Verifica si los resultados para la incógnita de la ecuación son correctos
 * @param {Number} a Primer valor de la ecuación, corresponde al argumento `a`
 * @param {Number} b Segundo valor de la ecuación, corresponde al argumento `b`
 * @param {Number} c Tercer valor de la ecuación, corresponde al argumento `c`
 * @returns {Boolean|null} Si la ecuación se puede resolver retorna `true` o  `false`.
 * Si la ecuación no se resulve retorna `null`
 */
function validateResultsEquation(a, b, c) {
  // Ejecutamos `quadraticEquation` para otener los resultados posibles
  let results = quadraticEquation(a, b, c);

  // Si no tiene resultados, retornamos `null`
  if (results === null) return results;

  console.log('Resolviendo...');
  console.log(`${a} * ${results[0]}^2 + ${b} + ${results[0]} + ${c}`);

  // EL USO DE `toFixed` POR LOS DECIMALES MUY LARGOS
  // Comprobamos la ecuación con el primer resultado posible
  let first = (a * Math.pow(results[0], 2) + b * results[0] + c).toFixed();

  console.log(`Primer resultado: ${first}`);

  console.log('Resolviendo...');
  console.log(`${a} * ${results[1]}^2 + ${b} + ${results[1]} + ${c}`);

  // EL USO DE `toFixed` POR LOS DECIMALES MUY LARGOS
  // Comprobamos la ecuación con el segundo resultado posible
  let second = (a * Math.pow(results[1], 2) + b * results[1] + c).toFixed();

  console.log(`Segundo resultado: ${second}`);

  // Verificamos si ambos resultados son iguales a `0`
  if (first == 0 && second == 0) return true;
  return false;
}

module.exports = { quadraticEquation, validateResultsEquation };
