// Agregar un manejador/handler/listener de evento onmouseover al elemento hipervinculo
// Al posicionar el mouse sobre el hipervinculo se muestra el siguiente 
// mensaje en consola: 'Mouse sobre el hipervinculo'
// Agregar un manejador de evento onmouseout al elemento hipervinculo
// Al sacar el mouse sobre el hipervinculo se muestra el siguiente
//  mensaje en consola: 'Mouse salió del hipervinculo'

var elHipervinculo = document.querySelector('a')

function mouseOver () {
  console.log('Mouse sobre el hipervinculo')
}

function mouseOut () {
  console.log('Mouse salio del hipervinculo')
}

elHipervinculo.addEventListener('mouseover', mouseOver)
elHipervinculo.addEventListener('mouseout', mouseOut)