axios
.get('/api/books')
.then(function(response) {
  const data = response.data
  for (let i =0; i < data.length; i++) {
    $('#books-container').append(`
    <div class="book-cluster" data-isbn="${data[i].isbn}">
    <span>ISBN: ${data[i].isbn}</span>
    <span>Title: ${data[i].title}</span>
    <button type="button" class="details-btn">See details</button>
  </div>
    `);
  }
})

$('#books-container').on('click', 'button', function() {
  console.log('holi')
  location.href = `/books/details?isbn=${$(this).parent().data('isbn')}`
})