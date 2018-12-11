//diamante

var asterisco = '*';
for (var i = 0; i <= 4; i++) {
	console.log(asterisco)
	asterisco = asterisco + '**';
	if (i == 4) {
		for (var x = i; x > 0; x--) {
			var asterisco = '*';
			var z = x - 1;
			for (z; z > 0; z--) {
				asterisco = asterisco + '**';
			}
				console.log(asterisco);
		}
	}
}





