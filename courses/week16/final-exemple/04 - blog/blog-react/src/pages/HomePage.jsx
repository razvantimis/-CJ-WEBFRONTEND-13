import React from 'react';
import { FetchApi } from '../classes/FetchApi';
import { PostShortDescription } from '../components/PostShortDescription/PostShortDescription';
import { PostViewPage } from './PostViewPage';
import { PostEditPage } from './PostEditPage';
import { PostAddPage } from './PostAddPage';
import {
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";

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
      selectedPost: post
    }, () => {
      this.props.history.push('/home/post/view')
    })
  }

  handleAddButtonClick = () => {
    this.props.history.push('/home/post/add')
  }


  handleEditButtonClick = (post) => {
    this.setState({
      selectedPost: post
    }, () => {
      this.props.history.push('/home/post/edit')
    })
  }

  handleDeleteButtonClick = (post) => {
    this.fetchApi.deletePost(post.id).then(() => {
      this.displayPosts();
    })
  }

  handleBack = () => {
    this.props.history.push('/home')

    this.setState({ selectedPost: null })
    this.displayPosts();
  }

  handleSearch = (event) => {
    const searchString = event.target.value;
    this.displayPosts(searchString);
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
    const { selectedPost } = this.state;
    console.log(this.props.history)
    return (
      <div style={{ padding: 20 }}>
        <Switch>
          <Route exact path="/home">
            <div>
              <button onClick={this.handleAddButtonClick}>Add post</button>
              <input placeholder="search post" onChange={this.handleSearch}></input>
              {this.renderPostList()}
            </div>
          </Route>
          <Route path="/home/post/edit">
            <PostEditPage
              post={selectedPost}
              onBack={this.handleBack}
            ></PostEditPage>
          </Route>
          <Route path="/home/post/add">
            <PostAddPage
              onBack={this.handleBack}
            ></PostAddPage>
          </Route>
          <Route path="/home/post/view">
            <PostViewPage
              post={selectedPost}
              onEditButtonClick={this.handleEditButtonClick}
              onBack={this.handleBack}
            ></PostViewPage>
          </Route>

        </Switch>
      </div>
    )
  }
}

const HomePageWithRouter = withRouter(HomePage)
export {
  HomePageWithRouter as HomePage
}