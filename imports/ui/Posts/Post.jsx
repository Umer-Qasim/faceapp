import React from "react";

export const Post = (props) => {
  return (
    <article className="post">
      <div className="post-user">
        <img src={props.url} className="post-img" alt="" />
        <h4>{props.user}</h4>
        <small>{props.date}</small>
      </div>
      <p>{props.text}</p>
    </article>
  );
};
