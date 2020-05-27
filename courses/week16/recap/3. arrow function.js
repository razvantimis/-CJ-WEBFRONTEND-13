// 1. arrow function - mostenesc contextul

function show() {
  console.log('show')
}

// conversie arrow
const show = () => console.log('show')
const getNumber = () => 12 // returneaza 12
console.log(getNumber())

// const getNumber2 = () => {
//   return 12;
// }

class Car {

  show() { // this = car1
    const getNumber = () => {
      // this = car1
      return 12;
    }
    console.log(getNumber())
  }
}
const car1 = new Car()