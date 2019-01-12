var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');
const axios = require('axios')

/* GET htmls */
router.get('/books/new-isbn', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'new-isbn.html'))
})

router.get('/books', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'))
})

router.get('/books/details', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'details.html'))
})

//API
const books = JSON.parse(fs.readFileSync(path.join(__dirname, '..','books.json')))

router.get('/api/books', function(req, res, next) {
  res.json(books)
})

router.post('/api/books/:isbn', async function(req, res, next) {
  const isbn = req.params.isbn

  const result = await axios
  .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
  
  const bookInfo = result.data.items[0].volumeInfo
  const book = {
    title: bookInfo.title,
    isbn: isbn
  }

  books.push(book)
  fs.writeFileSync(path.join(__dirname, '..','books.json'), JSON.stringify(books))

  res.json(books)
})

router.get('/api/books/:isbn', async function(req, res, next) {
  const isbn = req.params.isbn

  const result = await axios
  .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)

  const bookInfo = result.data.items[0].volumeInfo
  const bookObj = {
    title: bookInfo.title,
    subtitle: bookInfo.subtitle,
    description: bookInfo.description,
    authors: bookInfo.authors,
    cover: bookInfo.imageLinks.thumbnail,
    isbn: isbn
  }

  res.json(bookObj)
})

module.exports = router;