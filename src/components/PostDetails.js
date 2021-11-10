import React from "react";
import { useLocation, Link } from "react-router-dom";
import headerImg from "../images/bakery.jpg";

const PostDetails = () => {
  // use hook useLocation to get the data from location.state property
  const location = useLocation();

  const { title, body } = location.state.post;

  //   console.log(location);

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={headerImg} alt="header"></img>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{body}</div>
        </div>
      </div>
      <div>
        <Link to="..">
          <button className="ui button blue">Back to Post List</button>
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
