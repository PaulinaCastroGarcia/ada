var arr = [10, 240, 360, 7, 98, 11, 144 , 20];
var mayor= arr[0];

for (var i = 0; i < arr.length ; i++) {
	if (mayor < arr[i]) {
		mayor = arr[i];
		var indice = i;
	} 
}

console.log(mayor)
console.log(indice)