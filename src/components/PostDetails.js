import React from "react";
import { useLocation, Link } from "react-router-dom";
import postImg from "../images/img-placeholder.png";

const PostDetails = () => {
  // use hook useLocation to get the data from location.state property
  const location = useLocation();

  const { title, body } = location.state.post;

  //   console.log(location);

  return (
    <div className="main">
      <div className="single-post_container">
        <div className="single-post__img">
          <img src={postImg} alt=""></img>
        </div>
        <div className="single-post__content">
          <h2 className="ui header text-uppercase">{title}</h2>
          <div className="margin-bottom">{body}</div>
          <div>
            <Link to="..">
              <button className="ui button violet">Back to Post List</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
