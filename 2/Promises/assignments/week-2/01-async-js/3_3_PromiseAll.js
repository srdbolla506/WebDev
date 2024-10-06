
// PromiseAll.js
//
// 3 different functions that will return promises that resolve after t1, t2, and t3 seconds respectively
// a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all
// Returns a promise.all which returns the time in milliseconds it takes to complete the entire operation.
//


function first(t1) {
    return new Promise(resolve => setTimeout(resolve, t1));
}

function second(t2) {
    return new Promise(resolve => setTimeout(resolve, t2));
}

function third(t3) {
    return new Promise(resolve => setTimeout(resolve, t3));
}

async function calculateTimePromiseAll(t1, t2, t3) {
    let startTime = Date.now();

    await Promise.all([first(t1*1000), second(t2*1000), third(t3*1000)])

    let endTime = Date.now();
    let duration = endTime - startTime;
    console.log(duration);
    return duration;
}

calculateTimePromiseAll(4, 5, 6);

module.exports = calculateTimePromiseAll;



