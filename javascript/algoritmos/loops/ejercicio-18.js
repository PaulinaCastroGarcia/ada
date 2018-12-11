//Realizar el factorial de los primeros N números.

var n = parseInt(prompt('ingrese un numero'));

while (isNaN(n)) {
	n = parseInt(prompt('ingrese un NUMERO'));
}

var multi = 1;
for (var i = 1; i <= n; i++) {
	multi = multi * i;
} 

console.log(multi)