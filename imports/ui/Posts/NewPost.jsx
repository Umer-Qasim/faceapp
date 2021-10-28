import React, { useState } from "react";
import { PostsCollection } from "../../api/Posts";

export const NewPost = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    PostsCollection.insert({
      user: Meteor.user().emails[0].address,
      text: text.trim(),
      createdAt: new Date(),
    });

    setText("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        className="post-text"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="post-btn">
        Add Post
      </button>
    </form>
  );
};
