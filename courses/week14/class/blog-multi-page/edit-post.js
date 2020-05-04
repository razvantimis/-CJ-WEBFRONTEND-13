//1. prima data luam id din url
const postId = window.location.search.substring(4, 100).trim()
const fetchApi = new FetchApi("http://localhost:3000")

const postEditButton = document.getElementById('postEditButton');
const inputTitle = document.getElementById('postTitle');
const postForm = document.getElementById('postForm');

// versiune 2
// postForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // codul de salvare
// })


postEditButton.addEventListener('click', function (event) {

  const newTitle = inputTitle.value;
  // update post
  fetchApi.updatePost(postId,
    {
      title: newTitle,
      author: 'razvan'
    }
  ).then((post) => {
    // redirect to view-post.html
    location.href = `./view-post.html?id=${post.id}`;
  })
});

// initializare form
async function initSinglePostForm() {
  // 1. post de la server
  const post = await fetchApi.getPostById(postId);
  inputTitle.value = post.title;
  // inputTitle.setAttribute('value', post.title)
}

initSinglePostForm();