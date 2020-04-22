function Snake(width, height, color, containerMap) {
  this.width = width;
  this.height = height;
  this.containerMap = containerMap;
  this.direction = 'down'
  this.body = [
    {
      x: 13,
      y: 10,
      color: 'red'
    },
    {
      x: 13,
      y: 10,
      color: color
    },
    {
      x: 12,
      y: 10,
      color: color
    },
    {
      x: 11,
      y: 10,
      color: color
    },
  ];
}

// facem ca snake-ul nostra sa se miste
Snake.prototype.run = function () {

  const self = this;
  setInterval(function () {
    // facem update la pozitie

    // idx - 3, 2, 1
    for (let idx = self.body.length - 1; idx > 0; idx--) {
      const bodyPart = self.body[idx];
      const bodyPartNext = self.body[idx - 1];
      bodyPart.x = bodyPartNext.x;
      bodyPart.y = bodyPartNext.y;
    }

    const headBody = self.body[0];
    switch (self.direction) {
      case 'right':
        headBody.y = headBody.y + 1
        break;
      case 'left':
        headBody.y = headBody.y - 1
        break;
      case 'down':
        headBody.x = headBody.x + 1
        break;
      case 'up':
        headBody.x = headBody.x - 1
        break;

    }
    self.render();

  }, 300);
}
// aici afisam Snake-ul nostru, sunt mai multe div-uri
Snake.prototype.render = function () {
  // remove all part
  for (let idx = 0; idx < this.body.length; idx++) {
    const domPart = this.body[idx].domPart;
    if (domPart) {
      domPart.remove();
    }
  }

  // this.containerMap.innerHTML = "";
  for (let idx = 0; idx < this.body.length; idx++) {
    const color = this.body[idx].color;
    const x = this.body[idx].x;
    const y = this.body[idx].y;

    const domPart = Snake.renderBodyPart(this.width, this.height, color, x, y);
    this.body[idx].domPart = domPart;

    this.containerMap.appendChild(domPart);
  }
}
// avem o functie statica, este o functie normala doar ca este atasata de Snack
Snake.renderBodyPart = function (width, height, color, x, y) {
  const div = document.createElement('div');
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  div.style.backgroundColor = color;
  div.style.position = "absolute";
  div.style.top = `${x * width}px`
  div.style.left = `${y * height}px`;

  return div;
}

// ascultam la eventul de keypress pentru a putea schimba directia sarpelui
Snake.prototype.bindKey = function () {
  const self = this;

  document.addEventListener('keyup', function (event) {
    console.log('ddd', event.keyCode)
    switch (event.keyCode) {
      case 40: // down
        self.direction = 'down'
        break;
      case 38: // up
        self.direction = 'up'
        break;
      case 37: // left
        self.direction = 'left'
        break;
      case 39: // right
        self.direction = 'right'
        break;
    }
  })
}