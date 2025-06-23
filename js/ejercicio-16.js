//atleta
let min1 = Number(prompt('Tiempo que tardo en min el 1er atleta: '))
let seg1 = Number(prompt('Tiempo que tardo en seg el 1er atleta: '))
let min2 = Number(prompt('Tiempo que tardo en min el 2do atleta: '))
let seg2 = Number(prompt('Tiempo que tardo en seg el 2do atleta: '))

// tiempo en horas
let tiempoTotal1 = ((((min1 * 60) + seg1) + ((min2 * 60)+ seg2)) / 3600)
// tiempo en minutos
let tiempoTotal2 = ((((min1*60)+seg1) + ((min2*60)+seg2))/ 60)
//tiempo en segundos
let tiempoTotal3 = (((min1 * 60) + seg1)+ ((min2 * 60) + seg2))

alert(
    `El total de tiempo utilizado en horas es ${tiempoTotal1.toFixed(2)} horas\n
     El total en min es: ${tiempoTotal2.toFixed(2)} minutos\n
     El total en seg es: ${tiempoTotal3.toFixed(2)} segundos`)