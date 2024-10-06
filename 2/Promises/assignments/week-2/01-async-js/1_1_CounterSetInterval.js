

//CounterSetInterval.js
//
// This file has the code to up the counter by 1 for when the time goes up by 1 sec 
// using setInterval system built in method.


let counter = 0;

const updateCounter = () => {
    counter = counter + 1;
    console.log(counter);
}

setInterval(updateCounter, 1000);


