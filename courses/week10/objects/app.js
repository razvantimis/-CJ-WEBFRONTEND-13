
function Comment(id, color) {
    this.id = id;
    // this.color = color;
    this.color = color;
}
Comment.prototype.send = function () {
    console.log(this)
}



let com1 = new Comment(1, "blue")
let com2 = new Comment(2, "red")
let com3 = new Comment(3, "yellow")


