import { MyComment } from './Comment'
import { Post } from './Post'
export class FetchApi {
  constructor(baseServerUrl) {
    this.baseServerUrl = baseServerUrl;
  }

  async getPosts() {
    const response = await fetch(`${this.baseServerUrl}/posts`);
    const postsServer = await response.json();
    const posts = postsServer.map(postServer => new Post(
      postServer.id,
      postServer.author,
      postServer.date,
      postServer.title,
      postServer.text
    ));
    return posts;
  }

  async getPostById(postId) {
    const response = await fetch(`${this.baseServerUrl}/posts/${postId}`);
    const postServer = await response.json();
    return postServer;
  }

  async getCommentsByPostId(postId) {
    const response = await fetch(`${this.baseServerUrl}/posts/${postId}/comments`);
    const commentsServer = await response.json();
    const listComment = [];
    for (let idx = 0; idx < commentsServer.length; idx++) {
      const commentServer = commentsServer[idx];
      const comment = new MyComment(commentServer.id, commentServer.user, commentServer.text);
      listComment.push(comment);
    }
    return listComment;
  }

  async addComment(postId, userName, commentText) {
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
    const comment = new MyComment(commentServer.id, commentServer.user, commentServer.text);
    return comment;
  }
}




