import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="container p-0 my-4">
      <div className="login-content-wrapper">
        <h2 className="login-heading">Login to your account</h2>
        <p>
          In order to use the editing and rating capabilities of TMDB, as well
          as get personal recommendations you will need to login to your
          account. If you do not have an account, registering for an account is
          free and simple. <Link to="/">Click here</Link> to get started.
        </p>
        <p>
          If you signed up but didn't get your verification email,{" "}
          <Link to="/">click here</Link> to have it resent.
        </p>
        <form>
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-login">
            Login
          </button>
          <button className="btn btn-reset">Reset password</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
