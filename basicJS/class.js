// Class definition
function someClass(){
    this.someProperty = 'some initial value';
}

// Member functions:
someClass.prototype.someMemberFunction = function() {
    this.someProperty = 'modified value'; // using 'this' is crucial
}

// Creation
var instance = new someClass();

// Usage
console.log(instance.someProperty);
instance.someMemberFunction();
console.log(instance.someProperty);

