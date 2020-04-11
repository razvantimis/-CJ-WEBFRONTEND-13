// functie constructor - clasa cu ajutor ei face obiect de tip Post
// este ca o macheta cu ajutor carei face mai multe obiecte
function Post(id, author, date, title, text) {
  this.id = id
  this.author = author;
  this.title = title;
  this.text = text;
  this.date = date;
  this.commentList = [];
}
// creaza reprezentare unei post in HTML
Post.prototype.display = function () {


  const containerListComment = document.createElement('div');
  containerListComment.classList.add('comment-list')

  // parcurgem lista de comentari
  for (let i = 0; i < this.commentList.length; i++) {
    const comment = this.commentList[i];

    const commentNode = comment.render();
    containerListComment.appendChild(commentNode);

  }

  const containerPost = document.createElement('div');
  containerPost.classList.add('post')

  containerPost.innerHTML = `
    <h1>${this.title}</h1>
    <p> ${this.text}</p>
    `
  containerPost.appendChild(containerListComment)
  return containerPost;
}

// adauga commentariu in memory
Post.prototype.addCommentToList = function (comment) {
  this.commentList.push(comment);
}


function Comment(id, user, text) {
  this.id = id;
  this.user = user;
  this.text = text;
}

// render nu este nume default, se poate pune orice
// De exemplu la Post am schimba in display
// creaza reprezentare unui Comment in html
Comment.prototype.render = function () {
  const containerComment = document.createElement('div');
  containerComment.setAttribute("id", this.id)
  containerComment.innerHTML = `
    <span>${this.user}</span>
    <b>${this.text}</b>
    `
  return containerComment;
}