import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";

function App() {
  const LOCAL_STORAGE_KEY = "posts";

  // using react hook useState and setting initial value to be [] for posts
  const [posts, setPosts] = useState([]);

  const addPostHandler = (post) => {
    setPosts([...posts, post]);
  };

  // using react hook, which fires functions inside right before the element is rerendered when dependency (posts) value changes
  useEffect(() => {
    const retrievePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievePosts) setPosts(retrievePosts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

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
