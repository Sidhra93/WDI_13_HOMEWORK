var savingsBalance = document.querySelector('.savingsBalance');
var checkingBalance = document.querySelector('.checkingBalance');
var amtInput = document.querySelector('input');
var withdrawButton = document.querySelector('.withdraw');
var depositButton = document.querySelector('.deposit');

withdrawButton.addEventListener('click', function(){
  var bal = Number(balance.textContent);
  var amount = Number(amtInput.value);
  if (bal >= amount) {
    var newBalance = bal - amount;
    balance.textContent = newBalance.toFixed(2);
  } else {
    alert("You can't withdraw more than your balance!");
  }
})

depositButton.addEventListener('click', function(){
  var bal = Number(balance.textContent);
  var amount = Number(amtInput.value);
  var newBalance = bal + amount;
  balance.textContent = newBalance.toFixed(2);
})
