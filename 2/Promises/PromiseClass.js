
// Creating my own Promise class in the similar way the javascript Promise class works
// The creation of Promise class is in progress - not completed yet

class PromiseClass {
   
    constructor(someParameterFunction) {
        this.someParameterFunction1 = someParameterFunction;
    }

    someParameterFunction1(...parameters) {
        if (parameters.count > 1) {
            if (parameters[0] != null) {
                parameters[0]();
            } else {
                parameters[1]();
            }
        } else {
            parameters[0]();
        }
    }


    then(...parameters ) {
        someParameterFunction1(parameters);
    }
}





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

