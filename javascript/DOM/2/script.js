var elemento = document.getElementById('importante');
console.log(elemento)

var aDentroDeLi = document.querySelectorAll('li a');
for (i = 0; i < aDentroDeLi.length; i++){
  console.log(aDentroDeLi[i].innerHTML);
}

var elUl = document.querySelector('ul');
console.log(elUl)