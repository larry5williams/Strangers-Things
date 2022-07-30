import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home.js";
import Signup from "./components/Auth/Signup.js";
import Posts from "./components/Posts/Posts.js";
import AddPosts from "./components/Posts/AddPosts.js";
import DeletePosts from "./components/Posts/DeletePosts.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/add" element={<AddPosts />} />
      <Route path="/posts/remove" element={<DeletePosts />} />
    </Routes>
  </BrowserRouter>
);
