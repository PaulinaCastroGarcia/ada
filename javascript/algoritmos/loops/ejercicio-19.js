// Encontrar todos los divisores de un número.

var n = 100;
var divisores = []
for (var i = 1; i <= n; i++) {
	if (n % i == 0) {
		divisores.push(i)
	}
}

console.log(divisores)