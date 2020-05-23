import React from 'react';
import { FetchApi } from '../classes/FetchApi';
import { PostShortDescription } from '../components/PostShortDescription/PostShortDescription';
import { PostViewPage } from './PostViewPage';
import { PostEditPage } from './PostEditPage';
import { PostAddPage } from './PostAddPage';

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

  async displayPosts(search) {
    const listPost = await this.fetchApi.fetchPosts(search);
    this.setState({ posts: listPost })
  }

  handleViewButtonClick = (post) => {
    this.setState({
      currentView: 'post-view',
      selectedPost: post
    })
  }

  handleAddButtonClick = () => {
    this.setState({
      currentView: 'post-add',
    })
  }


  handleEditButtonClick = (post) => {
    this.setState({
      currentView: 'post-edit',
      selectedPost: post
    })
  }

  handleDeleteButtonClick = (post) => {
    this.fetchApi.deletePost(post.id).then(() => {
      this.displayPosts();
    })
  }

  handleBack = () => {
    this.setState({ selectedPost: null, currentView: 'post-list' })
    this.displayPosts();
  }

  handleSearch = (event) => {
    const searchString = event.target.value;
    this.displayPosts(searchString);
  }

  renderView() {
    const {
      currentView,
      selectedPost
    } = this.state;

    switch (currentView) {

      case 'post-view':
        return (<PostViewPage
          post={selectedPost}
          onEditButtonClick={this.handleEditButtonClick}
          onBack={this.handleBack}
        ></PostViewPage>)
      case 'post-add':
        return (<PostAddPage
          onBack={this.handleBack}
        ></PostAddPage>)
      case 'post-edit':
        return (<PostEditPage
          post={selectedPost}
          onBack={this.handleBack}
        ></PostEditPage>)
      case 'post-list':
      default:
        return (
          <div>
            <button onClick={this.handleAddButtonClick}>Add post</button>
            <input placeholder="search post" onChange={this.handleSearch}></input>
            {this.renderPostList()}
          </div>
        )
    }
  }

  renderPostList() {
    return this.state.posts.map(post => (
      <PostShortDescription
        key={post.id}
        post={post}
        onViewButtonClick={this.handleViewButtonClick}
        onEditButtonClick={this.handleEditButtonClick}
        onDeleteButtonClick={this.handleDeleteButtonClick}
      >
      </PostShortDescription>
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