import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container p-0 my-4 ">
      <div className="sign-up-wrapper d-flex ">
        <div className="sign-up-left-section w-20 me-4">
          <div className="sign-up-left-section-content-wrapper">
            <h3 className="member-heading">Benefits of being a member</h3>

            <div>
              <ul className="benefit-content">
                <li className="d-flex flex-row">
                  <span className="check "></span> Find something to
                  watch on your subscribed streaming services
                </li>
                <li  className="d-flex flex-row">
                  <span className="check"></span> Log the movies and TV shows you
                  have watched
                </li>
                <li className="d-flex flex-row">
                  <span className="check"></span> Keep track of your favourite
                  movies and TV shows and get recommendations from them
                </li>
                <li className="d-flex flex-row">
                  <span className="check"></span> Build and maintain a personal
                  watchlist
                </li>
                <li className="d-flex flex-row">
                  <span className="check"></span> Build custom mixed lists (movies
                  and TV)
                </li>
                <li className="d-flex flex-row">
                  <span className="check"></span> Take part in movie and TV
                  discussions
                </li>
                <li className="d-flex flex-row">
                  <span className="check"></span> Contribute to, and improve the
                  information in our database
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sign-up-right-section w-80 d-flex ">
          <div className="sign-up-right-content-wrapper w-100">
            <h2 className="signup-heading">Sign up for an account</h2>
            <p>
              Signing up for an account is free and easy. Fill out the form
              below to get started. JavaScript is required to to continue.
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" id="username" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password (4 characters minimum)
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Password Confirm
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <p>
                By clicking the "Sign up" button below, I certify that I have
                read and agree to the TMDB terms of use and privacy policy.
              </p>
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
