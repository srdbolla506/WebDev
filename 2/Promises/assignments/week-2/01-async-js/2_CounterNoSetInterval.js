
//CounterNoSetInterval.js
//
// This file has the code to up the counter by 1 for when the time goes up by 1 sec 
// without using setInterval method. 
// This code works in an asynchromous way.

var counter = 0;

const updateCounter = () => {
    counter = counter + 1;
    console.log(counter);
    
    let p = createUpdateCounterPromise()
    p.then(updateCounter)
}

function setCustomInterval(resolve) {
    resolve();
}

function createUpdateCounterPromise() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

let p = createUpdateCounterPromise()
p.then(updateCounter)

