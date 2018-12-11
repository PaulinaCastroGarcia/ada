//Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

var n = parseInt(prompt('ingrese un numero'));

while (isNaN(n)) {
	n = parseInt(prompt('ingrese un NUMERO'));
}

var suma = 0;
for (var i = 0; i < n; i++) {
	suma = suma + i;
}