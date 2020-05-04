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


}