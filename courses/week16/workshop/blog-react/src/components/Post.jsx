import React from 'react';

export function Post(props) {
  return (
    <div className="post">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}