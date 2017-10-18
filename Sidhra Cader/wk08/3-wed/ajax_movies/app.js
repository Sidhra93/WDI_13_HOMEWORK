
$('button').on('click', function(){
  var search = $('#search-bar').val();
  $.ajax({
    url:"http://www.omdbapi.com/?s=" + search +"&apikey=2f6435d9",
    method: 'get'
  }).done(function(response){
    response.Search.forEach(function(movie){
      console.log(movie.Title);
    })
  });
});
