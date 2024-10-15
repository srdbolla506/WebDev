
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let strArray = str.toLowerCase().split("");
    let start = 0, end = strArray.length-1;

    while(start<end) {
        if (strArray[start] == strArray[end]) {
            start += 1;
            end -= 1;
        } else {
            return false;
        }
    }

    return true;
}
  
module.exports = isPalindrome;


// Sample test

// let boolValue = isPalindrome("Nan");
// console.log(boolValue);
