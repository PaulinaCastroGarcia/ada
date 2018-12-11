// Seleccionar el elemento con id primer-boton utilizando el método getElementById
// Al hacer click en el boton seleccionado previamente debe mostrar una alerta con 
// el siguiente mensaje: 'Hiciste click en un botón'
// Utilizar el método onclick del elemento

var primerBtn = document.getElementById('primer-boton');

function elAlert () {
  alert('Hiciste click en un boton')
}

primerBtn.onclick = elAlert;

//  primerBtn.addEventListener('click', elAlert);