function Game(containerMap) {
  this.containerMap = containerMap;
  this.speed = 300;
}

/* Logica de intializare a jocului */
Game.prototype.start = function () {
  // facem un obiect snake
  this.snack = new Snake(20, 20, 'green', this.containerMap);
  // facem mancarea
  this.food = new Food(this.containerMap);
  this.food.show();

  // dam drumul la snake sa se miste continuu folosind setInterval
  this.run();

  // inregistram logica de schimbare a directie folosind apasarea tastelor arrow up/down/left/right 
  this.snack.bindKey();
}

Game.prototype.run = function () {
  const self = this;

  const intervalId = setInterval(function () {
    self.snack.move();

    // punem in variabila capul de la snake
    const snakeHead = self.snack.body[0];

    // cordonatele de la snake - x, y
    const snakeX = snakeHead.x * self.snack.width;
    const snakeY = snakeHead.y * self.snack.height;

    // cordonatele de la food
    const foodX = self.food.x;
    const foodY = self.food.y;

    // facem diferenta intre ele
    // Math.abs - returneaza modulul valoari
    const diffX = Math.abs(snakeX - foodX)
    const diffY = Math.abs(snakeY - foodY)

    // verificam snake head se intersecteaza cu food
    const isIntersectBetweenHeadAndFood = diffX < self.food.width & diffY < self.food.height;
    if (isIntersectBetweenHeadAndFood) {
      // 1. crestem sanke - adaugam in body, inca un obiect
      const lastBodyPart = self.snack.body[self.snack.body.length - 1];
      self.snack.body.push({
        x: lastBodyPart.x - 1,
        y: lastBodyPart.y,
        color: 'yellow'
      })

      // 2. stergem food din DOM
      self.food.removeDOM();
      // 3. Facem sa apara din nou mancarea
      self.food = new Food(self.containerMap);
      self.food.show();

      // 3. crestem speed
      self.speed -= 10;
      // resetam setInterval - prima daca il stergem dupa care rulam din nou functie care il seteaza ( run() )
      clearInterval(intervalId);
      self.run();
    }

    // daca iese din map
    // self.gameOverEventFn();

  }, self.speed);
}

// Game.prototype.addGameOverEvent = function (eventCallback) {
//   // sa salvam pe context - this
//   this.gameOverEventFn = eventCallback;
// }