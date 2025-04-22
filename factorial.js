const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularFactorial() {
  readline.question("Por favor, introduce un número entero: ", (entrada) => {
    const numero = parseInt(entrada);

    if (!isNaN(numero) && Number.isInteger(numero)) {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      console.log(`El factorial de ${numero} es: ${factorial}`);
      readline.close(); // Importante cerrar la interfaz readline
    } else {
      console.error(
        "Error: La entrada no es un número entero válido. Por favor, intenta de nuevo."
      );
      calcularFactorial(); // Volver a solicitar la entrada
    }
  });
}

// Llamamos a la función para iniciar el proceso
calcularFactorial();
