import { FetchApi } from './classes/FetchApi.js';

class HomePage {
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

export { HomePage }
