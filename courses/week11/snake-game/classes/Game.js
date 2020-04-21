function Game(containerDOM) {
  this.food = new Food();
  this.pizza = new Pizza();
  this.snake = new Snake();
  this.map = containerDOM;
  this.speed = 150;
  this.score = 0;
}

Game.prototype.init = function () {

  this.food.init(this.map);
  this.pizza.init(this.map);
  this.snake.init(this.map);

  this.bindKey();
  this.runSnake([this.food, this.pizza], this.map);
  this.showScore(this.score);
}

Game.prototype.runSnake = function (foods, map) {
  const self = this;
  const timerId = setInterval(function () {
    self.snake.move(foods, map, function () {
      self.speed -= 10;
      clearInterval(timerId);
      self.runSnake([self.food, self.pizza], self.map);

      self.score += 1;
      self.showScore(self.score);

    });
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
  }, this.speed)
}

Game.prototype.showScore = function () {

  const existScore = document.querySelector('.score');
  if (existScore) {
    existScore.innerText = `Score: ${this.score}`;
  } else {
    const div = document.createElement('div');
    div.classList.add('score')
    div.style.position = 'absolute';
    div.style.fontSize = '25px';
    div.innerText = `Score: ${this.score}`;

    this.map.appendChild(div);

  }


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


