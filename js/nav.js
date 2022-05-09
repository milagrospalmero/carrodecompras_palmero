///CREAR UN NAVBAR DESDE JS

//Capturo el header del index con el id menuNav y lo guardo en la variable header
let header = document.getElementById("menuNav");
//Creo un elemento nav , es decir creo una etiqueta nav y la guardo en la variable navBar
let navBar = document.createElement("nav");
// como voy a usar un navBar de bootstrap que tiene clases especificas
//se las agrego con el metodo classlist.add (lo que agrego son todas las clases de bootstap ya que
//ya que arriba cree la etiqueta pero no puedo agregar en el create las clases, lo hago por fuera)
navBar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");
// A la variable navBar( que esta guardando el elemento creado, es decir la etiqueta nav),
// le agrego el contenido html
navBar.innerHTML = `
<div class="container-fluid">
  <a class="navbar-brand" href="#">Menu </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">NOSOTROS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACTO</a>
      </li>
  
    </ul>
  </div>
</div>
`;
// a la variable header donde esta guardado el elemento capturado, le agrego el elemento
// que cree que esta guardado en la variable navBar.
header.appendChild(navBar);
