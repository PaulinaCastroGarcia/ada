// Crear un programa que determine si un número introducido en un popup 
//es divisible por 11 y 5 o no, mostrar el resultado con console.log

var num = prompt('ingrese un numero');

if (num % 5 == 0 && num % 11 == 0) {
	console.log(num + ' es divisible por 5 y 11');
} else {
	console.log(num + ' no es divisible por 5 y 11');
}