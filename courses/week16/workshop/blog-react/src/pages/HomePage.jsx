import React from 'react';
import { FetchApi } from '../classes/FetchApi';
import { Post } from '../components/Post/Post';

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const fetchApi = new FetchApi('http://localhost:3000');
    fetchApi.getPosts().then(this.updatePosts)
  }

  updatePosts = (posts) => {
    this.setState({ posts: posts })
  }

  handleViewButton = (post) => {
    console.log('view post', post);
    // this.setState({
    //   selectedPost: post,
    //   currentPage: 'view-post.html'
    // })
  }


  render() {
    const posts = this.state.posts
    const postCmps = posts.map(post => {
      return (
        <Post
          key={post.id}
          post={post}
          onViewButtonClick={this.handleViewButton}
        ></Post>
      )
    })
    return (
      <div className="home-page">
        {postCmps}
      </div>
    );
  }
}