//Crear una función numerosPares, que muestra en consola los números pares del 0 al 100.

function numerosPares() {
	for (var i = 1; i <= 100; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}

numerosPares();

