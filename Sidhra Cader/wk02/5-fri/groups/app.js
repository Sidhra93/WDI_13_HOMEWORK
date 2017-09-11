var addButton = document.querySelector(".add");
var groupButton = document.querySelector(".group");
var listInput = document.querySelector(".list-input");
var groupInput = document.querySelector(".group-value");
var list = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var groupSize = document.querySelector("span");

addButton.addEventListener("click", function(){
  var newItem = listInput.value;
  var newListItem = document.createElement("li");
  newListItem.textContent = newItem;
  list.appendChild(newListItem);
  listInput.value = "";
});

var startGrouping = function(num){
  listItems.forEach(function(elem){
    console.log(elem);
    console.log(num);
  });
}

groupButton.addEventListener("click", function(){
  var size = groupInput.value;
  groupSize.textContent = size;
  groupInput.value = "";
  startGrouping(Number(size));
});
