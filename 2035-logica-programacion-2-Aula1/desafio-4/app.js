// Crea una lista vacía llamada "listaGenerica".
const listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
const lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
const displayArray = function (array) {
  console.log(array);
};
displayArray(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function displayArrayInverse(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  console.log(newArray);
}
displayArrayInverse(lenguagesDeProgramacion);

// Crea una función que calcule el promedio de los elementos en una lista de números.
const averageArray = function (array) {
  return array.reduce((acc, val, index, array) => {
    return index == array.length - 1 ? (acc + val) / (index + 1) : acc + val;
  }, 0);
};
/*
const averageArray = function(array) {
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum / array.length;
}
*/
console.log(averageArray([2, 8, 20, 12]));
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function maxMin(array) {
  const maxValue = array.reduce((accu, value) => {
    return accu < value ? value : accu;
  }, 0);
  const minValue = array.reduce((accu, value) => {
    return accu < value ? accu : value;
  });
  console.log(
    `The array [${array}] has the minimun value ${minValue} and maximun value ${maxValue}.`
  );
  return [minValue, maxValue];
}
maxMin([2, 8, 20, 12]);

/*
function maxMin(array) {
  if (array.length === 0) {
    return []; // or handle empty array case as needed
  }

  const maxValue = Math.max(...array);
  const minValue = Math.min(...array);

  console.log(`The array ${array} has the minimum value ${minValue} and maximum value ${maxValue}.`);
  return [minValue, maxValue];
}
*/

// Crea una función que devuelva la suma de todos los elementos en una lista.
const sumArray = function (array) {
  const sum = array.reduce((acc, val) => {
    return acc + val;
  }, 0);
  console.log(`The sum of the elements of [${array}] is ${sum}.`);
  return sum;
};
sumArray([2, 8, 20, 12]);

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function elementIndex(array, element) {
    return array.indexOf(element);
};
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(elementIndex(beasts, 'camel'));
console.log(elementIndex(beasts, 'cat'));

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
const sumTwoArrays = function(arr1, arr2) {
    let sumArray = [];
    for(let i = 0; i < arr1.length; i++){
        sumArray.push(arr1[i] + arr2[i]);
    }
    return sumArray;
}
const a = [1, 3, 5];
const b = [7, 9, 11];
console.log(sumTwoArrays(a, b));

/*
const sumTwoArrays = function(arr1, arr2) {
  return arr1.map((value, index) => value + arr2[index]);
};

*/
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function squaredArray(array) {
    return array.map((num) => num ** 2);
}
console.log(squaredArray(a));
console.log(squaredArray(b));
