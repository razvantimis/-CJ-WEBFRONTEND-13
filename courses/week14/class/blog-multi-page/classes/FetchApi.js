class FetchApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    // 1. facem request la server
    const response = await fetch(`${this.baseUrl}/posts`, { method: 'GET' });
    const postsJson = await response.json(); // {id, title ...}[]
    // 2. facem o mapare la Post
    const posts = postsJson.map(({ author, id, title, text, date }) => new Post(
      id,
      author,
      title,
      text,
      date,
    )
    );
    // 3. returnam
    return posts
  }

  async getPostById(postId) {
    // 1. facem request la server
    // 1. sa cautam local
    const response = await fetch(`${this.baseUrl}/posts/${postId}`, { method: 'GET' });
    const { author, id, title, text, date } = await response.json(); // {id, title ...}

    return new Post(
      id,
      author,
      title.length == 0 ? "No title" : title,
      text,
      date,
    );

  }

  async updatePost(postId, post) {
    /*
      post = {
        "title": "RazvanTest"
      }
    */
    const response = await fetch(
      `${this.baseUrl}/posts/${postId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      }
    );

    const postJson = await response.json();

    return new Post(
      postJson.id,
      postJson.author,
      postJson.title.length == 0 ? "No title" : postJson.title,
      postJson.text,
      postJson.date,
    );
  }

}