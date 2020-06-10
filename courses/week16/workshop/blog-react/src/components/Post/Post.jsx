import React from 'react';
import './Post.css'

export function Post(props) {
  const button = props.isSingle ? (
    <button>Edit</button>
  ) : (
      <button
        onClick={(event) => props.onViewButtonClick(props.post)}
      >
        View
      </button>
    );

  return (
    <div className="post" style={props.style}>
      <h1>{props.post.title}</h1>
      <p>{props.post.text}</p>
      {button}
    </div>
  )
}