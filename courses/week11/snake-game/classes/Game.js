function Game(containerDOM){
  this.food = new Food(); // 食物对象
  this.snake = new Snake(); //小蛇对象
  this.map = containerDOM;
}

Game.prototype.init = function () {
 
  this.food.init(this.map);
  this.snake.init(this.map);

  this.bindKey();
  this.runSnake(this.food, this.map);

}

Game.prototype.runSnake = function (food, map) {
  const self = this;
  const timerId = setInterval(function () {
    self.snake.move(food, map);
    self.snake.init(map);

    const maxX = map.offsetWidth / self.snake.width;
    const maxY = map.offsetHeight / self.snake.height;
    const headX = self.snake.body[0].x;
    const headY = self.snake.body[0].y;

    if (headX >= maxX || headX < 0) {
      clearInterval(timerId);
      alert('Game over');
    }
    if (headY < 0 || headY >= maxY) {
      clearInterval(timerId);
      alert('Game over');
    }
  }, 150)
}

Game.prototype.bindKey = function () {
  const self = this;
  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 37:
        self.snake.direction = 'left';
        break;
      case 38:
        self.snake.direction = 'top';
        break;
      case 39:
        self.snake.direction = 'right';
        break;
      case 40:
        self.snake.direction = 'bottom';
        break;
    }
  }, false)
}


