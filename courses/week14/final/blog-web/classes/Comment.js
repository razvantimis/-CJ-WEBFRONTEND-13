
function MyComment(id, user, text) {
  this.id = id;
  this.user = user;
  this.text = text;
}

// render nu este nume default, se poate pune orice
// De exemplu la Post am schimba in display
// creaza reprezentare unui Comment in html
MyComment.prototype.render = function () {
  const containerComment = document.createElement('div');
  containerComment.setAttribute("id", this.id)
  containerComment.innerHTML = `
    <span>${this.user}</span>
    <b>${this.text}</b>
    `
  return containerComment;
}