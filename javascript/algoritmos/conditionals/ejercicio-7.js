var antiguedad = 10;
var sueldo = 40000;

if (antiguedad >= 10) {
	sueldo = sueldo + (sueldo*0.1);
	console.log('Como tenes mas de 10a de antiguedadiguedad tu sueldo es de ' + sueldo);
} else if (antiguedad < 10 && antiguedad >= 5) {
	sueldo = sueldo + (sueldo*0.07);
	console.log('Como tenes menos de 10a pero mas de 5a de antiguedadiguedad tu sueldo es de ' + sueldo);
} else if (antiguedad < 5 && antiguedad >= 3) {
	sueldo = sueldo + (sueldo*0.05);
	console.log('Como tenes menos de 5a pero mas de 3a de antiguedadiguedad tu sueldo es de ' + sueldo);
} else if (antiguedad < 3) {
	sueldo = sueldo + (sueldo*0.05);
	console.log('Como tenes menos de 3a tu sueldo es de ' + sueldo);
}