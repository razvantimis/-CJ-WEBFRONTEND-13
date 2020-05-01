const makeAdderFn = function (x) {
  const age = 23;
  return function InnerOne(y) {
    return function InnerTwo(z) {
      return z + x + y + age;
    }
  }
}

let makeAdd5 = makeAdderFn(5);
let add5_7 = makeAdd5(7);
console.log(add5_7(10))