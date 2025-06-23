//Tanques de agua
let aguaLitros = Number(prompt(
    'Ingrese la cantidad total del 1er tanque de agua en litros cubicos: '));
let aguaYardas = Number(prompt(
    'Ingrese la cantidad total del 2do tanque de agua en yardas cubicos: '));

let metroCubico1 = (aguaLitros / 1000);
let metroCubico2 = ((aguaYardas * 27) * 0.0283);

let totalMetrosCubicos = (metroCubico1 + metroCubico2);
let totalPiesCubicos = (metroCubico1 / 0.0283) + (aguaYardas * 27);

let aguaRiego1 = (totalMetrosCubicos * 0.25);
let aguaRiego2 = (totalPiesCubicos * 0.25);
let aguaConsumo1 = (totalMetrosCubicos * 0.75);
let aguaConsumo2 = (totalPiesCubicos * 0.75);

alert(
    `El agua total en m^3 es: ${totalMetrosCubicos.toFixed(3)}
     El total de agua en ft^3 es: ${totalPiesCubicos.toFixed(3)}
     El agua de consumo en m^3 es: ${aguaConsumo1.toFixed(3)}
     El agua de consumo en ft^3 es: ${aguaConsumo2.toFixed(3)}
     El agua de riego en m^3 es: ${aguaRiego1.toFixed(3)}
     El agua de riego en ft^3 es: ${aguaRiego2.toFixed(3)}`
)
console.log(`El agua total en m^3 es: ${totalMetrosCubicos.toFixed(3)}
     El total de agua en ft^3 es: ${totalPiesCubicos.toFixed(3)}
     El agua de consumo en m^3 es: ${aguaConsumo1.toFixed(3)}
     El agua de consumo en ft^3 es: ${aguaConsumo2.toFixed(3)}
     El agua de riego en m^3 es: ${aguaRiego1.toFixed(3)}
     El agua de riego en ft^3 es: ${aguaRiego2.toFixed(3)}`);

