//Crear un programa que determine si un número introducido en un Prompt es par o no, 
//la respuesta será mostrada en una alerta.

var num = prompt('ingrese un numero');

if (num % 2 == 0) {
	alert(num + ' es par')
} else {
	alert(num + ' no es par')
}