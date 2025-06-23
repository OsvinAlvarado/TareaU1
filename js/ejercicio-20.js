//Combustible
let km = Number(prompt('Ingrese el km total del auto: '))
let gasolina = Number(prompt('Ingrese la gasolina consumida total del auto en litros: '))

let consumo = (gasolina / km)

alert(`El consumo de combustible por km es: ${consumo.toFixed(2)} litros por km`)