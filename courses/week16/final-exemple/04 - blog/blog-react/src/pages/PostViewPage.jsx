import React from 'react';

class PostViewPage extends React.Component {
  render() {
    return (
      <div className="single-post">
        <div className="post-header">
          <h1 className="post-title">{this.props.post.title}</h1>
          <p className="post-date">{this.props.post.date}</p>
        </div>
        <p className="post-description">
          {this.props.post.text}
        </p >
        <button onClick={() => this.props.onEditButtonClick(this.props.post)}>Edit</button>
        <button onClick={this.props.onBack}>Back</button>
      </div>
    )
  }
}

export { PostViewPage }