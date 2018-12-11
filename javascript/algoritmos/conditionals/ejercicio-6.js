var x = 9;
var y = 6;
var z = 5;

if (x > y) {
	var resta = x - z;
	if (resta > y) {
		console.log(resta + ' es mayor a y=' + y)
	} else {
		var suma = x + z;
		console.log('(x+z)*y es ' + (suma * y));
	}
} 

