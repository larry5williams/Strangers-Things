import React from "react";

const Signup = () => {
  return (
    <form>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="myusername"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="your password"
          id="exampleFormControlTextarea1"
        />
      </div>
    </form>
  );
};

export default Signup;
