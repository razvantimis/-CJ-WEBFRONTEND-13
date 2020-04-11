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
  <div class="post-header">
  <h1 class="post-title">${this.title}</h1>
      <p class="post-date">${this.date}</p>
    </div>
    <p class="post-content">
      ${this.text}
    </p >
  `
  containerPost.appendChild(containerListComment)
  return containerPost;
}

Post.prototype.displayShort = function () {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post')

  postDiv.innerHTML = `
      <div class="post-header">
        <h1 class="post-title">${this.title}</h1>
        <p class="post-date">${this.date}</p>
      </div>
      <p class="post-short-description">
        ${this.text.substring(0, 100)}...
      </p >
      <a href="./post-view.html?id=${this.id}">View</a>
  `
  return postDiv;
}

// adauga commentariu in memory
Post.prototype.addCommentToList = function (comment) {
  this.commentList.push(comment);
}