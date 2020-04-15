// sa facem un patrat sa se miste pe ecran


function Snack(width, height, color, containerMap) {
  this.width = width;
  this.height = height;
  this.containerMap = containerMap;
  this.direction = 'down'
  this.body = [
    {
      x: 10,
      y: 10,
      color: 'red'
    },
    {
      x: 11,
      y: 10,
      color: color
    }
  ];
}

Snack.prototype.run = function () {

  const self = this;
  setInterval(function () {
    // facem update la pozitie
    for (let idx = 0; idx < self.body.length; idx++) {
      const bodyPart = self.body[idx];

      switch (self.direction) {
        case 'right':
          bodyPart.y = bodyPart.y + 1
          break;
        case 'left':
          bodyPart.y = bodyPart.y - 1
          break;
        case 'down':
          bodyPart.x = bodyPart.x + 1
          break;
        case 'up':
          bodyPart.x = bodyPart.x - 1
          break;

      }
    }
    self.render();

  }, 1000);
}

Snack.prototype.render = function () {
  // remove all part
  // for (let idx = 0; idx < this.body.length; idx++) {
  //   const domPart = this.body[idx].domPart;
  //   if (domPart) {
  //     domPart.remove();
  //   }
  // }

  this.containerMap.innerHTML = "";
  for (let idx = 0; idx < this.body.length; idx++) {
    const color = this.body[idx].color;
    const x = this.body[idx].x;
    const y = this.body[idx].y;

    const domPart = Snack.renderBodyPart(this.width, this.height, color, x, y);
    // this.body[idx].domPart = domPart;

    this.containerMap.appendChild(domPart);
  }
}

Snack.renderBodyPart = function (width, height, color, x, y) {
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
Snack.prototype.bindKey = function () {
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
// aici luam div-ul pentru a pune fiecare parte din sarpe in el
const containerMap = document.querySelector('.container-map')
const snack = new Snack(20, 20, 'green', containerMap);

snack.run();
snack.bindKey();

