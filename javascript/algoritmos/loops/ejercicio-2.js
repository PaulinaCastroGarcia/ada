var arr = [];
var n = 9;

for (var i = 0; i <= n; i++) {
	if(i % 2 == 0) {
		arr.push(0);
	} else {
		arr.push(i);
	}
}

console.log(arr)