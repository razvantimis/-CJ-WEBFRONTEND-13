function Food() {

}


Food.prototype.bindKey = function () {
  console.log(this)

  setInterval(() => {
    console.log(this);
  }, 1000)
}


const food1 = new Food();