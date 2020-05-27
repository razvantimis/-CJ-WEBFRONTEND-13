//1. prima data luam id din url


const postId = window.location.search.substring(4, 100).trim()
const fetchApi = new FetchApi("http://localhost:3000")

const postEditButton = document.getElementById('postEditButton');
const inputTitle = document.getElementById('postTitle');
const inputText = document.getElementById('postText');
const postEditForm = document.getElementById('postForm');

// versiune 2
// postForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // codul de salvare
// })

// cand se face update
postEditButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newTitle = inputTitle.value;
  const newText = inputText.value;
  // update post

  fetchApi.updatePost(postId,
    {
      title: newTitle,
      text: newText,
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
  inputText.value = post.text;
  // inputTitle.setAttribute('value', post.title)
}

initSinglePostForm();


// auth logic
const authForm = document.getElementById('auth');

authForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputUsername = document.getElementById('username');
  const inputPassword = document.getElementById('password');
  // logica de auth
  const username = inputUsername.value;
  const password = inputPassword.value;

  login(username, password)

})

function login(username, password) {
  const isAuth = username === 'admin' && password === "admin";
  if (isAuth) {
    // stergem auth form
    authForm.remove();
    // afisam postEditForm
    postEditForm.style.display = "flex";
  } else {
    alert('Username or password are wrong')
  }
}


