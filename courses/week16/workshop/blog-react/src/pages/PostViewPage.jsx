import React from 'react';
import { withRouter } from "react-router";

function PostViewPage(props) {
  console.log(props)
  return (
    <div>
      Post View
      {props.children}
    </div>
  )
}

export const PostViewPageWithRouter = withRouter(PostViewPage)
/*
- React API Context
- https://reactjs.org/docs/higher-order-components.html

- https://developer.mozilla.org/en-US/docs/Web/API/Location
- https://developer.mozilla.org/en-US/docs/Web/API/History_API
*/