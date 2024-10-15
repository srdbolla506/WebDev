/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

var todosList = [];

class Todo {

    constructor(text, index) {
        this.text = text;
        this.index = index;
    }

    static add(todo) {
        todosList.push(todo);
    }

    static remove(indexOfTodo) {
        todosList.splice(indexOfTodo, 1);
    }

    static update(index, updatedTodo) {
        todosList[index] = updatedTodo;
    }

    static getAll() {
        return todosList;
    }

    static get(indexOfTodo) {
        return todosList[indexOfTodo];
    }

    static clear() {
        todosList = [];
    }
}

module.exports = Todo;


// // Sample test
// let todo1 = new Todo("Wake up early", 0);
// Todo.add(todo1);
// console.log(Todo.getAll());

// let todo2 = new Todo("Get to work", 1);
// Todo.add(todo2);
// console.log(Todo.getAll());

// todo2.text = "Complete work";
// Todo.update(1, todo2);
// console.log(Todo.getAll());

// Todo.remove(1);
// console.log(Todo.getAll());

// console.log(Todo.get(0));

// Todo.clear()
// console.log(Todo.getAll());

