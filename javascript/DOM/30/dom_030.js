// var select = document.querySelector('select');

// select.onchange = function() {
//   var index = select.selectedIndex;
//   var valor = select.options[index].value;
//   console.log(index);
//   console.log(valor);
// }

// Seleccionar el elemento form (utilizar cualquiera de las formas disponibles)
// Mostrar en consola el valor de los campos de texto cuando el usuario hace foco en ellos
// Mostrar en consola el valor de los campos de texto cuando el usuario saca el foco de ellos
// Mostrar en consola el valor de los campos de texto cuando el usuario cambia el valor de ellos (evento oninput)

var form = document.forms[0];
var username = form.elements[0];
var pass = form.elements[1];

username.addEventListener("focus", showValue)
username.addEventListener("blur", showValue)
username.addEventListener("input", showValue)

pass.addEventListener("focus", showValue)
pass.addEventListener("blur", showValue)
pass.addEventListener("input", showValue)

function showValue (e){
  if (e.target.value != '') {
    console.log('el valor de ' + e.target.id + ' es ' + e.target.value)
  }
}