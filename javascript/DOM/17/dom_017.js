// Seleccionar el elemento ul
// Remover cada uno de los elementos li de la lista desde atras
//  hacia adelante y utilizar la estructura de repetición for

var elUl = document.querySelector('ul');
var cantidad = elUl.children.length;

for (i = cantidad; i > 0; i--){
  cantidad = cantidad - 1;
  console.log('borro ' + elUl.children[cantidad].innerHTML)
  elUl.removeChild(elUl.children[cantidad]);
}