
// aici luam div-ul pentru a pune fiecare parte din sarpe in el
const containerMap = document.querySelector('.container-map')

const snack = new Snake(20, 20, 'green', containerMap);
const food = new Food(containerMap);
food.show();
snack.run();
snack.bindKey();

