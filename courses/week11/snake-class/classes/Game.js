function Game(containerMap) {
  this.containerMap = containerMap;
  this.speed = 300;
}
Game.prototype.start = function () {
  this.snack = new Snake(20, 20, 'green', this.containerMap);
  this.food = new Food(this.containerMap);
  this.food.show();
  this.run();
  this.snack.bindKey();
}

Game.prototype.run = function () {
  const self = this;

  const intervalId = setInterval(function () {
    self.snack.move();

    // daca snake head se intersecteaza cu food
    // food
    const snakeHead = self.snack.body[0];

    const snakeX = snakeHead.x * self.snack.width;
    const snakeY = snakeHead.y * self.snack.height;
    const foodX = self.food.top;
    const foodY = self.food.left;

    const diffX = Math.abs(snakeX - foodX)
    const diffY = Math.abs(snakeY - foodY)

    if (diffX < self.food.width & diffY < self.food.height) {
      // 1. crestem sanke
      const lastBodyPart = self.snack.body[self.snack.body.length - 1];
      self.snack.body.push({
        x: lastBodyPart.x - 1,
        y: lastBodyPart.y,
        color: 'yellow'
      })

      // 2. stergem food
      self.food.removeDOM();
      self.food = new Food(self.containerMap);
      self.food.show();

      // 3. crestem speed
      self.speed -= 10;

      clearInterval(intervalId);
      self.run();
    }

    // daca iese din map


  }, self.speed);
}

Game.prototype.addEvent = function (eventName, eventCallback) {

}