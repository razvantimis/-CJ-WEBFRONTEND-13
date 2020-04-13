function FetchApi(baseServerUrl) {
  this.baseServerUrl = baseServerUrl;
}

FetchApi.prototype.getPosts = function () {
  return fetch(`${this.baseServerUrl}/posts`).then(
    function (response) {
      return response.json()
    }
  )
}

FetchApi.prototype.getPostById = async function (postId) {
  const response = await fetch(`${this.baseServerUrl}/posts/${postId}`);
  const postServer = await response.json();
  return postServer;
}

FetchApi.prototype.getCommentsByPostId = async function (postId) {
  const response = await fetch(`${this.baseServerUrl}/posts/${postId}/comments`);
  const commentsServer = await response.json();

  const listComment = [];
  for (let idx = 0; idx < commentsServer.length; idx++) {
    const commentServer = commentsServer[idx];
    const comment = new MyComment(
      commentServer.id,
      commentServer.user,
      commentServer.text);

    listComment.push(comment);
  }

  return listComment;

}

FetchApi.prototype.addComment = async function (postId, userName, commentText) {

  const url = `${this.baseServerUrl}/posts/${postId}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userName,
      text: commentText
    })
  });

  const commentServer = await response.json();

  const comment = new MyComment(
    commentServer.id,
    commentServer.user,
    commentServer.text);

  return comment;
}