

let miFormulario = document.getElementById("formulario2");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.objetivo;
    console.log(formulario);
    //Obtengo el valor de<input type="text">
    console.log("Valor 1: " + formulario.niños[1].valor);
    //Obtengo el valor de <input type="email">
    console.log("Valor 2: " + formulario.niños[2].valor);
    
}

