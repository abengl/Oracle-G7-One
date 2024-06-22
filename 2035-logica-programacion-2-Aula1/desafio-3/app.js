// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

const buttonElement = document.querySelector(".imc-button");
const spanElement = document.querySelector(".e1-result");

function imcCalculator() {
  const weight = parseFloat(document.querySelector("#imc-weight").value);
  const height = parseFloat(document.querySelector("#imc-height").value);
  const imc = (weight / height ** 2).toFixed(2);
  spanElement.innerHTML = `Your IMC is ${imc}`;
}

buttonElement.addEventListener("click", imcCalculator);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
const factorial = function (number) {
  return number == 1 ? 1 : number * factorial(number - 1);
};
console.log(factorial(4));

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
const spanResult = document.querySelector(".e2-result");
const buttonConversion = document.querySelector(".currency-result");

const currencyConversion = function (amount, conversionRate) {
  const conversion = (amount * conversionRate).toFixed(2);
  return `$${amount} is equivalent to S/${conversion}.`;
};

buttonConversion.addEventListener("click", () => {
  const inputElement = document.querySelector("[name='dollar']");
  const dollarAmount = parseFloat(inputElement.value);
  const conversionRate = 3.78;
  const message = currencyConversion(dollarAmount, conversionRate);
  spanResult.innerHTML = message;
});

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
const buttonElement3 = document.querySelector(".rectangle-result");
const spanElement3 = document.querySelector(".e3-result");

function calculate(height, length, figure) {
  let area;
  let perimeter;
  switch (figure) {
    case "rectangle":
      area = (height * length).toFixed(2);
      perimeter = (2 * (height + length)).toFixed(2);
      break;
    case "circle":
      area = (Math.PI * length ** 2).toFixed(2);
      perimeter = (2 * Math.PI * length).toFixed(2);
      break;
    default:
      return "Invalid figure";
  }
  return `The area is ${area} and the perimeter ${perimeter}`;
}

buttonElement3.addEventListener("click", () => {
  const heightInput = parseFloat(document.querySelector("#height").value);
  const lengthInput = parseFloat(document.querySelector("#length").value);
  spanElement3.innerHTML = calculate(heightInput, lengthInput, "rectangle");
});
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
const buttonElement4 = document.querySelector(".circle-result");
const spanElement4 = document.querySelector(".e4-result");

buttonElement4.addEventListener("click", () => {
  const radiusInput = parseFloat(document.querySelector("#radius").value);
  spanElement4.innerHTML = calculate(undefined, radiusInput, "circle");
});
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
const buttonElement5 = document.querySelector(".table-result");
const spanElement5 = document.querySelector(".e5-result");

function multiplicationTable(number) {
  let table = `<table>
                <tr>
                  <th>Number</th>
                  <th>Result</th>
                </tr>`;
  for (let i = 1; i <= 12; i++) {
    table += `<tr>
                <td>${i}</td>
                <td>${number * i}</td>
              </tr>`
  }
  table += `</table>`
  return table;
}

buttonElement5.addEventListener("click", () => {
  const numberInput = parseInt(document.querySelector("#numberInput").value);
  spanElement5.innerHTML= multiplicationTable(numberInput);
})
