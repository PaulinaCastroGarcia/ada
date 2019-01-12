$('#new-user-submit').on('click', function(event) {
  event.preventDefault()
  const name =  $('#name').val()
  const surname =  $('#surname').val()
  const age =  $('#age').val()

  const newUser = {
    name: name,
    surname: surname,
    age: age
  }
  axios
  .post('/user', newUser)
  .then(function(){
    location.href = '/usuarios'
  })
})