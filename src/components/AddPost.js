import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (postTitle === "" || postBody === "") {
      alert("Please fill in all the fields");
    }

    // sending data to parent component through props.handler
    props.addPostHandler({ title: postTitle, body: postBody });

    // clear the fields
    setPostTitle("");
    setPostBody("");

    // navigate back to the list of posts
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Post</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Post title</label>
          <input
            type="text"
            name="title"
            placeholder="Add post title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          ></input>
        </div>
        <div className="field">
          <label>Post content</label>
          <textarea
            name="body"
            placeholder="Add post content"
            rows="4"
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="ui button violet">Save Post</button>
      </form>
    </div>
  );
};

export default AddPost;
