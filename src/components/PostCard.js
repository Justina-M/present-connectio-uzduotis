import React from "react";
import { Link } from "react-router-dom";
import postImg from "../images/img-placeholder.png";

const PostCard = (props) => {
  const { id, title, body } = props.post;

  return (
    <div className="ui raised card">
      <div className="image">
        <img src={postImg} alt="" class="ui image"></img>
      </div>
      <div className="content">
        {/* to pass data to PostDetails component (from one route to another) use Link component and inlcude state prop with the data, which need to be passed */}
        <div className="header text-uppercase">{title}</div>
        <div className="description">{body}</div>
      </div>
      <div className="extra content">
        <Link to={`/posts/${id}`} state={{ post: props.post }}>
          <button className="ui button fluid violet">Read the post</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
