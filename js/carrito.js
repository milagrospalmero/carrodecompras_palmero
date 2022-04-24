// Variables 
const monto_maximo = 100000;
const cantidad_maxima = 100;
const descuento = (d) => {return d * 0.10};
const iva = (i) => {return i * 0.21};
const suma = (a,b) => {return a + b};
const resta = (a,b) => {return a - b};
const multip = (a,b) => {return a * b};
const divid = (a,b) => {return a / b};
const interes3 = (x) => {return x * 0.25}; // Intereses para 2, 3, 4 y 5 Cuotas
const interes6 = (x) => {return x * 0.35}; // Intereses para 6, 7, 8, 9, 10 y 11 Cuotas
const interes12 = (x) => {return x * 0.45}; // Intereses para 12 Cuotas

 
// Entrada de Datos
let nombre_producto = prompt("Ingrese el Nombre del Producto");
let precio_producto = parseFloat(prompt("Ingrese el Precio del Producto"));
let cantidad_producto = parseInt(prompt("Ingrese Cantidad del Producto"));
let metodo_pago;

do {
    metodo_pago = prompt("Ingrese Método de Pago (Efectivo / Tarjeta").toUpperCase();
    
    if ((metodo_pago == "EFECTIVO") || (metodo_pago == "TARJETA")) {
        break;
    }
    
} while (metodo_pago != "EFECTIVO" || metodo_pago != "TARJETA");

let cuotas;

// Validación de Método de Pago
if (metodo_pago == "EFECTIVO") {
    cuotas = 0;
} else {
    cuotas = parseInt(prompt("Ingrese la Cantidad de Cuotas (1, 3, 6 y 12)"));
}

// Calcular el Total a Pagar
let total_pagar_bruto = multip ( precio_producto , cantidad_producto);
let total_pagar = multip ( precio_producto , cantidad_producto);
console.log("Total a Pagar: " + total_pagar_bruto);
//Agrego el IVA al Total a Pagar
let total_pagar_iva = suma ( total_pagar_bruto, iva (total_pagar_bruto));
console.log("Total a Pagar (IVA): " + total_pagar_iva);

let descuento_aplicado;
let total_pagar_descuento;

// Verificiar si supera el Monto Máximo o la Cantidad Máxima de Productos
if ((total_pagar_iva >= monto_maximo) || (cantidad_producto >= cantidad_maxima)) {
    total_pagar_descuento = resta (total_pagar_iva, descuento(total_pagar_iva));
    total_pagar = total_pagar_descuento;
    console.log("Total a Pagar con Descuento: " + total_pagar);
    descuento_aplicado = true;
} else {
    total_pagar = total_pagar_iva;
    descuento_aplicado = false;
}

let interes_aplicado;
let total_pagar_cuotas;
let interes;

// Verifico la Cantidad de Cuotas Ingresada
if ((cuotas == 0) || (cuotas == 1)) {
    interes_aplicado = false;
} else if ((cuotas >= 2) && (cuotas <=5)) {
    total_pagar_interes = suma (total_pagar , interes3(total_pagar));
    total_pagar_cuotas = divid (total_pagar_interes, cuotas);
    interes_aplicado = true;
    interes = interes3;
} else if ((cuotas >= 6) && (cuotas <=11)) {
    total_pagar_interes = suma (total_pagar , interes6(total_pagar));
    total_pagar_cuotas = divid (total_pagar_interes, cuotas);
    interes_aplicado = true;
    interes = interes6;
} else {
    total_pagar_interes = suma (total_pagar, interes12(total_pagar));
    total_pagar_cuotas = divid (total_pagar_interes, cuotas);
    interes_aplicado = true;
    interes = interes12;
}

// Salida
let mensaje = "Producto: " + nombre_producto + "\n";
mensaje += "Precio por Unidad: " + precio_producto + "\n";
mensaje += "Cantidad de Productos: " + cantidad_producto + "\n";
mensaje += "Total Bruto: $" + total_pagar_bruto + "\n";
mensaje += "Total con IVA: $ " + total_pagar_iva + "\n";

if (descuento_aplicado) {
    mensaje += "Total con Descuento:  $" + total_pagar_descuento + "\n";
    total_pagar = total_pagar_descuento;
    
}

if (interes_aplicado) {
    mensaje += "Total con Interés:  $" + total_pagar_interes + " \n";
    mensaje += "Cuotas: " + cuotas + " de $" + total_pagar_cuotas + "\n";
    total_pagar = total_pagar_cuotas;
}

mensaje += "TOTAL A PAGAR: $" + total_pagar;
alert(mensaje);
console.log(mensaje);