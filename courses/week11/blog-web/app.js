// post, comment
// aici cream un obiect cu ajutorul clasei Post

const fetchApi = new FetchApi('http://localhost:3000')

async function displayPosts() {
  const postsServer = await fetchApi.getPosts();

  const listPost = [];
  for (let i = 0; i < postsServer.length; i++) {
    const postServer = postsServer[i];
    const post = new Post(
      postServer.id,
      postServer.author,
      postServer.date,
      postServer.title,
      postServer.text
    );

    listPost.push(post)
  }

  // afisam posturile in HTML
  for (let i = 0; i < listPost.length; i++) {
    // obtinem reprezentarea postului din HTML
    const postNode = listPost[i].displayShort();
    document.getElementById('listOfPost').appendChild(postNode);
  }
}
displayPosts();


// callback with promise
// function callbackDisplayPosts(postsServer) {
//   const listPost = [];
//   for (let i = 0; i < postsServer.length; i++) {
//     const postServer = postsServer[i];
//     const post = new Post(
//       postServer.id,
//       postServer.author,
//       postServer.date,
//       postServer.title,
//       postServer.text
//     );

//     listPost.push(post)
//   }


//   // afisam posturile in HTML
//   for (let i = 0; i < listPost.length; i++) {
//     // obtinem reprezentarea postului din HTML
//     const postNode = listPost[i].displayShort();
//     document.getElementById('listOfPost').appendChild(postNode);
//   }
// }

// fetchApi.getPosts().then(callbackDisplayPosts);

