/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

    constructor() {
        this.setResult(undefined);
    }

    setResult(resultValue) {
        this.result = resultValue;
    }

    getResult() {
        return this.result;
    }

    add(number) {
        this.setResult(this.result + number);
    }

    subtract(number) {
        this.setResult(this.result - number);
    }

    multiply(number) {
        this.setResult(this.result * number);
    }

    divide(number) {
        this.setResult(this.result / number);
    }

    clear() {
        this.setResult(0);
    }

    
    calculate(expressionValue) {
        let expressionString = expressionValue.replace(/\s+/g, '');
        return eval(expressionString);
    }

}

module.exports = Calculator;


// Sample test

// let evalExpression = eval('4*(4 / 9 + (9 - 3    )        *1)')
// console.log(evalExpression);

// const calcObj = new Calculator();
// calcObj.setResult(2);
// calcObj.add(2);
// console.log(calcObj.getResult());

// calcObj.multiply(4);
// console.log(calcObj.getResult());

// calcObj.subtract(3);
// console.log(calcObj.getResult());

// calcObj.divide(2);
// console.log(calcObj.getResult());

