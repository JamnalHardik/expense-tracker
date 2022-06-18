import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container w-50 pt-5">
      <h3 className="text-center pb-3">Sign up and start tracking</h3>
      <div className="mb-3">
        <input
          type="Name"
          className="form-control"
          id="name"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          className="form-control"
          id="repassword"
          placeholder="Re-Enter Password"
        />
      </div>
      <div className="text-center d-grid pb-3">
        <button className="btn btn-primary">Sign Up</button>
      </div>
      <span>
        Already have an account? <Link to="/">Log In</Link>
      </span>
    </div>
  );
};

export default Signup;
