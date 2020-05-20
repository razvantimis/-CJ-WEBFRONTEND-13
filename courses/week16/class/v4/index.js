const appDOM = document.getElementById('app');

function Post() {
  return (
    <div>
      <h1>Title1</h1>
      <p>content1</p>
    </div>
  )
}

// const posts = [Post(), Post()]
// const myApp = React.createElement("div", null, posts);
function App() {
  return (
    <div>
      <Post />
      <Post />
    </div>
  )
}



ReactDOM.render(<App />, appDOM)





