// Agregar un manejador/handler/listener de evento de doble click utilizando ondblclick 
// y asignarlo al botón con el id primer-boton
// Al hacer doble click en el primer botón debe mostrar una alerta con el siguiente 
// mensaje: '¡Doble click!'

var elBtn = document.querySelector('#primer-boton')

function showAlert () {
  alert('Doble click');
}

elBtn.addEventListener('dblclick', showAlert)