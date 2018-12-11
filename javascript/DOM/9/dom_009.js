//Obtener el contenido del elemento h1 utilizando innerText y guardarlo en una variable
var elh1 = document.querySelector('h1');
var contenidoH1 = elh1.innerText;
console.log(contenidoH1)

//Obtener el contenido del elemento p utilizando textContent y guardarlo en una variable
var elP = document.querySelector('p');
var contenidoP = elP.textContent;
console.log(contenidoP)

//Establecer el contenido del elemento h1 con el texto que tenía el elemento p
elh1.innerHTML = contenidoP;

//Establecer el contenido del elemento p con el texto que tenía el elemento h1
elP.innerHTML = contenidoH1;