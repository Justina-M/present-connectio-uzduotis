import React from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const PostList = (props) => {
  // getting data from parent component through props
  const renderPostList = props.posts.map((post) => {
    return <PostCard post={post} key={post.id} />;
  });

  return (
    <div className="ui main">
      <div className="flex-container margin-bottom">
        <h2 className="ui header">Newest Posts</h2>
        <Link to="/add">
          <button className="ui button right floated violet">
            Add New Post
          </button>
        </Link>
      </div>

      <div className="ui centered cards">{renderPostList}</div>
    </div>
  );
};

export default PostList;
