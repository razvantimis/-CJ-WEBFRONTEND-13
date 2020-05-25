
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "red"
    }
  }

  componentDidUpdate(prevProps) {
    // this.props - noile props 
    // prevProps - props ce erau inaite
    if (prevProps.id !== this.props.id) {
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    // inaite sa dispara
    console.log('Post.componentWillUnmount')
  }


  handleClick = (event) => {
    console.log('click div', event.target)
    console.log(this)
    this.setState({ color: 'green' });

    this.props.onPostClick(this.props.id)
  }

  render() {
    const myStyle = {
      marginTop: "10px",
      backgroundColor: this.state.color
    }
    return (
      <div
        key={this.props.key}
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
    this.state = {
      posts: [
        { id: 1, title: 'title1', content: 'content1' },
        { id: 2, title: 'title2', content: 'content2' },
        { id: 3, title: 'title3', content: 'content3' },
        { id: 4, title: 'title4', content: 'content4' },
      ]
    }

  }

  componentDidMount() {
    // imediat dupa afisarea ei in DOM
    console.log('componentDidMount')
    // aici putem pune promisul de fetchPost
    // fetchPosts().then(() => {
    //  this.setState()
    // })

    // document.addEventListener('scroll', (event) => {
    //   console.log(event)
    // })
  }

  componentWillUnmount() {
    // inaite sa dispara
    console.log('componentWillUnmount')
  }
  handleClick = (postId) => {
    console.log(postId);
    const posts = this.state.posts;

    const newPosts = posts.filter((post) => post.id !== postId);

    this.setState({ posts: newPosts })

  }


  render() {

    const listPost = this.state.posts
      .map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          onPostClick={this.handleClick}
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





