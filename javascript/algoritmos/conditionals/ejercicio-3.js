var mes = 'junio';

if (mes == 'enero' || mes == 'marzo' || mes == 'mayo' || mes == 'julio' || mes == 'agosto' || mes == 'octubre' || mes == 'diciembre') {
	console.log(mes + ' tiene 31 dias');
} else if (mes == 'abril' || mes == 'junio' || mes == 'septiembre' || mes == 'noviembre') {
	console.log(mes + ' tiene 30 dias');
} else if (mes == 'febrero') {
	console.log(mes + ' tiene 28 dias');
} else {
	console.log('ingresa un mes');
}