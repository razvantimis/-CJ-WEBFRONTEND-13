// 1. object
const obj1 = {
  color: 'red',
  name: 'toy',
  show: () => {
    console.log(this)
  },
  address: {
    name: 'ss',
    number: 12
  }
}
obj1.show()

// 2. class

class Car {
  constructor(color) {
    this.color = color
  }
}
// function Car(color) {
//   this.color = color;
// }


const car1 = new Car('red')
const car2 = new Car('blue')

// 3. proto

class Car {
  constructor(color) {
    this.color = color
  }
  show() {
    console.log(this)
  }
}

// function Car(color) {
//   this.color = color;
// }
// Car.prototype.show = () => {
//   console.log(this)
// }


const car1 = new Car('red')
console.log(car1)
const car2 = new Car('blue')

// 3. static method

// function Car(color) {
//   this.color = color;
// }

// Car.prototype.show = () => {
//   console.log(this)
// }
// Car.show1 = function () {
//   console.log('show')
// }
class Car {
  constructor(color) {
    this.color = color
  }
  show() {
    console.log(this)
  }

  static show1() {
    console.log(this);
  }
}

Car.show1()
// Math.random()

const car1 = new Car('red')
console.log(car1)

const car2 = new Car('blue')

// 3. chain proto

class Car {
  constructor(name) {
    this.name = name;
    this.run = function () {
      console.log('Car.constructor run')
    }
  }
  run() {
    console.log('run')
  }
}

class Dacia extends Car {
  constructor(color) {
    super(color);
    this.run = function () {
      console.log('Dacia.constructor run')
    }
  }
  run() {
    console.log('merge')
  }
}

const dacia1 = new Dacia('logan')
dacia1.run();

