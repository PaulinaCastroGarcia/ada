if ($('html').attr('data-page') == 'home' ) {
  getAllUsers();
} else if ($('html').attr('data-page') == 'user' ) {
  getUser();
} 

//get all users
function getAllUsers() {
  axios
  .get('/users')
  .then(function(response) {
    const data = response.data
    for (let i = 0; i < data.length; i++) {
      $('.users-container').append(`<div class="user" id="${data[i].id}">
        <p>${data[i].name} ${data[i].surname}</p>
        <p>Age: ${data[i].age}</p>
        <div class="edit-delete-container">
          <button class="edit-user"><a href="/usuarios/editar?id=${data[i].id}">EDIT</a></button>        
          <button class="delete-user">DELETE</button>  
        </div>
      </div>`);
    }
    return axios
  })
  .then(function(){
    $('.delete-user').on('click', function() {
      const id = $(this).parent().parent()[0].id
      axios.delete(`/users/${id}`)
      .then(function() {
         location.href = '/usuarios'
      })
    })
  })
}

//get user
function getUser() {
  axios
  .get('/users/1')
  .then(function(res) {
    const data = res.data
    $('main').append(`<div class="user-container" id="${data.id}">
      <p>${data.name} ${data.surname}</p>
      <p>Age: ${data.age}</p>
      <div class="edit-delete-container">
        <button class="edit-user"><a href="edit-user.html?id=${data.id}">EDIT</a></button>        
        <button class="delete-user">DELETE</button>  
      </div>
    </div>`);
  })
}