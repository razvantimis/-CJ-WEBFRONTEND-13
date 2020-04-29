/* --- ES6 part2 ---
 1. recap - prototype, this
 2. static method
 3. array
 4. Destructuring
    4.1 Destructuring Object
    4.2 Destructuring Arrays
    4.2 Destructuring Nested Object
    4.2 Destructuring Rename
 5. Enhanced Object Literals
 6. Spread operator / Function Rest parameters
 7. Promise async/await

 */

//  2. static method

class Food {
  static print() {
    // nu avem this
    console.log('printez')
  }
}

Food.print()

// 3. array

const arrays = [2, 'razvan', { name: 'alex', age: 23 }, false, null, undefined]

// const newArrays = arrays.map(function (item) {
// v1: if (item) {
//   return true
// } else {
//   return false
// }
// v2: return item ? true : false;
// v3: return !!item;
// })

const newArrays = arrays.map(item => !!item);

// 4. Destructuring

// object
const person = {
  name: 'razvan',
  age: 20
}

const name = person.name;
// sunt egale
const { name } = person;

// default
const { name = "test" } = person;

// rename
const { name: firstName } = person;

// nested

const person = {
  name: {
    firstName: 'razvan',
    lastName: 'test'
  },
  age: 20
}

// v1: 
const firstName = person.name.firstName;
// sunt egale
// v2
const { name: { firstName } } = person;

// 4.2 Destructuring Arrays

const arrays = [2, 'razvan', { name: 'alex', age: 23 }, false, null, undefined]
// unu la unu cu pozitia din array
const [firstElement, name, obj] = arrays;

const obj = arrays[2]; // al 3 lea element

// firstElement = 2, restArray = ['razvan', { name: 'alex', age: 23 }, false, null, undefined]
const [firstElement, ...restArray] = arrays;
// const [...restArray, lastElement] = arrays; nu merge

// const [firstDiv] = document.querySelectorAll('div')

// se foloseste pe array-uri mici
const person = ['razvan', 23];
// v1
const [name, age] = person;
// v2
const name = person[0]
const age = person[1]

// 5. Enhanced Object Literals

const name = "razvan";
const age = "razvan";
// es5
const person = {
  name: name,
  age: age
}

// es6
const person = {
  name,
  age
}


//  6. Spread operator / Function Rest parameters

// 6.1 arrays
const arrays = [2, 'razvan', { name: 'alex', age: 23 }, false, null, undefined]

// clone es5
const newArrays = [3, 2, 'razvan', { name: 'alex', age: 23 }, false, null, undefined, 2]

// clone es6
const newArrays = [...arrays]

// mai adaugam elemente, ...arrays - adauga fiecare element in newArrays
const newArrays = [100, ...arrays, 999]
// rest array - ce ramane din array
const [firstElement, ...restArray] = arrays;

// 6.1 objects

const person = {
  name: "razvan",
  age: 23
}

// es5
const person2 = Object.create(person)
// clone 
const person2 = { ...person }

// Function Rest parameters
function print(...parameters) {
  console.log(parameters)// [1, 2, 5, 'test', 'test3', 34]

  // console.log('3', '4', 4, 67, 56, 100)
  // console.log(age)
}
print(1, 2, 5, 'test', 'test3', 34)

// 
function printPerson(name, age) {
  console.log(name)
  console.log(age)
}
const person = ['razvan', 23, 34, 56, 'test']

printPerson(...person) //echivalent printPerson(person[0], person[1])  

// ex 2
// ...person = [{
//   name: "razvan",
//   age: 23
// }]
const person = {
  name: "razvan",
  age: 23
} // []
// person = {}

function printPerson({ ...personParam }) { // { name }
  personParam.name = "alex"
  personParam.age = 88;

  return personParam;
}

console.log(printPerson(person))
console.log(person)

//  7. Promise async/await

// v1 - es5
fetchData() // pornim masina de spalat
  .then((array) => {
    // cand e gata
    console.log(array)
  })
  .catch((err) => {
    // daca sa stricat ceva
    console.log(err)
  }).finally(() => {
    console.log('se executa tot timpul')
  })

// v2 - es6
async function main() {
  try {
    const array = await fetchData(10);
    console.log(array);
  } catch (err) {
    // daca sa stricat
    console.log(err)
  } finally {
    console.log('se executa tot timpul')
  }
}

async function fetchData(size) {
  // throw new Error('sa stricat')
  if (size < 0) {
    throw new Error('Size >= 0')
    if (size < -1000) {

      if (size < -10000) {
        return false;
      }
    }
  }

  return [1, 2, 3]
}

// exemplu return
function isValidAge(age) { // 23 , -10
  // linie cu line se executa codul
  if (age < 0) { // 23 < 0 = false, -10< 0 = true
    return false // se returneaza
  }
  return true;
  // nu se mai exeuta
  const age = 23;
}

const isValid = isValidAge(39)
console.log(isValidAge(23))
console.log(isValidAge(-10))


// array
const person = {
  name: "razvan",
  age: 23
}
const age = 23;
function test() {

}
const array = [person, age, test, '23', 34, true]
