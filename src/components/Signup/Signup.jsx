import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container p-0 my-4 ">
      <div className="sign-up-wrapper d-flex ">
        <div className="sign-up-left-section w-20 ">
          <h2>Left section</h2>
        </div>
        <div className="sign-up-right-section w-80 d-flex">
          <div className="sign-up-right-content-wrapper">
            <h2 className="signup-heading">Right section</h2>
            <p>
              Signing up for an account is free and easy. Fill out the form
              below to get started. JavaScript is required to to continue.
            </p>
            <form>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" id="username" />
              </div>
             
              <div className="mb-3">
                <label for="password" className="form-label">
                Password (4 characters minimum)
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <label for="confirm-password" className="form-label">
                Password Confirm
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>

              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
              <button type="submit" className="btn btn-login">
                Submit
              </button>
              <button type="submit" className="btn btn-reset">
                Cancel
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
