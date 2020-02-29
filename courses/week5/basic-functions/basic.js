// 1. Why we need functions?
function add(a, b) { // a, b parameters, function scope
    var c = a + b;
    return c;
}
console.assert(typeof add === 'function');
console.assert(add(1, 2) === 3); // 1,2 are argumments
console.assert(add(1, 2, 3) === 3); // third params ignored by add
// Question:What happens if we are calling add(1)?



// 2. Function expression
// returns undefined when no return is made
var f = function(){
    // console.log('2. Function expression')
};
console.assert(f() === undefined);

// 3. Function anonymous - we will learn more in future about it
let fnAnonymous = () => {};
console.assert(fnAnonymous() === undefined);

// arguments - array representing all passed arguments
function addAll() {
    var sum = 0; // function scope
    for (let i = 0, j = arguments.length; i < j; i++) { // i, block scope
        sum += arguments[i];
    }
    return sum;
}
console.assert(addAll(1, 2, 3) === 6);


// returning references to objects created by functions
f = function(){
    return { p1: 1 }
};
console.assert(f().p1 === 1);


// inner functions used to write code top-down
function g() {
  var a = 1;
  g1(); // function definitions are hoisted (used/called before declaration)
  g2(a);
  function g1() {} // can use a
  function g2(x) {} // use x, preferred
}


// Function arguments by value
let myNumber = 20;
let fnByValue = (myNumber) => {
    myNumber = 10;
    console.log('fnByValue:', myNumber)
}
fnByValue(myNumber);
console.log('global:', myNumber)

// Function arguments by reference - object

let car = {
    name: 'dacia',
    number: 10
};
let changeCarNumber = (car, number) => {
  car.number = number
}
console.log('before:', car)
changeCarNumber(car, 888);
console.log('after:', car)

// Function arguments by reference: array exemple
let carArray = [2,6,8,3];
let updateCarArray = (carArray, index, newValue) => {
  carArray[index] = newValue;
}
console.log('before:', carArray)
updateCarArray(carArray, 0, 888);
console.log('after:', carArray)