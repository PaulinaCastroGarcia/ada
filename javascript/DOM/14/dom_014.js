// Seleccionar el elemento body
var bod = document.querySelector('body');

// Crear un array con números del 1 al 100
var arr = [];
for (var i = 1; i <= 100; i++) {
  arr.push(i);
}
// Crear un elemento ul
var newUl = document.createElement('ul');

// Recorrer el array de números y por cada uno crear un elemento li y asignar el texto 'Item ' + numero
for (var z = 0; z < arr.length; z++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = 'Item ' + (z + 1);
  newUl.appendChild(newLi);
  // Si el número es par entonces
  if ((z + 1) % 2 == 0){
    // Agregar al elemento li el estilo color: #ddd
    newLi.style.color = 'lightblue';
  } else {
    // Sino Agregar al elemento li el estilo color: #eee
    newLi.style.color = 'pink';
  }
}

bod.appendChild(newUl);



