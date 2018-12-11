//rectangulo hueco

for (var z = 0; z < 5; z++){
	var asterisco = '';
	if (z == 0 || z == 4) { //primer y ultima linea
		for (var i = 0; i < 5; i++) {
			asterisco += '*';
		}
		console.log(asterisco);
	} else if (z > 0 && z < 5) { // lineas del medio
		for (var i = 0; i < 5; i++) {
			if (i == 0 || i == 4) { // primer y ultimo asterisco
				asterisco += '*';
			} else { // asterisco vacio del medio
				asterisco += ' ';
			}
		}
		console.log(asterisco);
	}
}