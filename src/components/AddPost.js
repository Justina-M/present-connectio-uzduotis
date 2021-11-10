import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

{
  /*
class AddPost extends React.Component {
  // react hools don't work inside classes, so using state property here
  state = {
    title: "",
    body: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.body === "") {
      alert("Please fill in all the fields");
    }

    // sending data to parent component through this.props.handler
    this.props.addPostHandler(this.state);

    // clear the fields
    this.setState({ title: "", body: "" });

    console.log(this.props);

  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Post</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Post title</label>
            <input
              type="text"
              name="title"
              placeholder="Add post title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Post content</label>
            <textarea
              name="body"
              placeholder="Add post content"
              rows="4"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            ></textarea>
          </div>
          <button className="ui button blue">Save Post</button>
        </form>
      </div>
    );
  }
}
*/
}

const AddPost = (props) => {
  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (postTitle === "" || postBody === "") {
      alert("Please fill in all the fields");
    }

    // sending data to parent component through props.handler
    props.addPostHandler({ id: postId, title: postTitle, body: postBody });

    // clear the fields
    setPostId("");
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
          <label>ID</label>
          <input
            type="number"
            name="id"
            placeholder="Add post ID"
            value={postId}
            onChange={(e) => {
              setPostId(e.target.value);
            }}
          ></input>
        </div>
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
        <button className="ui button blue">Save Post</button>
      </form>
    </div>
  );
};

export default AddPost;
