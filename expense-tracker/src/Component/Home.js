import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <h1>Expense Tracker</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            aliquam qui natus odio dolores ea corporis accusantium temporibus
            incidunt sint cum nobis esse ducimus facere, fugit, error
            perspiciatis animi ab.
          </p>
        </div>
        <div className="col">
          <h3 className="text-center pb-3">Login to track expenses</h3>
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
          <div className="text-center d-grid pb-3">
            <button className="btn btn-primary">Login</button>
          </div>
          <span>
            Don't have an account? <Link to="signup">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
