// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10,
// luego se le pedirá al usuario que introduzca un número en un popup para intentar adivinarlo.
//Si la entrada del usuario coincide con el número de conjetura, 
//el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje
// de "No corresponde"

var num = Math.floor(Math.random()*10 + 1);
console.log(num);

var numUsuario = prompt('ingrese un numero del 1 al 10');

if (num == numUsuario) {
	console.log('buen trabajo')
} else {
	console.log('no corresponde')
}