var favourites = localStorage.getItem('favourites')
favourites = JSON.parse(favourites)

if (favourites != null) {
  for (var i = 0; i < favourites.length; i++) {
    $('.favs-container').append(`
    <div class="product" id= ${favourites[i].id}>
        <div class="img-container">
          <img src="${favourites[i].img}" alt="" >
        </div>
        <div class="product-info-container">
          <p class="product-title">${favourites[i].title}</p>
          <p class="product-price">${favourites[i].price}</p>
        </div>
        <div class="heart hidden" >
          <i class="fas fa-heart" id="heart-uno"></i>
        </div>
        <div class="heart">
          <i class="fas fa-heart" id="heart-dos"></i>
        </div>
      </div>`)
  }
}

$('#search').on('click', function (){
  var userSearch = $('#user-search').val()
  $.ajax(
    `https://api.mercadolibre.com/sites/MLA/search?category=${userSearch}`
  ).done(function(data) {
    $('.favs-container').html('')
    for (var i = 0; i < 9; i++) {
      $.ajax(
        'https://api.mercadolibre.com/items/' + data.results[i].id
      ).done(function(d) {
        if (favourites.filter(e => e.id === d.id).length > 0) {
          $('.favs-container').append(`<div class="product" id="${d.id}">
            <div class="img-container">
              <img src="${d.pictures[0].url}" alt="" >
            </div>
            <div class="product-info-container">
              <p class="product-title">${d.title}</p>
              <p class="product-price">$ ${d.price}</p>
            </div>
            <div class="heart" >
              <i class="fas fa-heart" id="heart-uno"></i>
            </div>
            <div class="heart hidden">
              <i class="fas fa-heart" id="heart-dos"></i>
            </div>
          </div>`);
        }
      })
    }
  });
})

$( document ).ajaxComplete(function() {
  faved($('.favs-container'));
});