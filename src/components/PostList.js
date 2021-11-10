import React from "react";
import PostCard from "./PostCard";

const PostList = (props) => {
  // getting data from parent component through props
  const renderPostList = props.posts.map((post) => {
    return <PostCard post={post} />;
  });

  return <div className="ui celled list">{renderPostList}</div>;
};

export default PostList;
