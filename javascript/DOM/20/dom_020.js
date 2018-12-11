// Seleccionar el elemento con id primer-boton utilizando el método querySelector
// Al hacer click en el boton seleccionado previamente debe mostrar una alerta 
// con el siguiente mensaje: 'Hiciste click en un botón controlado con addEventListener'
// Utilizar el método addEventListener del elemento

var primerBtn = document.querySelector('#primer-boton');

function elAlert () {
  alert('Hiciste click en un botón controlado con addEventListener')
}

 primerBtn.addEventListener('click', elAlert);