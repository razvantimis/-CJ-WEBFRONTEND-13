const appDOM = document.getElementById('app');

function Post(props) {
  console.log(props)
  // props.title = "post3434" , sunt readonly, nu poti modifica
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
      <Post title="post1" />
      <Post title="post2" />
    </div>
  )
}



ReactDOM.render(<App />, appDOM)





