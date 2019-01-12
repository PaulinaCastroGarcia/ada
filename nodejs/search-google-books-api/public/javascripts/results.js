const url_string = window.location.href
const url = new URL(url_string)
const search = url.searchParams.get("search")

$.ajax({
  type: "GET",
  url: `/api/books?search=${search}`,
  success: function (response) {
    response.forEach(book => {
      $('#books-list').append(`
        <div class="book-cluster" id="${book.id}">
          <div><img src="${book.cover}" alt=""></div>
          <div>
            <h3>${book.title}</h3>
            ${book.subtitle != undefined ? `<p>${book.subtitle}</p>` : ''}
            <p>${book.authors}</p>
          </div>
        </div>
      `)
    })
  }
})

$(document).on('click', ".book-cluster", function() {
  let id = this.id
  location.href = `/books/details?id=${id}`
})
