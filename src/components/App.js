import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";
import "./App.css";
import Header from "./Header";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";

function App() {
  const ENDPOINT_POSTS = "https://jsonplaceholder.typicode.com/posts";

  // using react hook useState and setting initial value to be [] for posts
  const [posts, setPosts] = useState([]);

  // function to get all posts from API and return fetched data
  const retrievePosts = async () => {
    const response = await axios.get(ENDPOINT_POSTS);

    return response.data;
  };

  const addPostHandler = async (post) => {
    const request = {
      userId: 10,
      id: uuid(),
      ...post,
    };

    // to POST newly created post to the API
    const response = await axios.post(ENDPOINT_POSTS, request);

    console.log(response.data);

    setPosts([...posts, { id: uuid(), ...post }]);

    // should be like this, but all the newly added data to the API gets the same ID
    // setPosts([...posts, response.data]);
  };

  // using react hook useEffect, which fires functions inside right before the element is rerendered (when dependency (posts) value changes)
  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await retrievePosts();
      if (allPosts) setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          {/* passing data to child component by using props */}
          <Route path="/" element={<PostList posts={posts} />} />
          {/* getting data from child component using handler function */}
          <Route
            path="/add"
            element={<AddPost addPostHandler={addPostHandler} />}
          />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
