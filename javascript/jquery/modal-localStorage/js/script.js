var show = localStorage.getItem('show')
show = JSON.parse(show)

$('#modal-container').removeClass('hide')

$('#no').on('click', function (){
  var obj = {
    showModal: false,
    showTimestamp: Date.now()
  }

  localStorage.setItem('show', JSON.stringify(obj)) 

  $('#modal-container').addClass('hide')
})

$('#yes').on('click', function (){
  $('#modal-container').addClass('hide')
})

if (show != null) {
  if (show.showModal == false) {
    $('#modal-container').addClass('hide')
  } 

  if (show.showTimestamp != null) {
    if ((Date.now() - show.showTimestamp) > 3000) {
      $('#modal-container').removeClass('hide')
    }
  }
}

