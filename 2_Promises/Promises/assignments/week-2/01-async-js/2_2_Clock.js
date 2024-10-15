
// Clock.js
//
// The code this file will display the clock time in the format HH:MM:SS AM/PM in 
// in local time zone


function updateDateTime() {
    let d = new Date();
    let hour = d.getHours() + 1;
    let minute = d.getMinutes() + 1;
    let second = d.getSeconds() + 1;
    process.stdout.write(`\r${hour}:${minute}:${second}`);

    let p = returnPromise();
    p.then(updateDateTime);
}

function updatLocaleDateTime() {
    let d = new Date();
    try {
        let localeDateString = d.toLocaleTimeString();
        process.stdout.write(`\r${localeDateString}`);    
    } catch {
        console.log('Promise rejected');
    }

    let p = returnPromise();
    p.then(updatLocaleDateTime);
}

function returnPromise() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

let p = returnPromise();
p.then(updatLocaleDateTime);

