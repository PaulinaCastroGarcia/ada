//piramide invertida

for (var i = 5; i > 0; i--) {
	var asterisco = '*';
	var z = i - 1;
	for (z; z > 0; z--) {
		asterisco = asterisco + '**';
	}
	console.log(asterisco);
}

//otra solucion 
// for (var i = 1 ; i <= 10 ; i++) {
//    var asterisco = '';
//    for (var z = 1 ; z <= (10 - i + 1); z++) {
//        asterisco = asterisco + '*';
//    }
//     if( i%2===0) {
//        console.log(asterisco)
//    }
// }
