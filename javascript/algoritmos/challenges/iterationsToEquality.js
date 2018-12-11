function sonIguales(arr) {
  var iguales = true;
  for (i = 0; i < arr.length; i++){
    if (arr[0] !== arr[i]){
      iguales = false;
    } 
  }
  return iguales;
}

function iterationsToEquality(arr) {
var iguales = sonIguales(arr);

var vuelta = 0;
while (!iguales) {
  var mayor = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[mayor] < arr[i]) {
      mayor = i;
    }
  }

  for(i = 0; i < arr.length; i++){
    if(i !== mayor){
      arr[i]++;
    }
  }

  iguales = sonIguales(arr);

  vuelta++;
}

return vuelta;
}

var cantidadDeVueltas = iterationsToEquality([1, 3, 3]);
console.log(cantidadDeVueltas)
