// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
const h1Element = document.querySelector("h1");
h1Element.innerHTML = "Hora del Desafío";
// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function displayConsole() {
    console.log("El botón fue clicado");
}
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function displayPrompt() {
    const ciudad = prompt("Nombra una ciudad de Perú");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function displayAlert() {
    alert("Yo amo JS");
}
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function displaySuma() {
    const numbersInput = prompt("Ingresa 2 números separados por un espacio");
    const arrayNumbers = numbersInput.split(" ");
    alert(`La suma de los números es ${arrayNumbers.reduce((acc, value) => { return +acc + +value }, 0)}`);
}