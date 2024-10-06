
// FileCleaner.js
// 
// The code in this file is used to clean or trim the extra spaces to the left and right


const fs = require('fs');

function FileCleaner(fileName) {
    fs.readFile(fileName, 'utf-8', function(err, data) {
        if (err) {
            console.log('Error reading the contents of the file');
            return;
        }

        let modifiedCleanFileContents = data.replace(/\s+/g, ' ').trim();
        
        fs.writeFile(fileName, modifiedCleanFileContents, 'utf-8', function() {
            console.log('This file has been cleaned. Please verify');
        });
    });
}

function returnPromise() {
    return new Promise(resolve => resolve());
}

let p = returnPromise();
p.then(FileCleaner('a.txt'));