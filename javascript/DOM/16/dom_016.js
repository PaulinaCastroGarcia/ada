// Seleccionar el elemento ul
// Seleccionar cada uno de los elementos y guardarlos en una variable
// Eliminar cada uno de los elementos utilizando el método removeChild

var elUl = document.querySelector('ul');
var cantidad = elUl.children.length;

for (i = 0; i < cantidad; i++){
  // console.log('borro ' + elUl.children[0].innerHTML)
  elUl.removeChild(elUl.children[0]);
}

