//Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos,
// validar que el número ingresado no contenga letras.

var n = prompt('ingrese un numero');

var aNum = false;
while (aNum == false){
	for (var i = 0; i < n.length ; i++) {
		aNum = true;
		if (isNaN(n[i])){
			aNum = false;
			n = prompt('ingrese SOLO numeros');
		}
	}
}

var sum = 0;
for (var i = 0; i < n.length; i++){
	sum = sum + parseInt(n.charAt(i))
}
console.log(sum)