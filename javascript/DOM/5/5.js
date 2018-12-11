var primerA = document.getElementsByTagName('a')[0];

if (primerA.hasAttribute('class')) {
  primerA.classList.add('azul')
} else {
  primerA.classList.add('rojo')
}