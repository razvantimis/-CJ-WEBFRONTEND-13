const appDOM = document.getElementById('app');

// versiune - react
// function Post() {
//   const post1Title = React.createElement('h1', null, "Post1")
//   const post1Content = React.createElement('p', null, "Text post")
//   const post1 = React.createElement('div', null, post1Title, post1Content)
//   return post1
// }

// const posts = [Post(), Post()]
// const myApp = React.createElement("div", null, posts);

// ReactDOM.render(myApp, appDOM)

// versiune dom
function Post() {
  const title = document.createElement('h1')
  title.innerText = "Post1"
  const content = document.createElement('p')
  content.innerText = "Content"

  const post = document.createElement('div');

  post.appendChild(title);
  post.appendChild(content);

  return post;


}

const posts = [Post(), Post()]

const myApp = document.createElement('div');
posts.forEach(post => {
  myApp.appendChild(post);
})
appDOM.appendChild(myApp)





