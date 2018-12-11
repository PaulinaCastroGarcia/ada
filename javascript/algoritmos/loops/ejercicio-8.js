// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo 
//y se determine si el triángulo es válido o no.

var a = prompt('ingrese el primer angulo');
var b = prompt('ingrese el segundo angulo');
var c = prompt('ingrese el tres angulo');

if (a + b + c <= 180) {
	console.log('el triángulo es valido')
} else {
	console.log('el triangulo no es valido')
}