// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenida!");

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
const nombre = "Alessandra";
console.log(`¡Hola, ${nombre}!`);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
//alert(`¡Hola, ${nombre}!`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
//const input = prompt("¿Cuál es el lenguage de programación que más te gusta?");
//console.log(input);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
const valor1 = 5;
const valor2 = 7;
const resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
const resultado2 = valor1 - valor2;
console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado2}.`);

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
// const edad = prompt("Ingresa tu edad: ");
// console.log((edad > 18 ? "Eres mayor de edad." : "Eres menor de edad."));

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
// const numero = prompt("Ingresa un numero:");
// if (numero > 0) alert(`${numero} es positivo.`);
// else if (numero < 0) alert(`${numero} es negativo.`);
// else alert(`${numero} es cero.`);

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
// let counter = 1;
// while(counter <= 10) {
//     console.log(counter);
//     counter++;
// }

// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
const nota = 7;
console.log((nota >= 7 ? "Aprobado" : "Reprobado"));

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numero = Math.random();
console.log(numero);

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
numero = Math.floor((Math.random() * 10)) + 1;
console.log(numero);

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
numero = parseInt(Math.random() * 1000) + 1;
console.log(numero);
