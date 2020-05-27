import React from 'react';
import { FetchApi } from './classes/FetchApi'
import { Post } from './components/Post';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const fetchApi = new FetchApi('http://localhost:3000');
    const posts = await fetchApi.getPosts();
    console.log(posts);
    this.setState({ posts: posts })
  }

  render() {
    const posts = this.state.posts
    const postCmps = posts.map(post => {
      return (
        <Post
          title={post.title}
          text={post.text}
        ></Post>
      )
    })
    return (
      <div>
        {postCmps}
      </div>
    );
  }
}

export default App;
