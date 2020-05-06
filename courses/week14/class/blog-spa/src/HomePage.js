import { FetchApi } from './classes/FetchApi.js';

export class HomePage {
  constructor(appDOM) {
    this.appDOM = appDOM;
    this.fetchApi = new FetchApi("http://localhost:3000");
  }

  async getPostsDOM() {
    const posts = await this.fetchApi.getPosts();
    // lista de div cu postarile
    const postsDOM = posts.map(post => post.render());

    return postsDOM
  }

  render() {
    const homeDOM = document.createElement('div');
    homeDOM.classList.add('home-app');

    this.getPostsDOM().then((postsDOM) => {
      postsDOM.forEach(postDOM => {
        homeDOM.appendChild(postDOM)
      })
    });

    this.appDOM.appendChild(homeDOM);
  }
}
/*

const fetchApi = new FetchApi("http://localhost:3000")

const containerPosts = document.getElementById('posts');

async function displayPosts() {
  const posts = await fetchApi.getPosts();
  // lista de div cu postarile
  const postsDOM = posts.map(post => post.render());

  // console.log(postsDOM);
  // postsDOM.forEach(console.log)

  postsDOM.forEach(postDOM => {
    containerPosts.appendChild(postDOM)
  })
}

displayPosts();
*/