import React from 'react';
import { FetchApi } from './classes/FetchApi'
import { Post } from './components/Post/Post';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isAuth: false,
      currentPage: 'home.html'
    }
  }

  componentDidMount() {
    const fetchApi = new FetchApi('http://localhost:3000');
    fetchApi.getPosts().then(this.updatePosts)
  }

  componentWillUnmount() {

  }

  updatePosts = (posts) => {
    console.log(this)
    this.setState({ posts: posts })
    console.log(posts);
  }

  handleViewButton = (post) => {
    console.log('view post', post);
    this.setState({
      selectedPost: post,
      currentPage: 'view-post.html'
    })
  }

  renderView() {
    switch (this.state.currentPage) {
      case 'home.html': {
        const posts = this.state.posts
        const postCmps = posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              isAuth={this.state.isAuth}
              onViewButtonClick={this.handleViewButton}
            ></Post>
          )
        })
        return postCmps;
      }

      case 'view-post.html': {
        return (
          <div>
            <Post
              style={{ backgroundColor: 'red' }}
              post={this.state.selectedPost}
              isSingle={true}
            ></Post>
          </div>
        )
      }

    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
