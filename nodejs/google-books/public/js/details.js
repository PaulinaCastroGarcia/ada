const url_string = window.location.href
const url = new URL(url_string)
const isbn = url.searchParams.get("isbn")

axios
.get(`/api/books/${isbn}`)
.then(function(response) {
  const data = response.data
  $('#book-info-container').append(`
    <img src="${data.cover}" alt="">
    <p>Title: ${data.title}</p> 
    ${data.subtitle != undefined ? `<p>Subtitle: ${data.subtitle}</p>` : ''}
    <p>Description: ${data.description}</p>
    <p>Author: ${data.authors}</p>
  `)
})