// exemple 1
function add(a, b) { // a, b parameters, function scope
    var c = a + b; // local variable, block scope
    return c;
}

// Question: console.log(c); // is c defined ?
// window.c === c


// https://tylermcginnis.com/javascript-visualizer/
// https://www.youtube.com/watch?v=Nt-qa_LlUH0
// execution context
var a = 10;
function setNumber() {
    var a;
    a = 20;
}
console.log('before a = ', a)
setNumber()
console.log('after a = ', a)

// why we use let and const
// -- no hoisting
function fn() {
    if (1 === 1) {
        let a = 10;
    }
    console.log(a);
}
fn()



