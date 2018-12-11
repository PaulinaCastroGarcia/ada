// Seleccionar el elemento hipervinculo utilizando el método querySelector
// Agregar un manejador de evento click utilizando el método addEventListener
// al elemento seleccionado previamente
// Prevenir que el hipervinculo navege a otro lado utilizando el método preventDefault
// Mostrar un alerta con el siguiente mensaje: 'Este link no navega a ningún lado'

var hipervinculo = document.querySelector('a');


function prevent (e) {
  event.preventDefault();
  alert('Este link no navega a ningún lado');
}

hipervinculo.addEventListener('click', prevent);