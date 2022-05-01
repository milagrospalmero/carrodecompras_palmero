
// Array del Carrito de Compra
const carrito_productos = []; 

class Compra {
    constructor(producto) {
        this.nombre = producto.nombre;
        this.precio = producto.precio;
    }
}

function mostrarProductos() {
    let salida = "";
    let i = 1;

    for (let producto of productos) {
        salida += i + "- Nombre: " + producto.nombre + " - Precio: $" + producto.precio + "\n";
        i++;
    }

    return salida;
}


function agregarCarrito(producto) {
    
    carrito_productos.push(producto);
}

function mostrarCarrito() {
    let salida = "Productos comprados:\n\n";
    let total_pagar = 0;

    for (let producto of carrito_productos) {
        salida += "Nombre: " + producto.nombre + " - Precio: $" + producto.precio + "\n";
        total_pagar += parseFloat(producto.precio);
    }

    salida += "\nTotal a Pagar: $" + total_pagar.format(2, 3, '.', ',');
    alert(salida);
    console.log("Se listaron los productos comprados!");
   
}

function comprarProducto() {
    let salir = "";

    while (salir != "ESC") {
        let lista_productos = mostrarProductos();
        let productos_seleccionado = parseInt(prompt("Ingrese el Número de Producto  que desea comprar:\n\n" + lista_productos));


        let producto = productos[(productos_seleccionado - 1)];

        
        agregarCarrito(producto);
        console.log("Se agrego el Producto al Carrito!");
        salir = (prompt("Desea comprar otro Producto? (ESC para salir)")).toUpperCase();
    }
}

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

comprarProducto();
mostrarCarrito();