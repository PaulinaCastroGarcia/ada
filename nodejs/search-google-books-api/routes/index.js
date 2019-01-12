var express = require('express');
var router = express.Router();
var path = require('path');
const axios = require('axios')

/* GET home page. */
router.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

router.get('/books', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'results.html'))
})

router.get('/books/details', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'details.html'))
})


//API
router.get('/api/books', function(req,res) {
  const search = req.query.search
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
  .then(function(result) {
    const results = result.data.items

    let books = results.map(function(book) {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors,
        cover: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://ih1.redbubble.net/image.275886091.5974/flat,550x550,075,f.u3.jpg"
      }
   })
    res.json(books)
  })
})

router.get('/api/books/details', function(req,res) {
  const id = req.query.id
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
  .then(function(result) {
    const results = result.data.items[0]

    let book = {
      id: results.id,
      title: results.volumeInfo.title,
      subtitle: results.volumeInfo.subtitle,
      description: results.volumeInfo.description,
      authors: results.volumeInfo.authors,
      cover: results.volumeInfo.imageLinks ? results.volumeInfo.imageLinks.thumbnail : "https://ih1.redbubble.net/image.275886091.5974/flat,550x550,075,f.u3.jpg"
    }
    
    res.json(book)
  })
})


module.exports = router;
