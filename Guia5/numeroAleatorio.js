// Número a adivinar (1..25) y número máximo de intentos
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
const numeroIntentos = 3;
let intentos = 1;

function generarNumeroAleatorio() {
  const salida = document.getElementById("idParrafo");

  if (intentos > numeroIntentos) {
    salida.textContent = `Ya no quedan intentos. El número era ${numeroAleatorio}. Refresca para jugar otra vez.`;
    return;
  }

  const entrada = prompt(`Intento ${intentos} de ${numeroIntentos}. Ingresa un número del 1 al 25:`);
  if (entrada === null) return; // canceló

  const n = Number(entrada);
  if (!Number.isInteger(n) || n < 1 || n > 25) {
    salida.textContent = "Entrada inválida. Debe ser un entero entre 1 y 25.";
    return;
  }

  if (n === numeroAleatorio) {
    salida.textContent = `¡Correcto! El número era ${numeroAleatorio}.`;
    intentos = numeroIntentos + 1; // bloquear más intentos
    return;
  }

  // Fallback: falló; dar pista y descontar intento
  const quedan = numeroIntentos - intentos;
  const pista = n < numeroAleatorio ? "más alto" : "más bajo";

  if (quedan === 0) {
    salida.textContent = `Sin intentos. Era ${numeroAleatorio}.`;
  } else {
    salida.textContent = `No es ${n}. El número es **${pista}**. Te quedan ${quedan} ${quedan === 1 ? "intento" : "intentos"}.`;
  }

  intentos++;
}

