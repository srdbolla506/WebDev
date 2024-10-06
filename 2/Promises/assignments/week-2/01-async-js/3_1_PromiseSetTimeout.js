
// PromiseSetTimeout.js
//
// function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.



function returnPromise(n) {
    return new Promise(resolve => setTimeout(resolve, n));
}

let millisec = 4000;
let p = returnPromise(millisec);

p.then(function() {
    console.log(`Promise resolved after ${millisec/1000} seconds`);
});
