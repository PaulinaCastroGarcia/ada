var primerA = document.getElementsByTagName('a')[0];

function pickColor () {
  var clr = prompt('Ingrese un color (verde, azul, rojo)');

  var colores = ['verde', 'azul', 'rojo']

  for (i = 0; i < colores.length; i++){
    console.log(i)
    if (clr == colores[i]) {
      primerA.classList.add(clr);
      break;
    }
  }
}

document.body.onload = pickColor;


