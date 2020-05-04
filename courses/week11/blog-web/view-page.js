

//1. prima data luam id din url
const postId = window.location.search.substring(4, 100).trim()
//2. facem request la server ca sa aducem post dupa id luat
const fetchApi = new FetchApi('http://localhost:3000');


async function sendComment() {
  const userName = document.getElementById('user-name').value;
  const commentText = document.getElementById('comment-text').value;
  const comment = await fetchApi.addComment(postId, userName, commentText);

  console.log(comment);
  // afisam commentul in HTML
  const containerComments = document.querySelector('.comment-list');
  const commentDOM = comment.render();
  containerComments.appendChild(commentDOM);


}

const buttonSend = document.getElementById('comment-send');

buttonSend.addEventListener('click', sendComment);

// async await
// afiseaza postul cu commentarile lui
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

  // aducem commentarile 
  const comments = await fetchApi.getCommentsByPostId(postId);

  for (let idx = 0; idx < comments.length; idx++) {
    // fiecare comment la post
    post.addCommentToList(comments[idx]);
  }

  //3. Afisam postul
  const postContainer = document.getElementById('post-container');

  const postDOM = post.display();

  postContainer.appendChild(postDOM);

}
displaySinglePost();



// promise with callback
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




