console.log("carrito de compras...")

//Template String
//Alternativa a la concatenación
//Permite incrustar un valor dentro de un string
const nombreProducto = String("Lenovo Thinkpad T14")

console.log(nombreProducto)

console.log(`Nombre del producto es ${nombreProducto}`)

const producto1 = {
    nombre: "Lenovo Thinkpad T14",
    color: "Red",
    modelo: "IU643",
    descripcion: "laptop para trabajo liviano",
    precio: 2340000.89,
    getModelo: function () {
        console.log("El modelo es: " + this.modelo)
    }
}

producto1.imagen = "imagen.jpg"

console.log(producto1)

producto1.getModelo()

nombrecito = producto1.nombre
console.log(nombrecito)

const { descripcion, precio } = producto1
console.log(descripcion, precio)

//Object constructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre
    this.color = color
    this.precio = precio
}

const producto2 = new Producto("Lápiz HB Bemol", "Azul", 5000.89)

console.log(producto2)

//operador spread
const medidas = {
    largo: 10,
    ancho: 5,
    alto: 15
}

const nuevoProducto = { ...producto1, ...medidas }
console.log(nuevoProducto)