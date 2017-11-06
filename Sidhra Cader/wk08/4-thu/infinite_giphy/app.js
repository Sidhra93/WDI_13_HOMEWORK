const APIKEY = "6ipaXx2xln1ikGCVn8k6vwXJvUwyBEqb";

var $searchItem = $("input");
var $searchButton = $("button");

$searchButton.on('click', function(){
  makeAjaxRequest();

  $(window).scroll(function(){
    if ($(window).scrollTop() == $(window).height()) {
      makeAjaxRequest();
    }
  })

  function makeAjaxRequest(){
    var search = $searchItem.val();
    var options = {
      url: "http://api.giphy.com/v1/gifs/search",
      method: 'get',
      data: {q: search, api_key: APIKEY, limit: 10}
    }

    $.ajax(options).done(function(response){
      // console.log(response.data);
      response.data.forEach(function(gif){
        var $searchItemsDiv = $('#search-items');
        var $img = $(`<div><img src = ${gif.images.fixed_width.url} ></div>`);
        $searchItemsDiv.append($img);
      })
    })
  }
})
