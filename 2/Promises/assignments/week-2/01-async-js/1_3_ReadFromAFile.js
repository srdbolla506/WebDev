

// ReadFromFile.js
//
// Reads the contents of a file and prints it to the console

const fs = require('fs');

function readFromFile(fileName) {
    fs.readFile(fileName, 'utf-8', function (err, data) {
        callback(data);
    })
}

function callback(contents) {
    console.log(contents);
}

function readFromFilePromise(resolve) {
    resolve();
}

function returnPromise() {
    return new Promise(readFromFilePromise);
}

let p = returnPromise();
p.then(readFromFile('a.txt'));
