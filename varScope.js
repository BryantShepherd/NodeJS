var a = 123;
if (true) {
    var a = 456;
}
// variable can be initialized again
console.log("Initialize in if: " + a) 

//work-around
var b = 123;
if (true) {
    (function() {
        var b = 456;
    })
}
console.log("Initialize in function: " + b)