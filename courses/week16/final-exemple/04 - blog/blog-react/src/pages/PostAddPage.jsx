import React from 'react';
import { FetchApi } from '../classes/FetchApi';

class PostAddPage extends React.Component {

  constructor(props) {
    super(props);

    this.fetchApi = new FetchApi('http://localhost:3000');

    this.state = {
      postTitle: '',
      postText: '',
    }
  }

  handleTitleChange = (event) => {
    const title = event.target.value;
    this.setState({ postTitle: title })
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    this.setState({ postText: text })
  }

  handleSave = (event) => {
    event.preventDefault();

    this.fetchApi.addPost({
      title: this.state.postTitle,
      text: this.state.postText,
    }).then(() => {
      this.props.onBack();
    })


  }

  render() {
    const {
      postTitle,
      postText
    } = this.state;
    return (
      <form>
        <input
          name="title"
          placeholder="Title"
          value={postTitle}
          onChange={this.handleTitleChange}
        >
        </input>
        <input
          name="text"
          placeholder="Text"
          value={postText}
          onChange={this.handleTextChange}
        ></input>
        <button type="submit" onClick={this.handleSave}>Save</button>
      </form>
    )
  }
}

export { PostAddPage }