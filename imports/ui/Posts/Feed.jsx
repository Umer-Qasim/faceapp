import React from "react";

import { NewPost } from "./NewPost";
import { PostList } from "./PostList";

export const Feed = (props) => {
  return (
    <div className="feed-container">
      <NewPost />
      <hr />
      <PostList posts={props.posts} />
    </div>
  );
};
