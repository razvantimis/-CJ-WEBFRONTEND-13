import { Post } from './Post.js'

class FetchApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    // 1. facem request la server
    // `${this.baseUrl}/posts` este la fel cu  this.baseUrl + '/posts
    const response = await fetch(this.baseUrl + '/posts', { method: 'GET' });
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
    /*
      //v2: face la fel ca map
      const posts = [];
      for(let idx=0; idx<postsJson.length; idx++){
        const { author, id, title, text, date } = postsJson[idx];

        const post = new Post(
                      id,
                      author,
                      title,
                      text,
                      date,
                    );

        posts.push(post);
      }
      // v3: item = postsJson[idx];
      // postsJson = [ {id, title, ..}, {id, title, ...}]
      // item = {id, title, ..}

      const posts = [];
      postsJson.forEach((item)=> {
          const post = new Post(
                      item.id,
                      item.author,
                      item.title,
                      item.text,
                      item.date,
                    );

        posts.push(post);
       })

    */

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
    /*
      // le fel ca mai sus, doar ca nu folosim Destructuring
       const postServer = await response.json(); // {id, title ...}
       return new Post(
         postServer.id,
         postServer.author,
         postServer.title.length == 0 ? "No title" : postServer.title,
         postServer.text,
         postServer.date,
       );
       */

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

export { FetchApi }