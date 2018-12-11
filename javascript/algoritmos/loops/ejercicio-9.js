//Determinar si una palabra empieza con mayúscula o no.

var palabra = 'Hola';
var primeraLetra = palabra.charAt(0);

if (primeraLetra == primeraLetra.toUpperCase()) {
	console.log('la primera letra es mayuscula')
} else {
	console.log('la primera letra es minuscula')
}
