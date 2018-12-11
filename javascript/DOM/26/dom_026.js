// Seleccionar el elemento form (utilizar cualquiera de las formas disponibles)
// Crear una variable para cada valor de los inputs que tiene el form y guardar su valor:
// Ejemplo: crear la variable username y guardar el valor que tiene el elemento username
// Agregar el atributo value al elemento username con el valor ada
// Agregar el atributo value al elemento pass con el valor 12345
// Mostrar en el body una lista con todos los nombres y valores de los atributos del formulario
// Se puede utilizar el código del ejercicio anterior como base

var form = document.querySelector('form');

//action="guardar_usuario.html" method="post" enctype="application/x-www-form-urlencoded" name="login"

var action = form.getAttribute("action");
var method = form.getAttribute("method");
var enctype = form.getAttribute("enctype");
var name = form.getAttribute("name");

var att = [action, method, enctype, name]
var body = document.body;

var list = document.createElement('ul');

for (i = 0; i < att.length; i++) {
  var listitem = document.createElement('li');
  listitem.innerHTML = att[i];
  list.appendChild(listitem);
}

body.appendChild(list)

var  user = document.getElementById('username');
user.setAttribute('value', 'ada')

var  pass = document.getElementById('pass');
pass.setAttribute('value', '12345')
