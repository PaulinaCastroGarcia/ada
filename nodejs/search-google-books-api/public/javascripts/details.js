const url_string = window.location.href
const url = new URL(url_string)
const id = url.searchParams.get("id")

$.ajax({
  type: "GET",
  url: `/api/books/details?id=${id}`,
  success: function (response) {
    let book = response
    $('.book-details').append(`
        <div><img src="${book.cover}" alt=""></div>
        <div>
          <h3>${book.title}</h3>
          ${book.subtitle != undefined ? `<p>${book.subtitle}</p>` : ''}
          ${book.description != undefined ? `<p>${book.description}</p>` : ''}
          <p>${book.authors}</p>
        </div>
    `)
  }
})