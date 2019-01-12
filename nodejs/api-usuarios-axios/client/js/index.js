if ($('html').attr('data-page') == 'home' ) {
  getAllUsers();
} else if ($('html').attr('data-page') == 'user' ) {
  getUser();
} 

//get all users
function getAllUsers() {
  $.ajax('http://localhost:3000/users')
  .done(function(data) {
    for (let i = 0; i < data.length; i++) {
      $('.users-container').append(`<div class="user" id="${data[i].id}">
        <p>${data[i].name} ${data[i].surname}</p>
        <p>Age: ${data[i].age}</p>
        <div class="edit-delete-container">
          <button class="edit-user"><a href="edit-user.html?id=${data[i].id}">EDIT</a></button>        
          <button class="delete-user">DELETE</button>  
        </div>
      </div>`);
    }
  })
}

//get user
function getUser() {
  $.ajax('http://localhost:3000/users/1').
  done(function(data) {
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

//delete user
$( document ).ajaxComplete(function() {
  $('.delete-user').on('click', function(event) {
    const id = $(this).parent().parent()[0].id

    $.ajax(`http://localhost:3000/users/${id}`, {
      type: "DELETE"
    })
    .done(function() {
      location.href = 'index.html'
    })
  })
});

//recorriendo las keys de cada objeto y appendeando todas

// $.ajax('http://localhost:3000/users').
// done(function(data) {
//   for (let i = 0; i < data.length; i++) {
//     const userKeys = Object.keys(data[i])
//     $('.users-container').append(`<div class="user" id="user${data[i].id}">
//     </div>`);
//     for (let x = 0; x < userKeys.length; x++) {
//       const currentKey = userKeys[x]
//       if (currentKey != 'id') {
//         $(`#user${data[i].id}`).append(`
//         <p>${data[i][currentKey]}</p>`)
//       }
//     }
//   }
// })