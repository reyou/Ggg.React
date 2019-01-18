import React from "react";
export default function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li id={post.id} key={post.id}>
          {post.title} - {post.content}
        </li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
