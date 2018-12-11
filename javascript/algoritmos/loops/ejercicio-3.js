var arr = [10, 24, 36, 7, 98, 11, 14];
var mayor = arr[0];

for (var i=0; i < arr.length; i++) {
	if (mayor < arr[i]) {
		mayor = arr[i];
	} 
}

console.log(mayor)