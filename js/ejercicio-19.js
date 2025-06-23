//la compra
let precioProducto = Number(prompt('Ingrese el precio del producto que compro:'))

let totalPagar = ((precioProducto * 0.15) + precioProducto);

alert(`El total a pagar es de: ${totalPagar.toFixed(2)}`)
console.log(`El total a pagar es de: ${totalPagar.toFixed(2)}`);
