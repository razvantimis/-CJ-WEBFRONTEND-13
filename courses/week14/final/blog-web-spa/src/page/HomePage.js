export class HomePage {
  constructor(fetchApi) {
    this.fetchApi = fetchApi;
  }

  async displayPosts() {
    const posts = await this.fetchApi.getPosts();
    // afisam posturile in HTML
    const postsDOM = posts.map(p => p.displayShort());
    const containerPost = document.createElement('div')
    containerPost.id = 'listOfPost'

    postsDOM.forEach(postDOM => {
      containerPost.appendChild(postDOM);
    })

    return containerPost;
  }

  render() {
    this.homeDOM = document.createElement('div');
    this.homeDOM.classList.add('home-page');

    this.displayPosts().then(containerPost => {
      this.homeDOM.appendChild(containerPost)
    });

    return this.homeDOM;
  }
}