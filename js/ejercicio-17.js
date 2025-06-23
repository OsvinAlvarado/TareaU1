//Unidades de Medida
let pies = Number(prompt('Ingrese la cantidad en Pies: '));
let metros = Number(prompt('Ingrese la cantidad en metros: '));

let totalPies = ((metros * 3.28084) + pies)
let totalMetros = ((pies * 0.3048) + metros)
let pulgadas = ((metros * 39.3701) + (pies * 12))
let millas = ((metros * 0.000621371) + (pies * 0.000189394))
let yardas = ((metros * 1.09361) + (pies * 0.333333))

alert(
    `El total en pulgadas es: ${pulgadas}\n
     El total en pies es: ${totalPies}\n
     El total en metros es: ${totalMetros}\n
     El total en yardas es: ${yardas.toFixed(3)}\n
     El total en millas es: ${millas.toFixed(4)}`)