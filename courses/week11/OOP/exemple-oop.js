function Animal(color, atac) {
  this.color = color;
}

Animal.prototype.eat = function () {
  console.log('eat')
}
Animal.prototype.move = function () {
  console.log('move')
}
function Bird(color, sound) {

  // apelam functia Animal cu contextul 
  Animal.call(this, color);


  console.log(this.atac);
  // la fel cu asta
  // this.color = color;
  // this.move = function () {
  //   console.log('move')
  // }
  this.sound = sound;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.fly = function () {
  console.log('fly')
}

Bird.prototype.eat = function () {
  console.log('fly and eat')
}

Bird.prototype.move = function () {
  console.log('fly move')
}

Bird.isFly = function () {
  console.log('check if fly')
}
// este globala
function isFlyBird() {
  console.log('check if fly')
}


const animal1 = new Animal('red')
const bird1 = new Bird('blue', 'cirip')

const listAnimale = [animal1, bird1]

for (let idx = 0; idx < listAnimale.length; idx++) {
  listAnimale[idx].move();
}

