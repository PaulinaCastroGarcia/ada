const url_string = window.location.href
const url = new URL(url_string)
const id = url.searchParams.get("id")

axios
.get(`/users/${id}`)
.then(function(res) {
  const data = res.data
  $('#name').val(data.name)
  $('#surname').val(data.surname)
  $('#age').val(data.age) 
})

$('#edit-user-submit').on('click', function(e) {
  e.preventDefault()
  const name =  $('#name').val()
  const surname =  $('#surname').val()
  const age =  $('#age').val()

  axios.put(`/users/${id}`, {
        name: name,
        surname: surname,
        age: age
      })
  .then(function() {
    location.href = '/usuarios'
  })
})
