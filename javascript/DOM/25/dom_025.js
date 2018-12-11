// Seleccionar el elemento form (utilizar cualquiera de las formas disponibles)
// Crear una variable para cada atributo del elemento form y guardar su valor:
// Ejemplo: crear la variable action y asignarle el valor que tiene el atributo 
// en el form (guardar_usuario.html)
// Mostrar en el body una lista con todos los nombres y valores de los atributos del formulario

var form = document.querySelector('form');

//<form action="guardar_usuario.html" method="post" enctype="application/x-www-form-urlencoded" name="login">
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
