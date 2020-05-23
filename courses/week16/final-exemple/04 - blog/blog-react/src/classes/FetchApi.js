class FetchApi {
  constructor(apiURL) {
    this.apiURL = apiURL;
  }

  async fetchPosts() {
    const response = await fetch(`${this.apiURL}/posts`);
    const postsJson = await response.json();
    return postsJson;
  }

  async fetchComments(postId) {
    const response = await fetch(`${this.apiURL}/posts/${postId}/comments`);
    const commentsJson = await response.json();
    return commentsJson;
  }

  async fetchPostById(id) {
    const response = await fetch(`${this.apiURL}/posts/${id}`);
    const postJson = await response.json();
    return postJson;
  }

  async addComment(postId, user, text) {
    const body = JSON.stringify({
      user,
      text
    });
    const response = await fetch(`${this.apiURL}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const commentJson = await response.json();
    return commentJson;
  }
}

export { FetchApi }




