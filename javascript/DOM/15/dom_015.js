// Seleccionar el elemento body
var bod = document.querySelector('body');
// Crear un elemento ul
var newUl = document.createElement('ul');

var nam;
for (var i = 0; nam !== 'exit'; i++){
  nam = prompt('ingrese un nombre');
  if (nam !== 'exit') {
    var newLi = document.createElement('li');
    newLi.innerHTML = nam;
    newUl.appendChild(newLi);
    var lis = document.querySelectorAll('li');
    if ((i + 1) % 2 == 0){
      newLi.style.color = 'lightblue'; 
    } else {
      newLi.style.color = 'lightpink'; 
    }
  } 
}

bod.appendChild(newUl)