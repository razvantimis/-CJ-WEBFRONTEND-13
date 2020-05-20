
function Post(props) {
  const myStyle = {
    marginTop: "10px"
  }
  console.log(props)

  return (
    <div className="post" style={myStyle}>
      <h1>{props.title}</h1>
      <p>{props.content.join(' ')}</p>
    </div>
  )
}

class App extends React.Component {
  render() {
    const content = ['text1', 'text2']
    const isShowPost = true;
    return (
      <div>
        {isShowPost ?
          (<span>Este true isShowPost</span>)
          :
          (<span>Este false isShowPost</span>)
        }
        <Post title="title1" content={content} />
        <Post title="title2" content={content} />
      </div>
    )
  }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)





