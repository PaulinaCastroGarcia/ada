// Seleccionar el elemento form (utilizar cualquiera de las formas disponibles)
// Agregar un div con el id mensaje
// Validar que el campo username y pass no estén vacios al submitear el formulario
// Si están vacíos mostrar un mensaje de error: Los datos son incorrectos
// Si está todo bien mostrar un mensaje que diga: Login correcto
// Usar el div#mensaje para mostrar el mensaje

var form = document.forms[0];

console.log(form)
var newDiv = document.createElement('div');
newDiv.id = 'mensaje';

document.body.appendChild(newDiv);

function login(e) {
  e.preventDefault();
  if (form.elements[0].value.length == 0 || form.elements[1].value == '') {
    newDiv.innerHTML = 'los datos son incorrectos';
  
  } else {
    newDiv.innerHTML = 'login correcto';
  }
}

form.addEventListener('submit', login)


