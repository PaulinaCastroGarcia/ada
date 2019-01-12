$('#search-btn').on('click', function() {
  let search = $('#search-input').val()
  location.href = `/books?search=${search}`
})

$('#search-input').on('keypress', function(e) {
  if (e.keyCode == 13) {
    e.preventDefault()
    let search = $('#search-input').val()
    location.href = `/books?search=${search}`
  }
})