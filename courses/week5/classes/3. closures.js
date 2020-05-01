var count = 0;

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var makeAdd5 = makeAdder(5);
var add7 = makeAdder(7);

count += makeAdd5(2);
count += add7(2);

// deep closure

let count = 0;
const makeAdderArrow = x => y => z => z + x + y;

const makeAdderFn = function (x) {
  return function InnerOne(y) {
    return function InnerTwo(z) {
      return z + x + y;
    }
  }
}

let makeAdd5 = makeAdderFn(5);
let add5_7 = makeAdd5(7);
console.log(add5_7(10))
