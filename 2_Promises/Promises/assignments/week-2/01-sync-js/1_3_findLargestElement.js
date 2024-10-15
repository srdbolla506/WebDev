/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var largestNumber = numbers[0];
    for (let index in numbers) {
        if (largestNumber < numbers[index]) {
            largestNumber = numbers[index];
        }
    }
    return largestNumber;
}

module.exports = findLargestElement;


//Sample test

// let number = findLargestElement([3, 7, 12, 0, 9, 3, 21, 1]);
// console.log(number);
