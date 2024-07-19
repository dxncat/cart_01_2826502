//Definir un arreglo de nombres de producto
const nombres = ["Lenovo Thinkpad T14", "Lápiz HB Bemol", "Mouse inalámbrico", "Monitor 24 pulgadas", "Teclado gamer"]

//agregar elemento al final 
nombres.push("Audífonos")

//agregar elemento al principio
nombres.unshift("Tablet")

//eliminar elementos del arreglo
delete nombres[4]

//eliminar elemento del final
nombres.pop()
nombres.shift()
console.table(nombres)

let productos = [...nombres, elemento, elemento2]