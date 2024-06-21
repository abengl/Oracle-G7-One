// Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
  console.log("¡Hola, mundo!");
}
saludo();
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludo2(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
saludo2("Ale");
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
const doubleNumber = function (num) {
  return 2 * num;
};
console.log(doubleNumber(7));

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
const average = (x, y, z) => (x + y + z)/3;
console.log(average(7, 5, 3));

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
const greaterNumber = function (num1, num2) {
    return(num1 > num2 ? num1 : num2);
}
console.log(greaterNumber(7, 5));

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
const powerNumber = x => x * x;
console.log(powerNumber(3));