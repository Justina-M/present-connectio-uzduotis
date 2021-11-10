import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { id, title, body } = props.post;

  return (
    <div className="item">
      <div className="content">
        <i className="star alternate icon"></i>
        {/* to pass data to PostDetails component (from one route to another) use Link component and inlcude state prop with the data, which need to be passed */}
        <Link to={`/posts/${id}`} state={{ post: props.post }}>
          <div className="header">{title}</div>
          <div>{body}</div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
