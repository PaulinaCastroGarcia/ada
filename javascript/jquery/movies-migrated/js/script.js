var titles = []

function setTitle(newTitle) {
	titles.push(newTitle)
} 

function getTitle(id) {
  for(var i = 0; i < titles.length; i++) {
    if (id == titles[i].id) {
      return titles[i]
    }
  }
}

function deleteTitle(id) {
  for(var i = 0; i < titles.length; i++) {
    if (id == titles[i].id) {
      titles.splice(i, 1)
    }
  }
}

var types = $('#types').find('input')
var movie = $('#movie')
function isMovie() {
  if (movie.is(":checked")) {
    return true
  }
  return false
}

var cast = []
var addActorButton = $('#add-actor')
var castList = $('#cast-list')

addActorButton.on('click', function (e) {
  e.preventDefault()

  var newActorInput = $('#new-actor')

  if (newActorInput != '') {
    cast.push(newActorInput.val())
    castList.append('<li>' + newActorInput.val() + '</li>')
    newActorInput.val('')
  }  
})

function validate() {
  if ($('#title').val() == '') {
    alert('ingresar un titulo')
  } else if (!types.eq(0).is(":checked") && !types.eq(1).is(":checked")) {
    alert('seleccionar si es pelicula o series')
  } else if (castList.html() == ''){
    alert('agregar reparto')
  } else {
    return true
  }
}

var form = $('#form-add')
form.on('submit', function (e) {
  e.preventDefault()
  
  var title = $('#title')

  if (titles.length == 0) {
    idCounter = 0;
  } else {
    idCounter = titles[titles.length - 1].id + 1
  }

  if (validate()) {  
    var newTitle = {
      id: idCounter,
      title: title.val(),
      rating: 0,
      views: 0,
      isMovie: isMovie(),
      cast: cast
    }
  
    setTitle(newTitle)
  
    castList.html('')
    $('#form-add')[0].reset()
  }
})

var searchForm = $('#form-search')
searchForm.on('submit', function(e) {
  e.preventDefault()
  var id = $('#search-title').val()
  var titleToShow = getTitle(id)
  var title = titleToShow.title
  var cast = titleToShow.cast
 
  $('#found-title').html('Title: ' + title)
  $('#found-cast').html('Cast: ' + cast)
  
  if (titleToShow.isMovie) {
    $('#found-movie-series').html('movie')
  } else {
    $('#found-movie-series').html('series')
  }

  $('#search-title').val('')
})
