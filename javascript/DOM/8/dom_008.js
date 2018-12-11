var list = document.getElementsByTagName('li');

list[0].classList.add('naranja');

for(i = 0; i < list.length; i++) {
  list[i].nextElementSibling.classList.add('naranja');
}

