function Food(containerMap) {
  this.containerMap = containerMap;
  this.width = 20;
  this.height = 20;
  this.color = "blue";
}

Food.prototype.show = function () {
  const div = this.createDiv();
  const mapWidth = this.containerMap.getBoundingClientRect().width;
  const mapHeight = this.containerMap.getBoundingClientRect().height;

  const topRandom = Math.floor(Math.random() * mapHeight);
  const leftRandom = Math.floor(Math.random() * mapWidth);
  this.top = topRandom;
  this.left = leftRandom;

  div.style.position = "absolute";
  div.style.top = `${topRandom}px`;
  div.style.left = `${leftRandom}px`;

  this.foodDOM = div;
  // il adaugam in map
  this.containerMap.appendChild(div);
}

Food.prototype.removeDOM = function () {
  this.foodDOM.remove();
}
Food.prototype.createDiv = function () {
  const div = document.createElement('div');
  div.style.backgroundColor = this.color;
  div.style.width = `${this.width}px`;
  div.style.height = `${this.height}px`;
  return div;
}
