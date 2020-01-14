function longRunningOperation(callback) {
    setTimeout(callback, 3000);
}

function webRequest(request) {
    console.log('starting a long operation for request:', request.id)
    longRunningOperation(() =>
        console.log('ending a long operation for request:', request.id)
    ); // lambda expression
}

webRequest({id: 1})
console.log("User ID 2");
webRequest({id: 2})