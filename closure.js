var globalVar = 1;
function aFunc() {
    globalVar = 2;
}
aFunc();
console.log(globalVar);