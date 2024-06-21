// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
// const inputDay = prompt("¿Qué día es hoy?").toLowerCase();
// const daysOfWeek = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

// if((daysOfWeek).includes(inputDay)) {
//     alert((inputDay === "sabado" || inputDay == "domingo") ? "¡Buen fin de semana!" : "¡Buena semana!");
// } else {
//     alert("Por favor, ingrese un día válido en español.");
// }

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
// const userInput = prompt("Ingresa un número:");
// if(!Number.isNaN(userInput)) {
//     alert((userInput >= 0) ? `${userInput} es un número positivo` : `${userInput} es un número negativo`);
// } else {
//     alert("Ingresa un número válido.");
// }

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
// const userPoints = prompt("Ingresa tu puntuación:");
// if(!Number.isNaN(userPoints)) {
//     alert((userPoints >= 100) ? "¡Felicidades, has ganado!" : "Intentalo nuevamente para ganar.");
// } else {
//     alert("Ingresa un número válido.");
// }
// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
// const saldo = 500;

// alert(`El saldo de tu cuenta es de $${saldo}.`);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
const username = prompt("Ingresa tu nombre:");

alert(`¡Hola! Bienvenido/a, ${username}.`);