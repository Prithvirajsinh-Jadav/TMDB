import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className=" customNavBar darkBlue d-flex  ">
        {/* <div className="container">
          <div className="row">
            <ul>
              <li>
                <a href="/">Navbar</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="container ">
          <div className="subMedia">
            <nav className="navbar navbar-expand-lg   ">
              <a className="navbar-brand" href="/">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="unknown error"
                  className="d-flex align-items-center"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon text-white">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>

              <div
                className="collapse navbar-collapse custom-navbar-class"
                id="navbarSupportedContent"
              >
                <div>
                  <ul className="navbar-nav mr-auto  ">
                    <li className="nav-item nav-movies ">
                      <a className="nav-link  " href="/">
                        Movies
                      </a>
                      <div className="movie-items ">
                        <ul className="navbar-nav">
                          <li className="nav-item ">
                            <a className="nav-link  " href="/">
                              Popular
                            </a>
                          </li>
                          <li>
                            <a className="nav-link  " href="/">
                              Now Playing
                            </a>
                          </li>
                          <li>
                            <a className="nav-link  " href="/">
                              Upcoming
                            </a>
                          </li>
                          <li>
                            <a className="nav-link  " href="/">
                              Top Rated
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item nav-tv">
                      <a className="nav-link  " href="/">
                        TV Shows
                      </a>

                      <div className="tv-items ">
                        <ul className="navbar-nav ">
                          <li className="nav-item ">
                            <a className="nav-link  " href="/">
                              Popular
                            </a>
                          </li>
                          <li>
                            <a className="nav-link  " href="/">
                              Now Playing
                            </a>
                          </li>
                          <li>
                            <a className="nav-link  " href="/">
                              Upcoming
                            </a>
                          </li>
                          <li>
                            <a className="nav-link  " href="/">
                              Top Rated
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link  " href="/">
                        Popular
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link  " href="/">
                        More
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="navbar-nav mr-auto  ">
                    <li className="nav-item active">
                      <a className="nav-link  " href="/">
                        <i className="fa-solid fa-plus "></i>
                      </a>
                    </li>
                    <li className="nav-item active nav-lan">
                      <a className="nav-link  language" href="/">
                        EN
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link  " href="/">
                        Login
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link  " href="/">
                        Join TMDB
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  nav-mag" href="/">
                        <i className="fa-solid fa-magnifying-glass"></i>

                        {/* https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
