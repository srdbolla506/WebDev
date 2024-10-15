
// 1_2_expensiture_anallysis.js
//
//
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 16434343440000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    var outputArray = [];
    for (let index in transactions) {
        let categoryValue = transactions[index]["category"];
        let price = transactions[index]["price"];

        let objectValue = {
            category: categoryValue,
            totalSpent: price
        };
        
        outputArray.push(objectValue);

    }
    return outputArray;
}

module.exports = calculateTotalSpentByCategory;



//Sample tests 

// let transaction1 = {
//     id: 1,
//     timestamp: 16434343440000,
//     price: 10,
//     category: 'Food',
//     itemName: 'pizza',
// };

// let transaction2 = {
//     id: 2,
//     timestamp: 111123232322430,
//     price: 20,
//     category: 'Sports',
//     itemName: 'bat',
// };

// let outputArray = calculateTotalSpentByCategory([transaction1, transaction2]);
// console.log(outputArray);