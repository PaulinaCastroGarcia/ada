var elUl = document.querySelector('ul');
console.log(elUl.children)

//Seleccionar el 2 elemento hijo y guardarlo en una variable
//agregar la clase verde

var elSegundoHijo = elUl.children[1];
elSegundoHijo.classList.add('verde');

var elCuartoHijo = elUl.children[4];
elCuartoHijo.classList.add('rojo');

console.log(elCuartoHijo.parentElement);

var elPadre = elCuartoHijo.parentElement;
elPadre.classList.add('naranja')