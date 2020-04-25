function Snake(width, height, color, containerMap) {
  this.width = width;
  this.height = height;
  this.containerMap = containerMap;
  this.direction = 'down'

  /* Snake-ul nostru este format din mai multe div-uri 
     Fiecare find afisat la o pozitie - x si y in containerul nostru
  */
  this.body = [
    {
      x: 14,
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

/* Snake-ul nostra sa se miste, de fiecare daca cand apelam move, 
   el isi va muta tot corpul in directia care este data in - this.direction -
*/
Snake.prototype.move = function () {
  /*Cum isi mutat corpul?
   Logica este asa, fiecare partea de corpul lui o va urmari pe cealalta.
   Iteratile:
    1. this.body[3] care este { x: 11, y: 10 } va devini this.body[2] = { x: 12, y: 10}
    2. this.body[2] care este { x: 12, y: 10 } va devini this.body[1] = { x: 13, y: 10}
    3. this.body[1] care este { x: 13, y: 10 } va devini this.body[0] = { x: 14, y: 10}
  */
  for (let idx = this.body.length - 1; idx > 0; idx--) {
    const bodyPart = this.body[idx];
    const bodyPartNext = this.body[idx - 1];
    bodyPart.x = bodyPartNext.x;
    bodyPart.y = bodyPartNext.y;
  }

  /* 
   Doar capul snake-ului va fi mutat in functie de directia, restul corpului urmareste capul
   De exemplu: 
   Daca avem direction = 'down' atunci this.body[0] care este capul va deveni { x: 15, y: 10 }
  */
  const headBody = this.body[0];
  switch (this.direction) {
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
  // apelam this.render(); care afiseaza partilelor care formeaza snake-ul in DOM
  this.render();

}
// aici afisam Snake-ul nostru, sunt mai multe div-uri
Snake.prototype.render = function () {
  // stergem prima data, patile care formau snake-ul vechi
  for (let idx = 0; idx < this.body.length; idx++) {
    const domPart = this.body[idx].domPart;
    if (domPart) {
      domPart.remove();
    }
  }

  // aici parcurgem fiecare parte din corpul sanke-ului
  for (let idx = 0; idx < this.body.length; idx++) {
    const color = this.body[idx].color;
    const x = this.body[idx].x;
    const y = this.body[idx].y;

    // functia renderBodyPart, este statica, ea se apeleaza folosind Sanke.renderBodyPart
    const domPart = Snake.renderBodyPart(this.width, this.height, color, x, y);
    this.body[idx].domPart = domPart;

    this.containerMap.appendChild(domPart);
  }
}
// avem o functie statica, este o functie normala doar ca este atasata de Snack
Snake.renderBodyPart = function (width, height, color, x, y) {
  // In interior functilor statice nu avem this
  // Pentru ca nu exista un context
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
    console.log('event.keyCode', event.keyCode)
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