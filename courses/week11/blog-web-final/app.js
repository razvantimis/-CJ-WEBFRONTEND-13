// aici cream un obiect cu ajutorul clasei Post
const fetchApi = new FetchApi('http://localhost:3000')
async function displayPosts() {

  const listPost = await fetchApi.fetchPosts();
  const postConatiner = document.querySelector('.post-container')
  // afisam posturile in HTML
  for (let i = 0; i < listPost.length; i++) {
    // obtinem reprezentarea postului din HTML
    const postNode = listPost[i].displayShort();
    postConatiner.appendChild(postNode);
  }

}
displayPosts();