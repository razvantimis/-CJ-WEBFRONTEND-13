function FetchApi(endpoint) {
  this.endpoint = endpoint;
}



FetchApi.prototype.fetchPosts = async function () {
  const response = await fetch(`${this.endpoint}/posts`)
  const postsJson = await response.json();

  const posts = [];
  for (let idx = 0; idx < postsJson.length; idx++) {
    const postJson = postsJson[idx];
    posts.push(new Post(postJson.id, postJson.author, postJson.date, postJson.title, postJson.text))
  }
  return posts;
}

FetchApi.prototype.fetchComments = async function (postId) {
  const response = await fetch(`${this.endpoint}/posts/${postId}/comments`)
  const commentsJson = await response.json();

  const comments = [];
  for (let idx = 0; idx < commentsJson.length; idx++) {
    const commentJson = commentsJson[idx];
    comments.push(new Comment(commentJson.id, commentJson.author, commentJson.date, commentJson.text))
  }
  return comments;
}

FetchApi.prototype.fetchPostById = async function (id) {
  const response = await fetch(`${this.endpoint}/posts/${id}`)
  const postJson = await response.json();
  return new Post(postJson.id, postJson.author, postJson.date, postJson.title, postJson.text);

}