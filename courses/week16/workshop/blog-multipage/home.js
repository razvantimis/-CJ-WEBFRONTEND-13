
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
