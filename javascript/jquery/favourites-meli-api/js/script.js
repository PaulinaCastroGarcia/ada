var favourites = localStorage.getItem('favourites')
favourites = JSON.parse(favourites)

if (favourites != null) {
  var products = favourites;
} else {
  var products = [];
}

$('#search').on('click', function (){
  var userSearch = $('#user-search').val()
  $.ajax(
    `https://api.mercadolibre.com/sites/MLA/search?category=${userSearch}`
  ).done(function(data) {
    $('main').html('')
    for (var i = 0; i < 9; i++) {
      $.ajax(
        'https://api.mercadolibre.com/items/' + data.results[i].id
      ).done(function(d) {
        $('main').append(`<div class="product" id="${d.id}">
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
      })
    }
  });
})

//mostrar corazon de los favoritos
function faved(container) {
  if (favourites != null) {
    var clusters = container.children()
    for (var i = 0; i < clusters.length; i++) {
      if (favourites.filter(e => e.id === clusters[i].id).length > 0) {
        $(`#${clusters[i].id}`).find('#heart-uno').parent().addClass('hidden')
        $(`#${clusters[i].id}`).find('#heart-dos').parent().removeClass('hidden')
      }
    }
  }
}

$( document ).ajaxComplete(function() {
  faved($('main'));
});

//agregar o sacar de favoritos haciendo click en el corazon
$(document).on('click', $('.heart'), function(e) {
  var heart = $(e.target)
  if ((heart.attr('id')) == 'heart-uno') {
    heart.parent().addClass('hidden');
    heart.parent().siblings('.heart').removeClass('hidden');

    var productObj = {
      id: heart.parent().parent().attr('id'),
      img: heart.parent().siblings('.img-container').children().attr('src'),
      title: heart.parent().siblings('.product-info-container').children('.product-title').text(),
      price: heart.parent().siblings('.product-info-container').children('.product-price').text()
    }

    products.push(productObj)
    localStorage.setItem("favourites", JSON.stringify(products))
  } else if ((heart.attr('id')) == 'heart-dos'){
    heart.parent().addClass('hidden');
    heart.parent().siblings('.heart').removeClass('hidden');
    
    var elementPos = products.map(function(x) {return x.id; }).indexOf(heart.parent().parent().attr('id'));
    products.splice(elementPos,1)
    localStorage.setItem("favourites", JSON.stringify(products))
  }
})



