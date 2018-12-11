// Seleccionar el elemento body
var bod = document.querySelector('body');
// Crear un array con 10 nombres
var nombres = ['nombre1', 'nombre2', 'nombre3', 'nombre4', 'nombre5', 'nombre6', 'nombre7', 'nombre8', 'nombre9', 'nombre10']
// Crear un elemento ul
var list = document.createElement('ul');
// Recorrer el array nombres y por cada uno crear un elemento li y asignar el texto correspondiente
for (var i = 0; i < nombres.length; i++){
  var newLi = document.createElement('li');
  newLi.innerHTML= nombres[i];
  // Ir insertando cada elemento li dentro de la lista ul
  list.appendChild(newLi);
}

bod.appendChild(list)
// Insertar el elemento ul dentro del body