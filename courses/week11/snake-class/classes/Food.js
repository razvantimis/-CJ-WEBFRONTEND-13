function Food(containerMap) {
  this.containerMap = containerMap;
  this.width = 20;
  this.height = 20;
  this.color = "blue";
}

Food.prototype.show = function () {
  // facem mancarea
  const foodDOM = this.createFoodDOM();

  // obtinem lungimea si inaltimea containarului nostru
  const mapWidth = this.containerMap.getBoundingClientRect().width;
  const mapHeight = this.containerMap.getBoundingClientRect().height;

  //  x si y sunt doua cordonate random in interiorul containarului
  this.x = Math.floor(Math.random() * mapHeight);
  this.y = Math.floor(Math.random() * mapWidth);


  // setam pozitia absolut cu cordonatele aferente
  foodDOM.style.position = "absolute";
  foodDOM.style.top = `${this.x}px`;
  foodDOM.style.left = `${this.y}px`;

  // salvam pe contextul obiectului, ca mai tarziu sa-l putem sterge, vezi in metoda removeDOM
  this.foodDOM = foodDOM;

  // il adaugam in containerMap
  this.containerMap.appendChild(foodDOM);
}

Food.prototype.removeDOM = function () {
  this.foodDOM.remove();
}

Food.prototype.createFoodDOM = function () {
  const div = document.createElement('div');
  div.style.backgroundColor = this.color;
  div.style.width = `${this.width}px`;
  div.style.height = `${this.height}px`;
  return div;
}
