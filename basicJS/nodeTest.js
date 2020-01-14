function foo1() {
    console.log("floo1");
}

function foo2(callback) {
    console.log("foo2");
    callback();
}

foo2(foo1);