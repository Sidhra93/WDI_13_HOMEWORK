var cities = ["Austin", "Los Angeles", "New York City", "San Francisco"];

var $select = $('#city-type');

cities.forEach(function(city){
  var text = $('<option>').text(city).val(city.toLowerCase().replace(/ /g,"-"));
  $select.append(text);
});

cities.forEach(function(city){
  if ($select.val() === city.toLowerCase().replace(/ /g,"-")) {
    $('body').className('nyc');
  }
});
