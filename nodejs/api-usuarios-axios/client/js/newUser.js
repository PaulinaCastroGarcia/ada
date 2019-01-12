$('#new-user-submit').on('click', function(event) {
  event.preventDefault()
  const name =  $('#name').val()
  const surname =  $('#surname').val()
  const age =  $('#age').val()

  $.ajax('http://localhost:3000/user', {
    method: "POST",
    data: {
      name: name,
      surname: surname,
      age: age
    }
  })
  .done(function() {
    // window.location.assign("file:///C:/Users/Paulina/Documents/ada/nodejs/api-usuarios/client/index.html")
    location.href = 'index.html'
  })
})

// success: function() {
//   window.location.assign("file:///C:/Users/Paulina/Documents/ada/nodejs/api-usuarios/client/index.html")
// }
