import React from 'react';
import './Post.css'

function Post(props) {

  return (
    <div className="single-post">
      <div className="post-header">
        <h1 className="post-title">{props.title}</h1>
        <p className="post-date">{props.date}</p>
      </div>
      <p className="post-short-description">
        {props.text.substring(0, 100)}...
      </p >
      <button onClick={props.onViewButtonClick}>View</button>
    </div>
  )
}

export { Post }