
const fs = require('fs');
const { Command } = require('commander');

const program = new Command();


program
    .name('Words Counter')
    .description('CLI to some JS file utilities')
    .version('0.8.0');

program.command('counter')
    .description('Count the number of words in a file with filepath as input')
    .argument('<string>', 'filepath string')
    .option('--first', 'display just the first word in the file')
    .option('-s, --separator <char>', 'separator character', ' ')
    .action((filepath, options) => {
        fs.readFile(filepath, 'utf-8', function(err, data) {
            const words = data.split(options.separator);
            console.log(words.length);
        });
    });

program.parse();
