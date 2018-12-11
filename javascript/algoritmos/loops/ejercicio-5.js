var arr = [10, 24, 36, 7, 98, 11, 14, 98, 98, 14, 98];
var mayor = arr[0];
var count = 0;

for (var i=0; i < arr.length; i++) {
	if (mayor < arr[i]) {
		mayor = arr[i];
		count = 1; 
	} else if (mayor == arr[i]) {
 		count = count + 1;
 	}
}

console.log(mayor); 
console.log(count); 