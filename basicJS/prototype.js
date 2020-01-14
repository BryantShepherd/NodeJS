/*When you read a property on an object (for example, foo.bar reads the property bar from foo), JavaScript
checks that this property exists on foo. If not, JavaScript checks if the property exists on foo.__proto__ and so on till
__proto__ itself is not present. If a value is found at any level, it is returned. Otherwise, JavaScript returns undefined*/
var v1 = {}
v1.__proto__.bar = 123;
console.log(v1.bar);

function v2(){};
v2.prototype.bar = 123;

var c2 = new v2();
c2.bar = 789;
console.log(c2.__proto__ === v2.prototype);
console.log(c2.bar);

var c3 = new v2();
console.log(c2.bar + " " + c3.bar);
v2.prototype.bar = 456;

console.log(c2.bar + " " + c3.bar);