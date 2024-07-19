//Definir un arreglo de nombres de producto
const nombres = ["Lenovo Thinkpad T14", "Lápiz HB Bemol", "Mouse inalámbrico", "Monitor 24 pulgadas", "Teclado gamer"]

console.table(nombres)
console.log(nombres[0])

//agregar elemento al final 
nombres.push("Audífonos")
console.table(nombres)
console.log(nombres[0])

//agregar elemento al principio
nombres.unshift("Tablet")
console.table(nombres)

//eliminar elementos del arreglo
delete nombres[4]

//eliminar elemento del final
nombres.pop()
nombres.shift()
console.table(nombres)

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}
const elemento = "compás"

const nombres1 = [...nombres, elemento]
console.table(nombres1)