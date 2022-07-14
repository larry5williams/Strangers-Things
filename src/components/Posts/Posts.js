import React, { useState, useEffect } from "react";
import { fetchRequest } from "../../helpers.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("rendering to dom");
    fetchRequest(
      "https://strangers-things.herokuapp.com/api/2204-ftb-et-web-pt/posts"
    )
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.error(err));
  }, []);

  console.log("these are our posts", posts);

  return (
    <>
      {posts.length > 0 &&
        posts.map(({ cohort, title, author: { username } }) => (
          <div id={cohort} key={cohort}>
            <h1>{username}</h1>
            <p>{title}</p>
          </div>
        ))}
    </>
  );
};

export default Posts;
