const appDOM = document.getElementById('app');

function Post() {
  return (
    <div>
      <h1>Title1</h1>
      <p>content1</p>
    </div>
  )
}

// function App() {
//   return (
//     <div>
//       <Post />
//       <Post />
//     </div>
//   )
// }

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



ReactDOM.render(<App />, appDOM)





