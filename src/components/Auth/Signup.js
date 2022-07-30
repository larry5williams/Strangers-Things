import React, { useState, useEffect } from "react";
import { fetchRequest } from "../../helpers.js";

const Signup = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRequest(
      "https://strangers-things.herokuapp.com/api/2204-ftb-et-web-pt/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: user.username,
            password: user.password,
          },
        }),
      }
    )
      .then((res) => setToken(res.data.token))
      .catch((err) => console.error(err));
  };

  useEffect(() => {}, []);

  console.log("this is our token", token);
  console.log("this is our user state", user);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          username
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="username"
          value={user.username || ""}
          placeholder="myusername"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          password
        </label>
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          placeholder="your password"
          name="password"
          value={user.password || ""}
          id="exampleFormControlTextarea1"
        />
      </div>
      <button type="submit" className="w-50 btn btn-lg btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signup;
