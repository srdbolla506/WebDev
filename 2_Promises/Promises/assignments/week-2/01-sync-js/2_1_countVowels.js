
/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


function countVowels(str) {
    let strArray = str.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0
    for (let c of strArray) {
        if (vowels.includes(c)) {
             count += 1;
        }

    }
    return count;

}

module.exports = countVowels;


// Sample test

// let count = countVowels("cabbage");
// console.log(count);