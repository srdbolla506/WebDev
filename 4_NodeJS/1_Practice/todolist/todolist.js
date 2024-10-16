const fs = require('fs');
const { Command } = require('commander');

const program = new Command();

program
    .name('ToDo List')
    .description('CLI to some JS todo list')
    .version('1.0.0');

program.command('todolist')
    .description('It lets add a todo, delete a todo and update a todo and mark todo as done')
    .argument('<string>', 'todo string')
    .argument('<string>', 'id of a todo - a number string')
    .option('--add', 'add a todo')
    .option('--delete', 'delete a todo')
    .option('--update', 'update a todo')
    .option('--markdone', 'mark a todo as done')
    .action((todoString, id, options) => {

        fs.readFile('todos.json', 'utf-8', function(err, data) {

            var todosArray = [];
            let dictValue = {"todo": todoString, "id": id, "status": "pending"};

            if(data.trim() != "") {
                const todosResult = JSON.parse(data);
                for(var i=0, todo; i<todosResult.todos.length; i++) {
                    todo = todosResult.todos[i];
                    todosArray.push(todo); 
                }                
            }

            if(todosArray.length > 0) {
                todosArray = todosArray.filter((todo) => {
                    if (todo.id == id) {
                        return false;
                    } 
                    return true;
                });
            }

            if (options.add) {
                todosArray.push(dictValue);
                createDictAndWriteToFile(todosArray);
            }
            else if (options.delete) {
                createDictAndWriteToFile(todosArray);
            }
            else if(options.update) {
                todosArray.push(dictValue);
                createDictAndWriteToFile(todosArray);
            } else if (options.markdone) {
                dictValue.status = "done";
                todosArray.push(dictValue);
                createDictAndWriteToFile(todosArray);
            }
        });        
    });

program.parse();


function createDictAndWriteToFile(todosArray) {
    let dict = {"todos": todosArray}
    var dictstring = JSON.stringify(dict);
    fs.writeFile("todos.json", dictstring, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Write to file successful");
        }
        return;
    });
}