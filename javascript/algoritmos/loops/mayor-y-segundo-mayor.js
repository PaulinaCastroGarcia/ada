var arr = [10, 74, 36, 40, 98, 11, 98, 120];
var mayor = arr[0];
var mayor2 = arr[0];

for (var i=0; i < arr.length; i++) {
	if (mayor <= arr[i]) {
		if (mayor != arr[i]) {
			mayor2 = mayor;
		}
		mayor = arr[i];
	} 
}

console.log('el mayor es ' + mayor);
console.log('el segundo mayor es ' + mayor2);