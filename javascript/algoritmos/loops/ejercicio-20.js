//Determinar si un número ingresado por el usuario en un loop es primo o no, 
//validar que el número ingresado sea mayor o igual a dos.

var n = prompt('ingrese un numero para saber si es primo');
n = parseInt(n);

while (n < 2) {
  var n = prompt('el numero tiene que ser mayor a dos');
  n = parseInt(n);
}

if (n >= 2) {
	var primo = true;

	for (var z = 2; z < n && primo; z++) {
		if (n !== z && n % z == 0) {
			primo = false;
		}
  }
  
	if (primo) {
		console.log(n + ' es primo');
	} else {
    console.log(n + ' no es primo');
  }
} 
