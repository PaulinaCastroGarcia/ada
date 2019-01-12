const url_string = window.location.href
const url = new URL(url_string)
const id = url.searchParams.get("id")

$.ajax(`http://localhost:3000/users/${id}`)
.done(function(data) {
  $('#name').val(data.name)
  $('#surname').val(data.surname)
  $('#age').val(data.age) 
})

$('#edit-user-submit').on('click', function(e) {
  e.preventDefault()
  const name =  $('#name').val()
  const surname =  $('#surname').val()
  const age =  $('#age').val()

  $.ajax(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    data: {
      name: name,
      surname: surname,
      age: age
    }
  })
  .done(function() {
    location.href = 'index.html'
  })
})
