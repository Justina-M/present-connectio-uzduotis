import React from "react";

const PostCard = (props) => {
  const { title, body } = props.post;

  return (
    <div className="item">
      <div className="content">
        <i className="star alternate icon"></i>
        <div className="header">{title}</div>
        <div>{body}</div>
      </div>
    </div>
  );
};

export default PostCard;
