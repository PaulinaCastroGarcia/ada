var express = require('express');
var path = require('path')
var router = express.Router();

const users = [
  {
    id: 1,
    name : 'Juani',
    surname: 'Gallo',
    age: 25
  },
  {
    id: 2,
    name: 'Sabri',
    surname: 'Alvarez',
    age: 18
  },
  {
    id: 3,
    name : 'Juani',
    surname: 'Gallo',
    age: 25
  }
]

router.get('/usuarios', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

router.get('/usuarios/nuevo', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'newuser.html'))
})

router.get('/usuarios/editar', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'edit-user.html'))
})

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.json(users);
});

router.get('/users/:id', function(req, res, next) {
  const id = req.params.id
  for (var i = 0; i <users.length; i++) {
    if (users[i].id == id) {
      return res.json(users[i]);
    }
  }
});

router.post('/user', function(req, res, next) {
  const user = req.body
  if (users.length != 0) {
    const lastId = users[users.length - 1].id
    user.id = lastId + 1
  } else {
    user.id = 1
  }
  users.push(user)
  res.json(users)
})

router.put('/users/:id', function(req, res, next) {
  const id = req.params.id

  for (let i = 0; i <users.length; i++) {
    if (users[i].id == id) {
      const currentUser = users[i]
      changeUserKeysValues(currentUser)
      res.json(users[i])
    }
  }

  function changeUserKeysValues(currentUser) {
    const body = req.body
    const userKeys = Object.keys(currentUser)
    const bodyKeys = Object.keys(body)

    for (var i = 0; i < bodyKeys.length; i++) {
      const currentBodyKey = bodyKeys[i];
      if (userKeys.indexOf(currentBodyKey) != -1) {
        currentUser[currentBodyKey] = body[currentBodyKey]
      } else {
        console.log(`${currentBodyKey} no es una clave valida`)
      }
    }
  }  
});

router.delete('/users/:id', function(req, res, next) {
  const id = req.params.id

  for (let i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      users.splice(i,1)
    }
  }
  res.json(users)
})

module.exports = router;