import React from 'react';
import './Post.css'

function Post(props) {

  return (
    <div className="single-post">
      <div className="post-header">
        <h1 className="post-title">{props.post.title}</h1>
        <p className="post-date">{props.post.date}</p>
      </div>
      <p className="post-short-description">
        {props.post.text.substring(0, 100)}...
      </p >
      <button onClick={() => props.onViewButtonClick(props.post)}>View</button>
      <button onClick={() => props.onEditButtonClick(props.post)}>Edit</button>
    </div>
  )
}

export { Post }