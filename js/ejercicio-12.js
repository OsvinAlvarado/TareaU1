//Calculadora simple
let a = Number(prompt('Ingrese un número: '))
let b = Number(prompt('Ingrese un número: '))

let operacion = prompt(
  'Elija la operación deseada:\n' +
  '1. Suma\n' +
  '2. Resta\n' +
  '3. Multiplicación\n' +
  '4. División'
);

let resultado;
switch(operacion){
    case "1": resultado = a + b;
        break;
    case "2": resultado = a - b;
        break;
    case "3": resultado = a * b;
        break;
    case "4": resultado = a / b;
        break;
    default:
        break;
}

alert(`El resultado es ${resultado}`)