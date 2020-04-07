// scope
var a = 10;
function setNumber() {
    var a;
    a = 20;
}
console.log('before a = ', a)
setNumber()
console.log('after a = ', a)

// closure

const makeAdderFn = function (x) {
    return function InnerOne(y) {
        return x + y;
    }
}