
//PromiseChain.js
//
// 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
// a function that sequentially calls all 3 of these functions in order.
// Returns a promise chain which returns the time in milliseconds it takes to complete the entire operation.
// Comparing it with the results from 3_3_PromiseAll.js
//

const calculateTimePromiseAll = require('./3_3_PromiseAll.js');

function first(t1) {
    return new Promise(resolve => setTimeout(resolve, t1));
}

function second(t2) {
    return new Promise(resolve => setTimeout(resolve, t2));
}

function third(t3) {
    return new Promise(resolve => setTimeout(resolve, t3));
}

async function calculateTime(t1, t2, t3) {
    let startTime = Date.now();

    await first(t1*1000);
    await second(t2*1000);
    await third(t3*1000);

    let endTime = Date.now();

    let duration = endTime - startTime;
    console.log(duration);
    return duration;
}

calculateTime(4, 5, 6);

calculateTimePromiseAll(4, 5, 6);
