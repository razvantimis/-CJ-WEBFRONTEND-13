/*

1. Parameters value vs reference ;
2. Functii recursive.
3. Closures ;
4. Callback asa ca nu mi clar 100%
5. Promises / async - await exemple
6. Function call vs apply
7. As vrea sa ne arati cum ar trebui facut  corect si simplu updateGame la gamesApp si explicat procesul.


*/

import { response } from "express";

// 1. Parameters value vs reference ; 

// array ex
// array - este prin referinta
function removeItem(array, indexItem) {
  array.splice(indexItem, 1)
}

const array = [1, 2, 3];
console.log('inaite', array)

removeItem(array, 1)
// se modifica array si in exterior
console.log('dupa', array)

// object ex
const food = {
  cantitate: '1kg'
}

function addSize(obj, size) {
  obj.size = size;
  obj.type = "type";
}

// inaite 
// food = {
//   cantitate: '1kg'
// }
addSize(food, 10);
// addSize({...food}, 10); - se trimite o clona a lui food

console.log(food)
// dupa
// food = {
//   cantitate: '1kg',
//   size: 10
// }

// 2. Functii recursive.

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// fibonacci(2)
/*
1. fibonacci(2) => return fibonacci(1) + fibonacci(0)
2. fibonacci(1) => 1, fibonacci(0) => 1
3. fibonacci(2)  = 1 + 1
*/
// fibonacci(3)
/*
1. fibonacci(3) => return fibonacci(2) + fibonacci(1)
1. fibonacci(2) => return fibonacci(1) + fibonacci(0)
2. fibonacci(1) => 1, fibonacci(0) => 1
2. fibonacci(1) => 1, fibonacci(0) => 1
3. fibonacci(2)  = 1 + 1

*/

function recFn() {
  console.log(2)
  recFn();
}


// 3. Closures
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


// 4. Callback

// syncron 
function callbackFn(size) {
  console.log('callbackFn')
}


function callFn(myFn) {
  myFn(10)
}
// trimitem functia ca parametru , callbackFn
callFn(callbackFn)

document.addEventListener('click', function (event) {
  // este o functie callback
  console.log('click pe document')
});

// 5. Promises / async - await exemple

setTimeout(() => {
  console.log('se executa dupa 100 ms')
}, 100)

// facem un request la http://localhost:3000/games de GET

const url = "http://localhost:3000/games";

const promise = fetch(url)

// v1
promise.then((response) => {
  console.log('fa ceva')
  const promiseJson = response.json();
  promiseJson.then((games) => {
    console.log(games)
  })
})
// v2

const url = "http://localhost:3000/games";

const promise = fetch(url)
promise
  .then(function (response) {
    console.log('convert to json', response)
    return response.json();
  })
  .then(function (games) {
    console.log(games)
  })
  .then(data => {
    console.log('ultimul then', data)
  })
  .catch(err => {
    console.log(err)
  })

//es6 - async await

const url = "http://localhost:3000/games";

async function fetchGames() {
  try {
    const response = await fetch(url)
    // fetch options = {
    //   method: 'POST', 
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    const games = await response.json();
    console.log('ultimul then', games)
  } catch (err) {
    console.log(err)

  }
}
fetchGames();


// 6. Function call vs apply

const context = {
  name: 'razvan'
}

function print(param1, param2) {
  console.log('context', this)
  console.log('parameters', param1, param2)
}

// print(1, 2)
// print.call(context, 1, 2)

print.apply(null, [1, 2]);

print(...[1, 2])



// 7. As vrea sa ne arati cum ar trebui facut  corect si simplu updateGame la gamesApp si explicat procesul.

// 1. fiecare functie sa aiba o singura responsabilitate
// 2. Fiecare event de click le adaugi o singura data
// 3. Fiecare button cu eventul lui