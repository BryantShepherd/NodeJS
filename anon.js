var foo1 = function namedFunction() {
    console.log('foo1');
}
foo1.bar = 1;
foo1.cat = 2;
console.log(foo1);
console.log({
    a: 1,
    b: 2,
    c: 3
})
foo1();

var foo2 = function() {
    console.log('foo2');
}
foo2();

var i = new foo2();
console.log(i.foo2);
/* A programming language is said to have first-class functions if a function
can be treated the same way as any other variable in the language. JS has 
first-class functions. */