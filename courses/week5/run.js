let count = 0;

const makeAdderFn = function (x) {
    return function (y) {
        return function (z) {
            return z + x + y;
        }
    }
}
const makeAdderArrow = x => y => z => z + x + y;

let makeAdd5 = makeAdderFn(5);
let add5_7 = makeAdd5(7);
console.log(add5_7(10))