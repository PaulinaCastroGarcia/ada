function similaritiesSum(str) {
	var newStr = str;
	var sim = str.length;
	for (i = 0; i < str.length - 1; i++) {
		newStr = newStr.substring(1);
		var contador = 0;
		var noHayDistintos = true;
		for (z = 0; z < newStr.length && noHayDistintos; z++) {
			if (str[z] == newStr[z]) {
				contador++;
			} else {
				noHayDistintos = false;
			}
		}
		var sim = sim + contador;
	}
	return sim
}

similaritiesSum('ababaa')