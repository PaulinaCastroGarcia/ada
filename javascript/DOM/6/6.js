var elh1 = document.querySelector('h1');
var eldiv = document.querySelector('div');

if (elh1.hasAttributes() || eldiv.hasAttributes()) {
  elh1.setAttribute('class', 'tachado');
  eldiv.setAttribute('class', 'tachado');
} else {
  elh1.setAttribute('class', 'negrita');
  eldiv.setAttribute('class', 'negrita');
}