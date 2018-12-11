
// Crear una función mostrarNombre. La función tiene que mostrar tu nombre 
//en consola con el siguiente formato:

// =======
// = Ada =
// =======

function mostrarNombre(nombre){
	for (var i = 0; i < 3; i++) {
		var iguales = '';
		if (i == 0 || i == 2) {
			for (var z = 0; z < nombre.length + 4; z ++) {
				iguales = iguales + '=';
			}
			console.log(iguales);
		} else {
			console.log('= ' + nombre + ' =');
		}
	}
}

mostrarNombre('paulina')

