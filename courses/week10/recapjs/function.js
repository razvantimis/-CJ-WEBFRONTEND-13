// parameter

function displayComments(comments, color) {

}
const comments = [];
const color = "red";
displayComments(comments, color);

// scope - hosting
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
const addFn = makeAdderFn(10);
console(addFn(5))