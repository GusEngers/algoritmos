class Conversor {
  /**
   * Convertir número entero a binario
   * @param {Number} value Número entero para convertir a binario
   * @returns {Number} Valor del prámetro en binario
   */
  static toBinary(value) {
    // Verificamos que sea un número entero
    if (!Number.isInteger(value)) throw new SyntaxError('Only integers numbers');

    // Variables que almacenará el resultado de las divisiones y el resultado en binario 
    let number = value;
    let binary = '';

    // Mientras el resultado de la división sea mayor o igual a 2 podemos seguir ejecutandolo
    while (number >= 2) {
      // Creamos el binario añadiéndole el resto de la división más los resultados anteriores.
      // Se coloca antes que los valores anteriores porque la conversión se lee de atrás hacia
      // adelante
      binary = (number % 2) + binary;
      // Dividimos por 2 el resultado de las divisiones anteriores
      number = Math.floor(number / 2);
    }

    // Cuando finalice el bucle, si el resultado de la división es par se le agrega un `0` al
    // inicio del binario, en caso contrario un `1`
    if (number % 2 === 0) {
      binary = '0' + binary;
    } else {
      binary = '1' + binary;
    }

    // Retornamos el binario resultante
    return binary;
  }
}

console.log(Conversor.toBinary(23));
// console.log(Conversor.toBinary("154"));
console.log(Conversor.toBinary(13));
console.log(Conversor.toBinary(154));
// console.log(Conversor.toBinary(123.34));
// console.log(Conversor.toBinary("asada"));
