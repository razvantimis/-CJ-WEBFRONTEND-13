
// aici luam div-ul pentru a pune fiecare parte din sarpe in el
const containerMap = document.querySelector('.container-map')

document.getElementById('play-again').addEventListener('click', function () {
  const game = new Game(containerMap);
  game.start();
  // sa executi un cod in caz de game over
  game.addGameOverEvent(function () {
    console.log('game over')
  });
})



