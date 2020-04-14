function Food(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width || 20;
  this.height = height || 20;
  this.color = color || 'green';

  this.foodsDom;
}

Food.prototype.init = function (map) {
  if(this.foodDom){
    this.foodDom.remove();
  }
  var div = document.createElement('div');
  map.appendChild(div);
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.backgroundColor = this.color;
 
  div.style.position = 'absolute';
  this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
  this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;

  div.style.left = this.x + 'px';
  div.style.top = this.y + 'px';

  this.foodDom = div;
}