const carrito = [
    {
        nombre: "Lenovo ThinkPad",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador Portátil",
        modelo: "VG6",
        precio: {
            minimoVenta: 3000000,
            compra: 1000000
        },
        caracteristicas: {
            dimensiones: {
                alto: 2,
                ancho: 50,
                largo: 30
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date(2017, 5, 2)
            }
        },
        obtenerPrecioCompra: function () {
            return this.precio.compra
        }
    },
    {
        nombre: "Laptop UltraSlim 2024",
        descripcion: "Computadora portátil delgada y ligera, perfecta para usuarios móviles.",
        tipoProducto: "Computador Portátil",
        modelo: "US2024",
        precio: {
            minimoVenta: 5000000,
            compra: 2000000
        },
        caracteristicas: {
            dimensiones: {
                alto: 1,
                ancho: 40,
                largo: 25
            },
            fabricacion: {
                pais: "China",
                fecha: new Date(2023, 11, 1)
            }
        },
        obtenerPrecioCompra: function () {
            return this.precio.compra
        }
    },
    {
        nombre: "Dell Latitude",
        descripcion: "Laptop para trabajo pesado",
        tipoProducto: "Computador Portátil",
        modelo: "DL2024",
        precio: {
            minimoVenta: 6000000,
            compra: 2500000
        },
        caracteristicas: {
            dimensiones: {
                alto: 3,
                ancho: 60,
                largo: 35
            },
            fabricacion: {
                pais: "USA",
                fecha: new Date(2023, 11, 1)
            }
        },
        obtenerPrecioCompra: function () {
            return this.precio.compra
        }
    },
    {
        nombre: "Mouse Inalámbrico",
        descripcion: "Mouse para computador portátil",
        tipoProducto: "Mouse",
        modelo: "MI2024",
        precio: {
            minimoVenta: 50000,
            compra: 20000
        },
        caracteristicas: {
            dimensiones: {
                alto: 1,
                ancho: 5,
                largo: 10
            },
            fabricacion: {
                pais: "China",
                fecha: new Date(2023, 11, 1)
            }
        },
        obtenerPrecioCompra: function () {
            return this.precio.compra
        }
    },
    {
        nombre: "Teclado Gamer",
        descripcion: "Teclado para computador de escritorio",
        tipoProducto: "Teclado",
        modelo: "TG2024",
        precio: {
            minimoVenta: 200000,
            compra: 80000
        },
        caracteristicas: {
            dimensiones: {
                alto: 3,
                ancho: 20,
                largo: 50
            },
            fabricacion: {
                pais: "USA",
                fecha: new Date(2023, 11, 1)
            }
        },
        obtenerPrecioCompra: function () {
            return this.precio.compra
        }
    }
]

carrito.forEach(producto => {
    console.log(producto.nombre)
    console.log(producto.tipoProducto)
    console.log(producto.modelo)
    console.log(producto.caracteristicas.dimensiones.largo)
    console.log(producto.caracteristicas.fabricacion.pais)
    console.log('--------------------------')
})

let preciosCompra = carrito.map(producto => producto.obtenerPrecioCompra())
console.log(preciosCompra)

let productosTaiwan = carrito.filter(producto => producto.caracteristicas.fabricacion.pais === "Taiwan")
console.log(productosTaiwan)

let precioTotal = carrito.reduce((total, producto) => total + producto.obtenerPrecioCompra(), 0)
console.log(precioTotal)

let productosChina = carrito.filter(producto => producto.caracteristicas.fabricacion.pais === "China")
let productosAltura = productosChina.filter(producto => producto.caracteristicas.dimensiones.alto > 2)
let productosPrecio = productosAltura.filter(producto => producto.precio.minimoVenta < 10000)

console.log(productosChina)
console.log(productosAltura)
console.log(productosPrecio)