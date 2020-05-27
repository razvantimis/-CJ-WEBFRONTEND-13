//1. prima data luam id din url
const postId = window.location.search.substring(4, 100).trim()

// 2. aducem postul
const fetchApi = new FetchApi("http://localhost:3000")
const containerSinglePost = document.getElementById('single-post');

async function displaySinglePost() {
  const post = await fetchApi.getPostById(postId);
  const postDOM = post.render(true);

  containerSinglePost.appendChild(postDOM)
}

displaySinglePost();
