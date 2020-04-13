

//1. prima data luam id din url
const postId = window.location.search.substring(4, 10)
//2. facem request la server ca sa aducem post dupa id luat
const fetchApi = new FetchApi('http://localhost:3000');

// async await
async function displaySinglePost() {
  const postServer = await fetchApi.getPostById(postId);

  // convertim post de la server la Post de pe front
  const post = new Post(
    postServer.id,
    postServer.author,
    postServer.date,
    postServer.title,
    postServer.text
  );

  const postContainer = document.getElementById('post-container');

  const postDOM = post.display();

  postContainer.appendChild(postDOM);

}
displaySinglePost();



// promise
// fetchApi.getPostById(postId).then(function (postServer) {

//   const post = new Post(
//     postServer.id,
//     postServer.author,
//     postServer.date,
//     postServer.title,
//     postServer.text
//   );

//   //3. Afisam postul
//   const postContainer = document.getElementById('post-container');

//   const postDOM = post.display();

//   postContainer.appendChild(postDOM);
// }
// );




