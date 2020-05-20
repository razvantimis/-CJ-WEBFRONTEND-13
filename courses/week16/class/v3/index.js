const appDOM = document.getElementById('app');

// versiune - react
function Post() {
  // const post1Title = React.createElement('h1', null, "Post1")
  // const post1Content = React.createElement('p', null, "Text post")
  // const post1 = React.createElement('div', null, post1Title, post1Content)

  /*
   React.createElement("div", null,  - post1
     React.createElement("h1", null, "Title1"), - post1Title
     React.createElement("p", null, "content1") - post1Content
   )
  */
  return (
    <div>
      <h1>Title1</h1>
      <p>content1</p>
    </div>
  )
}

const posts = [Post(), Post()]
const myApp = React.createElement("div", null, posts);

ReactDOM.render(myApp, appDOM)

// versiune dom
// function Post() {
//   const title = document.createElement('h1')
//   title.innerText = "Post1"
//   const content = document.createElement('p')
//   content.innerText = "Content"

//   const post = document.createElement('div');

//   post.appendChild(title);
//   post.appendChild(content);

//   return post;

// }

// const posts = [Post(), Post()]

// const myApp = document.createElement('div');
// posts.forEach(post => {
//   myApp.appendChild(post);
// })
// appDOM.appendChild(myApp)





