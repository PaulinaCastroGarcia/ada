// Seleccionar el elemento body
var bod = document.querySelector('body');
// Crear un elemento título h1
var newH1 = document.createElement('h1');
// Agregarle al h1 el texto 'Vestibulum suscipit nulla quis orci'
newH1.innerHTML = 'Vestibulum suscipit nulla quis orci';
// Crear un elemento párrafo
var newP = document.createElement('p');
// Agregarle al p el texto 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.'
newP.innerHTML = 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.';
// Insertar el elemento título dentro del elemento body
bod.appendChild(newH1) 
// Insertar el elemento párrado dentro del elemento body
bod.appendChild(newP) 