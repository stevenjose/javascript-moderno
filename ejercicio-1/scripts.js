const form = document.getElementById("form");
const resulElement = document.getElementById("result");
let pares = [];
let numberI = 0;
// Se captura el evento submit

form.addEventListener("submit", (event) => {
  event.preventDefault();

  numberI = event.target.number1.value;
  //console.log(numberI);

  if (numberI > 0) {
    for (i = 2; i <= numberI; numberI -= 1) {
      console.log(numberI);
      if (numberI % 2 == 0) {
        pares.push(numberI);
      }
    }
  }

  //console.log("Array", pares);

  // Fuction para ordernar el array
  Array.prototype.sortNumbers = function () {
    return this.sort(function (a, b) {
      return a - b;
    });
  };

  // se envia el resultado con el calculo

  resulElement.textContent = pares.sortNumbers();

  // Se inicializar el array 
  pares = [];
  event.target.reset();


});
