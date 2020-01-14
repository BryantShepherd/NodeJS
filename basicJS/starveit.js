function fibonacci(n) {
    if (n < 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.time('timer');
setTimeout(function(){
    console.timeEnd('timer');
}, 1000); // end in 1000ms.

// this function is holding on to the JS thread, the event loop cannot call anything else and therefore the time-out is delayed
// as demonstrated.
fibonacci(44);