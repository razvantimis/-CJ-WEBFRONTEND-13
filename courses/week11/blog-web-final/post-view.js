async function displaySinglePost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const fetchApi = new FetchApi('http://localhost:3000');

  const post = await fetchApi.fetchPostById(postId);

  const postContainer = document.querySelector('.post-container');

  const postHtmlPresentation = post.display();
  postContainer.appendChild(postHtmlPresentation);

}

displaySinglePost();