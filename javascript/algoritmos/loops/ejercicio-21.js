// Crear un programa que determine si un número es perfecto o no,
// (se dice que un número es perfecto si el número es igual a sus divisores,
// ejemplos 6 = 1 + 2 + 3)

var n = 28;
var divisores = [];

for (var i = 1; i < n; i++) {
	if (n % i == 0) {
		divisores.push(i)
	}
}

console.log(divisores)

var suma = 0;
for (var i = 0; i < divisores.length; i++) {
	suma = suma + divisores[i];
}

if (suma == n) {
	console.log('el numero ' + n + ' es perfecto');
} else {
	console.log('el numero ' + n + ' no es perfecto');
}