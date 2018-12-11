//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

var n = parseInt(prompt('ingrese un numero'));
var m = parseInt(prompt('ingrese otra numero'));

while (isNaN(n) || isNaN(m)){
	alert('por favor ingrese solo numeros');
	n = prompt('ingrese un numero');
	m = prompt('ingrese otro numero');
}

while (n > m) {
	m = prompt('ingrese un numero mas grande que el anterior');
}

var suma = 0;

for (var i = n; i <= m; i++) {
	if (i % 2 == 0) {
		suma = suma + i;
	}
}

console.log('la suma de todos los numeros pares entre ' + n + ' y ' + m + ' es ' + suma)