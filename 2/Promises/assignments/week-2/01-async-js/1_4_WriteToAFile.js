

// WriteToAFile.js
//
// The code in this file is used to for writing the contents to a file
//
// fs.writeFile( file, data, options, callback )


const fs = require('fs');

function writeToAFile(fileName, contents) {
    fs.writeFile(fileName, contents, 'utf-8', function() {
        console.log('Writing to the file is complete');
    });
}

function writeToAFilePromise(resolve) {
    resolve();
}

function returnPromise() {
    return new Promise(writeToAFilePromise);
}

let p = returnPromise();
p.then(writeToAFile('b.txt', 'Hello, Welcome to the new way of writing to the file.'));

