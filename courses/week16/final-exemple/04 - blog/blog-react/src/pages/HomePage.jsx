import React from 'react';
import { FetchApi } from '../classes/FetchApi';
import { Post } from '../components/Post/Post';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.fetchApi = new FetchApi('http://localhost:3000');

    this.state = {
      posts: []
    }


  }
  componentDidMount() {
    this.displayPosts();
  }

  async displayPosts() {
    const listPost = await this.fetchApi.fetchPosts();
    this.setState({ posts: listPost })
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            text={post.text}
            date={post.date}>
          </Post>
        ))}
      </div>
    )
  }
}

export { HomePage }