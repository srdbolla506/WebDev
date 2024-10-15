
// PromiseClassTest.js

// This file is used for testing the PromiseClass that has been created in PromiseClass.js similar to Javascript Promise class


const PromiseClass =  require('./PromiseClass.js');


/* -------------------------- Test case 1 ----------------------- */

// function callback1() {
//     console.log("Promise resolved after given number of millisec");
// }

// function setTimeoutAsyncPromise(millisec) {
//     return new PromiseClass(resolve => setTimeout(resolve, millisec));
// }

// setTimeoutAsyncPromise(6000).then(callback1);





/* -------------------------------- Test case 2 -------------------------- */

function callback() {
    console.log("Success");
}

function rejectedCallback() {
    console.log("Rejected");
}

function someCallback() {
    console.log("Some Function callback");
}

function someFunction(method1, method2, method3) {
    let i = 10;
    if (i<10) {
        method1();
    } else if (i>10) {
        method2();
    } else {
        method3();
    }
}

let p = new PromiseClass(someFunction);
p.then(callback, rejectedCallback, someCallback);




/* ---------------------- Test case 3 ------------------------------ */

function setTimeoutAsyncPromise1(millisec) {
    return new PromiseClass((resolve, reject) => callSetTimeoutBasedOnCondition(resolve, reject, millisec));
}

function callSetTimeoutBasedOnCondition(resolve, reject, millisec) {
    if (millisec < 10000) {
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

setTimeoutAsyncPromise1(9000).then(callback2, callback2Rejected);
