function Food(ingrediente, cantitate) {
  this.ingrediente = ingrediente;
  this.cantitate = cantitate;
}

Food.prototype.cook = function () {
  console.log('cook')
}

Food.prototype.eat = function () {
  console.log('eat')
}

function Pizza(ingrediente, cantitate) {
  Food.call(this, ingrediente, cantitate);
}
Pizza.prototype = Object.create(Food.prototype)

Pizza.prototype.eat = function () {
  console.log('cu mana')
}








