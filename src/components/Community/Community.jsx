import React from "react";
import "./Community.css";
import { Link } from "react-router-dom";


const Community = () => {
  return (
    <>
      <div className="container p-0">
        <div className="community section_wrapper">
          <div className="content_wrapper ">
            <div className="section ">
              <div className="section_header">
                <h2>Join Today</h2>
              </div>

              <div className="section_content">
                <div className="column-1">
                  <p>
                    Get access to maintain your own &nbsp;
                    <em>custom personal lists</em>,
                    <em>track what you've seen</em> and search and filter for &nbsp;
                    <em>what to watch next</em>—regardless if it's in theatres,
                    on TV or available on popular streaming services like
                    Netflix, Hotstar, and Amazon Prime Video.
                  </p>
                  <p className="button">
                    <Link
                      to="/signup"
                      className="rounded background_color border_color purple"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>

                <div className="column-2">
                  <ul>
                    <li>Enjoy TMDB ad free</li>
                    <li>Maintain a personal watchlist</li>
                    <li>
                      Filter by your subscribed streaming services and find
                      something to watch
                    </li>
                    <li>Log the movies and TV shows you've seen</li>
                    <li>Build custom lists</li>
                    <li>Contribute to and improve our database</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
