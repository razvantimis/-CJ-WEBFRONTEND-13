
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "red"
    }
  }

  handleClick = (event) => {
    console.log('click div', event.target)
    console.log(this)
    this.setState({ color: 'green' })
  }

  render() {
    const myStyle = {
      marginTop: "10px",
      backgroundColor: this.state.color
    }
    return (
      <div
        className="post"
        style={myStyle}
        onClick={this.handleClick}
      >
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // aici putem pune promisul de fetchPost
    // fetchPosts().then(() => {
    //  this.setState()
    // })

  }
  render() {
    const posts = [
      { title: 'title1', content: 'content1' },
      { title: 'title2', content: 'content2' },
      { title: 'title3', content: 'content3' },
      { title: 'title4', content: 'content4' },
    ]
    const listPost = posts
      .map(post => (
        <Post
          title={post.title}
          content={post.content}
        />));

    return (
      <div>
        {listPost}
      </div>
    )
  }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)





