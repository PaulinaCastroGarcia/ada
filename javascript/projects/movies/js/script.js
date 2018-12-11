// Queremos crear un netflix.
// Como primer paso lo que tenemos que hacer es poder manejar los 
// titulos de las peliculas por lo que queremos que nuestro codigo
// nos permita agregar peliculas y buscarlas por su identificador 
// unico.

var titles = []

function pushTitle(newTitle) {
	titles.push(newTitle)
} 

function getTitle(id) {
  for (var i = 0; i < titles.length; i++) {
    if (id == titles[i].id) {
      return titles[i]
    }
  }
}

function deleteTitle(id) {
  for (var i = 0; i < titles.length; i++) {
    if (id == titles[i].id) {
      titles.splice(i, 1)
    }
  }
}

var types = document.getElementById('types').getElementsByTagName('input')
var movie = document.getElementById('movie')

function isMovie() {
  if (movie.checked) {
    return true
  }
  return false
}

var cast = []
var addActorButton = document.getElementById('add-actor')
var castList = document.getElementById('cast-list')

function addActor(e) {
  e.preventDefault()

  var newActorInput = document.getElementById('new-actor') 
  var newActor = document.createElement('li')

  if (newActorInput.value != '') {
    cast.push(newActorInput.value)

    newActor.innerHTML = newActorInput.value
    castList.appendChild(newActor)

    newActorInput.value = ''
  }  
}

addActorButton.addEventListener('click', addActor)

function validate(title) {
  if (title == "") {
    alert('ingresar un titulo')
  } else if (!types[0].checked && !types[1].checked) {
    alert('seleccionar si es pelicula o series')
  } else if (castList.innerHTML == ''){
    alert('agregar reparto')
  } else {
    return true
  }
}

var form = document.forms[0]
function setTitle(e) {
  e.preventDefault()

  var title = document.getElementById('title').value

  if (titles.length == 0) {
    idCounter = 0
  } else {
    idCounter = titles[titles.length - 1].id + 1
  }

  if (validate(title)) {  
    var newTitle = {
      id: idCounter,
      title: title,
      rating: 0,
      views: 0,
      isMovie: isMovie(),
      cast: cast
    }
    
    pushTitle(newTitle)
    
    castList.innerHTML= ''
    form.reset()
  }
}

var formAdd = document.getElementById('form-add')
form.addEventListener('submit', setTitle)

var searchForm = document.getElementById('form-search')
searchForm.addEventListener('submit', showTitle)

function showTitle(e) {
  e.preventDefault()
  var id = document.getElementById('search-title').value
  var titleToShow = getTitle(id)
  var title = titleToShow.title
  var cast = titleToShow.cast
 
  document.getElementById('found-title').innerHTML = 'Title: ' + title
  document.getElementById('found-cast').innerHTML = 'Cast: ' + cast
  
  if (titleToShow.isMovie) {
    document.getElementById('found-movie-series').innerHTML = 'movie'
  } else {
    document.getElementById('found-movie-series').innerHTML = 'series'
  }

  document.getElementById('search-title').value = ''
}
