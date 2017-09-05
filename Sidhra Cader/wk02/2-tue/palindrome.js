var palindrome = "hi";
var palindromeArray = palindrome.split("");


var isPalindrome = function(arr){
  if (arr === arr.reverse()) {
    return true;
  }
  else {
    return false;
  }
}

isPalindrome(palindromeArray);
