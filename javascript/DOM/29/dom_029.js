// Seleccionar el elemento form (utilizar cualquiera de las formas disponibles)
// Agregar un manejador/handler/listener al evento submit del formulario
// Vas a tener que prevenir que se ejecute la acción por defecto del evento submit con preventDefault
// Cuando el usuario haga submit del formulario mostrar un alerta con el siguiente mensaje:
// Si el usuario no selecciona ningúna opción mostrar: Por favor seleccione al menos una opción
// Si el usuario selecciona sólo una opción mostrar: La opción elegida es es: ${opcion}
// Si el usuario selecciona varios super heroes mostrar: Las opciones elegidas son: ${opciones}

var form = document.querySelector('form');
var checkboxes = document.querySelectorAll('input[type=checkbox]');

function showAlert (e) {
  e.preventDefault();
  var count = 0;
  var checkedOnes = []
  
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedOnes.push(' ' + checkboxes[i].value )
      count++
    }
  }

  if (count == 0) {
    alert('por favor seleccione al menos una opcion')
  } else if (count == 1) {
    alert('la opcion elegida es ' + checkedOnes[0])
  } else if (count > 1) {
    alert('Las opciones elegidas son: ' + checkedOnes.toString())
  }
}

form.addEventListener('submit', showAlert)