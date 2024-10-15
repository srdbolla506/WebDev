
// PromiseSleepCompletely.js
// 
/* a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


function sleep(millisec) {
    return new Promise(resolve => setTimeout(resolve, millisec));
}

async function randomMethod() {
    let p = await sleep(5000);
    for (i=0; i< 10; i++) {
        console.log("Hello");
    }

}

randomMethod();







