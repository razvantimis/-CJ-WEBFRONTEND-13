import React from 'react';
import { FetchApi } from '../classes/FetchApi';
import { Post } from '../components/Post/Post';
import { PostViewPage } from './PostViewPage';
import { PostEditPage } from './PostEditPage';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchApi = new FetchApi('http://localhost:3000');

    this.state = {
      posts: [],
      currentView: 'post-list',
      selectedPost: null,
    }

  }

  componentDidMount() {
    this.displayPosts();
  }

  async displayPosts() {
    const listPost = await this.fetchApi.fetchPosts();
    this.setState({ posts: listPost })
  }

  handleViewButtonClick = (post) => {
    this.setState({
      currentView: 'post-view',
      selectedPost: post
    })
  }


  handleEditButtonClick = (post) => {
    this.setState({
      currentView: 'post-edit',
      selectedPost: post
    })
  }

  renderView() {
    const {
      currentView,
      selectedPost
    } = this.state;

    switch (currentView) {
      case 'post-list':
        return this.renderPostList();
      case 'post-view':
        return (<PostViewPage post={selectedPost}></PostViewPage>)
      case 'post-edit':
        return (<PostEditPage post={selectedPost}></PostEditPage>)
    }
  }

  renderPostList() {
    return this.state.posts.map(post => (
      <Post
        key={post.id}
        post={post}
        onViewButtonClick={this.handleViewButtonClick}
        onEditButtonClick={this.handleEditButtonClick}
      >
      </Post>
    ))
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        {this.renderView()}
      </div>
    )
  }
}

export { HomePage }