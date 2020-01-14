var foo = {
    bar: 123,
    "vie": 213,
    displayInfo: function() {
        console.log(this.bar + " " + this.vie);
    }
}

var objContainOtherObj = {
    firstAttr: 14,
    secondAttr: foo
}

var objContainListofObjs = {
    bar: 123,
    bas: [{
        qux: 1
    }, {
        qux: 2
    }]
}

console.log(foo.vie);

foo.bar = 3333;
console.log(foo);
foo.displayInfo();
console.log(objContainOtherObj.secondAttr)
console.log(objContainListofObjs.bas)