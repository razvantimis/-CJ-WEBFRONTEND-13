function Food(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width || 20;
  this.height = height || 20;
  this.color = color || 'green';
}

Food.prototype.init = function (map) {
  if (this.foodDom) {
    this.foodDom.remove();
  }

  const div = document.createElement('div');
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.backgroundColor = this.color;

  div.style.position = 'absolute';
  this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
  this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;

  div.style.left = this.x + 'px';
  div.style.top = this.y + 'px';

  map.appendChild(div);


  this.foodDom = div;
}

function Pizza(x, y, width, height, color) {
  Food.call(this, x, y, width, height, color)
  this.size = "xxxl"
}


Pizza.prototype.init = function (map) {
  Food.prototype.init.call(this, map);

  const img = document.createElement('img');
  img.src = "https://toppng.com/public/uploads/preview/slice-sticker-just-stickers-pizza-slice-cartoon-11562909292fb4udrqmoe.png";
  img.width = this.width;
  img.style.backgroundColor = "#ccc"

  this.foodDom.appendChild(img);
}