var x = ['a', 'l', 'f', 'a'];
var y = ['a','l','f','a','j','o','r'];
var letrasIguales = 0;

for (var i = 0; i < x.length; i++) {
	for (var z = 0; z < y.length; z++) {
		if (x[i] == y[z]) {
      letrasIguales = letrasIguales + 1;
      break;
		} 
	}
}

console.log('Hay ' + letrasIguales + ' letras iguales');