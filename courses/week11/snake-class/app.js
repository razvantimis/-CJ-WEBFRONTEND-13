
// aici luam div-ul pentru a pune fiecare parte din sarpe in el
const containerMap = document.querySelector('.container-map')

// cream un game
const game = new Game(containerMap);

// pornim jocul
game.start();

// // sa executi un cod in caz de game over
// game.addGameOverEvent(function () {
//   console.log('game over')
// });




