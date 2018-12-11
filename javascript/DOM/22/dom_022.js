// Seleccionar el elemento html utilizando querySelector
// Seleccionar el elemento div del documento utilizando querySelector
// Agregar un manejador/handler de eventos keypress con addEventListener al 
//elemento html seleccionado anteriormente
// Mostrar como contenido del div, seleccionado anteriormente, 
//el siguiente mensaje: 'códido de letra: ' + event.keyCode + ', letra: ' + valorLetra
// La idea es que al apretar cualquier tecla se muestre en el div el mensaje con el 
// código de la tecla presionada y el valor de la misma
// Utilizar event.keyCode y String.fromCharCode() para lograrlo
// Una vez que funcione esta parte del ejercicio cambiar el estilo del div usando JavaScript
// Tamaño de tipografía: 20px
// Color: rojo
// Fuente: Arial
// Padding inferior: 20px

var elHtml = document.querySelector('html');
var elDiv = document.querySelector('div');

elDiv.style.fontSize = '20px';
elDiv.style.color = 'red';
elDiv.style.fontFamily = 'Arial';
elDiv.style.paddingBottom = '20px';

function showKey (e) {
  var valorLetra = String.fromCharCode(e.charCode);
  elDiv.innerHTML = 'códido de letra: ' + e.keyCode + ', letra: ' + valorLetra;
}

elHtml.addEventListener('keypress', showKey)