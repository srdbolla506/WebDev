
//PromiseClass.js

// Created my own Promise class in a similar way the javascript Promise class works
// It's a very basic version 
// 

class PromiseClass {

    static STATE = Object.freeze({
        PENDING: "pending",
        RESOLVED: "resolved",
        REJECTED: "rejected"
    });
   
    constructor(someParameterFunction) {
        this.someParameterFunction = someParameterFunction;
        this.state = STATE.PENDING;
        this.value = undefined;
        this.callbacks = [];

        this.resolve = (value) => ({ 
            
        });

        this.reject = () => ({

        });

        try {
            this.someParameterFunction(this.resolve, this.reject);
        } catch {
            this.reject()
        }
    }

    then(...parameters) {
        console.log(parameters);
        if (parameters.length > 1) {
            var parametersModified = parameters;
            if (parameters.length > 2) {

                for (var i=2; i<parameters.length; i++) {
                    parametersModified[i] = parameters[1];
                }
            }
            this.someParameterFunction(...parametersModified);
        } else {
            this.someParameterFunction(parameters);
        }
    }
}

