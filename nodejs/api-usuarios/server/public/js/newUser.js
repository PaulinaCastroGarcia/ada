$('#new-user-submit').on('click', function(event) {
  event.preventDefault()
  const name =  $('#name').val()
  const surname =  $('#surname').val()
  const age =  $('#age').val()

  $.ajax('/user', {
    method: "POST",
    data: {
      name: name,
      surname: surname,
      age: age
    }
  })
  .done(function() {
    location.href = '/usuarios'
  })
})