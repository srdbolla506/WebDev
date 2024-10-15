
//PromiseExample.js


// Seeing how Javascript Promise class works


/* -------------------- First part -- Understanding --------------------*/

// This Promise paramter function takes another function called resolve() as parameter and it needs to be called to complete the Promise call which inturn calls the then part of callback
// promiseParamterFunction can have any number of parameters but the first parameter is always considered first parameter in then and rest all parameters will execute second parameter in then.
function promiseParamterFunction(someFunction, someFunction2, someFunction3) {
    // resolve(); // When this resolve() is called, promise call is completed.
    // try {
        // reject();
    // } catch {
    //     console.log("Promise rejected");
    // }


    // When either of the functions called in parameter, the Promise gets completed
    let i = 10
    if (i < 10) {
        someFunction(); // this will call callback() method
    } else if (i > 10) {
        someFunction2(); // this will call rejectedCallback() method
    } else {
        someFunction3(); // this will also call rejectedCallback() method
    }
}

function PromiseDefined() {
    let p = new Promise(promiseParamterFunction); // Promise class of Javascript always calls a function. So pass function as parameter
    return p;
}

PromiseDefined().then(callback, rejectedCallback, someFunctionCallback); // callback and someParamterFunction are same. What ever is passed as callback function gets called as someParamterFunction

// callback is same as someFunction

// However number of parameters being passed in then, it will always consider it as only 2 paramegters - first(success) and second(failure). So, only callback() and rejectedCallback() gets called or are considered.


//-----------------------------------


function callback() {
    console.log("Promise call is complete and callback has been called");
}

function rejectedCallback() {
    console.log("Promise got rejected");
}

function someFunctionCallback() {
    console.log("Some Function callback");
}

//-------------------------------------------------



/* --------------------- Second Part - Timeout example ------------------------ */

function setTimeoutAsyncPromise(millisec) {
    return new Promise(resolve => setTimeout(resolve, millisec));
}

function callback1() {
    console.log("Promise resolved after given number of millisec - 6");
}

setTimeoutAsyncPromise(6000).then(callback1);


//Trying out with reject
function setTimeoutAsyncPromise1(millisec) {
    return new Promise((resolve, reject) => callSetTimeoutBasedOnCondition(resolve, reject, millisec));
}

function callSetTimeoutBasedOnCondition(resolve, reject, millisec) {
    if (millisec < 10) {
        setTimeout(resolve, millisec);
    } else {
        setTimeout(reject, 2000);
    }    
}

function callback2Rejected() {
    console.log("Promise rejected after 2 sec");
}

function callback2() {
    console.log("Promise resolved after given number of millisec");
}

setTimeoutAsyncPromise1(10000).then(callback2, callback2Rejected);
