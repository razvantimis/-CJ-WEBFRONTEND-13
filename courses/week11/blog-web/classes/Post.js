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
    <a href="./view-post.html">View</a>
    `
  containerPost.appendChild(containerListComment)
  return containerPost;
}

// adauga commentariu in memory
Post.prototype.addCommentToList = function (comment) {
  this.commentList.push(comment);
}