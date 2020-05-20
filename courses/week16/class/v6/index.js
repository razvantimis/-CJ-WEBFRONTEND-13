
function Post() {
  const myStyle = {
    marginTop: "10px"
  }
  // <div style="margin-top: 10px"></div>
  return (
    <div className="post" style={myStyle}>
      <h1>Title1</h1>
      <p>content1</p>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
      </div>
    )
  }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)





