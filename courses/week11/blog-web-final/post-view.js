const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const fetchApi = new FetchApi('http://localhost:3000');


async function displaySinglePost() {
  const post = await fetchApi.fetchPostById(postId);

  const postContainer = document.querySelector('.post-container');

  const postHtmlPresentation = post.display();
  postContainer.appendChild(postHtmlPresentation);

}

displaySinglePost();


async function displayComments(tabContentNode) {
  const comments = await fetchApi.fetchComments(postId);

  // parcurgem lista de comentari
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const commentNode = comment.render();
    tabContentNode.appendChild(commentNode);
  }

}


function initTabs() {
  const tab1Link = document.querySelector('.tabs-container #tab1');
  const tab2Link = document.querySelector('.tabs-container #tab2');
  const tabContentNode = document.querySelector('.comment-container .tab-content');
  tab1Link.addEventListener('click', function () {
    tab1Link.classList.add('is-active');
    tab2Link.classList.remove('is-active');

    tabContentNode.innerHTML = ""
    displayComments(tabContentNode);

  })

  tab2Link.addEventListener('click', function () {
    tab1Link.classList.remove('is-active');
    tab2Link.classList.add('is-active');
    tabContentNode.innerHTML = `
    <div class="comment-add">
        <input id="user-name" placeholder="user name" />
        <textarea
          id="comment-area"
          placeholder="write a comment"
        ></textarea>
        <button id="submit">Submit</button>
      </div>
    `;
    tabContentNode.querySelector('.comment-add #submit').addEventListener('click', function (event) {
      const user = tabContentNode.querySelector('#user-name').value;
      const text = tabContentNode.querySelector('#comment-area').value;
      fetchApi.addComment(postId, user, text);
    })

  })
  displayComments(tabContentNode);

}
initTabs();