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
  var valid = true
  if ($('#title').val() == '') {
    $('#title').addClass('error')
    valid = false
  }
  if (!types.eq(0).is(":checked") && !types.eq(1).is(":checked")) {
    $('#error-types').removeClass('hide')
    valid = false
  }
  if (castList.html() == '') {
    $('#new-actor').addClass('error')
    valid = false
  }
  if (valid) {
    return true
  }
}

var form = $('#form-add')
form.on('submit', function (e) {
  e.preventDefault()
  
  $('#title').removeClass('error')
  $('#error-types').addClass('hide')
  $('#new-actor').removeClass('error')

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
    cast = []
    $('#form-add')[0].reset()
  }
})

var searchForm = $('#form-search')
searchForm.on('submit', function(e) {
  e.preventDefault()
  $('#error-search').addClass('hide')

  var id = $('#search-title').val()
  var titleToShow = getTitle(id)

  if (titleToShow == undefined) {
    $('#error-search').removeClass('hide')
  }

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
