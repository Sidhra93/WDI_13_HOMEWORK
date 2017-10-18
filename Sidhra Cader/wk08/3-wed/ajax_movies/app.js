$('button').on('click', function(){
  var search = $('#search-bar').val();

  var options = {
    url:"http://www.omdbapi.com",
    method: 'get',
    data: {s: search, apikey: '2f6435d9'}
  };

  var movieSearch = function(response){
    $('.movie-list').html('')
    response.Search.forEach(function(movie){
      // console.log(movie.Title);
      $movieTitle = $('<h2>').text(movie.Title);
      $('.movie-list').append($movieTitle);
    });
  }

  $.ajax(options).done(movieSearch);
});
