function Comment(id, user, text, date) {
  this.id = id;
  this.user = user;
  this.date = date;
  this.text = text;
}

// render nu este nume default, se poate pune orice
// De exemplu la Post am schimba in display
// creaza reprezentare unui Comment in html
Comment.prototype.render = function () {
  const containerComment = document.createElement('div');
  containerComment.setAttribute("id", this.id)
  containerComment.classList.add("comment");
  containerComment.innerHTML = `
      <div class="comment-header">
        <p class="comment-user">User: ${this.user}</p>
        <p class="comment-date">Date: ${this.date}</p>
      </div>

      <p class="comment-content">
        Message: ${this.text}
      </p>
    </div>
    `
  return containerComment;
}