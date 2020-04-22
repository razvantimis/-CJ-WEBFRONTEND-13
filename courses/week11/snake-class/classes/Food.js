function Food(containerMap) {
  this.containerMap = containerMap;
}
Food.prototype.show = function () {
  const div = this.createDiv();

  div.style.position = "absolute";
  div.style.top = 10;
  div.style.left = 10;

  // il adaugam in map
  this.containerMap.appendChild(div);
}
Food.prototype.createDiv = function () {
  const div = document.createElement('div');
  div.style.backgroundColor = "yellow";
  div.style.width = "20px";
  div.style.height = "20px";
  return div;
}
