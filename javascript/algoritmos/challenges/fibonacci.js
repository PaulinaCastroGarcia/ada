// Crear la función fibonacci, que tiene que mostrar los primeros 10 números 
//de la secuencia en consola.

function fibonacci() {
	var fib = [0, 1];
	for (var i =1; i <= 8; i++) {
		fib.push(fib[i] + fib[i - 1]);
	}
	console.log(fib);
}

fibonacci();

