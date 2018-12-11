// Crear un programa que determine si un string introducido por un usuario 
//empieza con un número o con una letra.

var x = prompt('ingrese algo');
var z = x.charAt(0)

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var letra = true;

for (var i = 0; i < num.length; i ++) {
	if (z == num[i]) {
		letra = false;
	} 
}

if (letra == true) {
	console.log('el primer caracter es una letra')
} else {
	console.log('el primer caracter es un  numero')
}
