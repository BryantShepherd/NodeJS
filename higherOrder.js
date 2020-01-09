/*Since JavaScript allows us to assign functions to variables, we can pass functions to other functions. Functions that
take functions as arguments are called higher-order functions. A very common example of a higher-order function is
setTimeout.*/

// setTimeout(function(){
//     console.log('2000 ms have passed')
// }, 2000)

function foo() {
    console.log('2 seconds have passed');
}

setTimeout(foo, 2000);