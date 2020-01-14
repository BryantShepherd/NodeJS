/*Whenever we have a function defined inside another function, 
the inner function has access to the variables declared in the 
outer function.*/
var globalVar = 1;
function aFunc() {
    globalVar = 2;
}
aFunc();
// console.log(globalVar); 

function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar(){
        console.log(variableInOuterFunction);
    }

    bar();
}

outerFunction("Hello Closure!");

function outerFunctionWithReturn() {
    var outer = 3;
    return function(){
        console.log(outer);
    }
}

var innerFunc = outerFunctionWithReturn("Hello closure!");
innerFunc();
