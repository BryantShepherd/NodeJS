// imediately execute function, this is called ANONYMOUS function
(function foo(){
    console.log('foo was executed');
})();

function printHello() {
    console.log("Hello from func");
}

// the var will override the function
var printHello = function() {
    console.log("hello from var");
}

printHello();

