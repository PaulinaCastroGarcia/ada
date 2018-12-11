// Seleccionar el elemento form (utilizar cualquiera de las formas disponibles)
// Mostrar una lista con los valores de los campos del formulario, como hiciste en el ejercicio anterior,
//  manejando el evento submit del formulario
// Vas a tener que prevenir que se ejecute la acción por defecto del evento submit con preventDefault
// Se puede utilizar código del ejercicio anterior

var form = document.forms[0]

// form.onsubmit = function() {
// 	// Este evento maneja la forma en que se va a submitear el formulario
//   // Retornamos false para evitar que se ejecute el evento submit del formulario
//   return false;
// }
var username = document.getElementById('username')
var password = document.getElementById('pass')
var inputs = [username, password]
console.log(inputs[0])
var lista = document.createElement('ul')

var body = document.body
function mostrarValores (e) {
  e.preventDefault();
  for (i = 0; i < inputs.length; i++){
    var listItem = document.createElement('li');
    listItem.innerHTML = 'el valor de ' + inputs[i].name + ' es ' + inputs[i].value;
    lista.appendChild(listItem)
  }
  body.appendChild(lista)
}

form.addEventListener('submit', mostrarValores)