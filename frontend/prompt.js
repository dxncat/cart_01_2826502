alert('Hola 2826502')
let nombre = prompt('por favor ingrese su nombre')
document.getElementsByTagName('div')[0].innerHTML = 'Hola ' + nombre + '!'
const nombreProducto = String("Lenovo Thinkpad T14") 

console.log(nombreProducto)

console.log(`Nombre del producto es ${nombreProducto}`)

const producto1 = {
    nombre: "Lenovo Thinkpad T14",
    color: "Red",
    modelo: "IU643",
    descripcion: "laptop para trabajo liviano",
    precio: 2340000.89,
    getModelo: function(){
        console.log("El modelo es: " + this.modelo)
    }
}

console.log(producto1)

producto1.getModelo()

nombrecito = producto1.nombre
console.log(nombrecito)

const {descripcion, precio} = producto1
console.log(descripcion, precio)

//Object constructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre
    this.color = color
    this.precio = precio
}

const producto2 = new Producto("Lápiz HB Bemol", "Azul", 5000.89)

console.log(producto2)