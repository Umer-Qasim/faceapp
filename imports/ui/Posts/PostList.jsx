import React from "react";
import { Post } from "./Post";

export const PostList = (props) => {
  return props.posts.length === 0 ? (
    <h1>Seems Like its not busy recently :( </h1>
  ) : (
    props.posts.map((post) => (
      <Post
        key={post._id}
        text={post.text}
        user={post.user}
        url={Meteor.user().profile.url}
        date={post.createdAt.toLocaleString("en")}
      />
    ))
  );
};
