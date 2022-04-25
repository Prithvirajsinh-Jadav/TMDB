import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showClassToggle = () => {
    const data = document.getElementById("navbarSupportedContent");
    data.classList.toggle("show");
  };
  return (
    <>
      <div className=" customNavBar darkBlue  d-flex ">
        <div className="container custom-navbar">
          <div className="subMedia">
            <nav className="navbar darkBlue navbar-expand-lg ">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="unknown error"
                  className="d-flex align-items-center"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={showClassToggle}
              >
                <span className="navbar-toggler-icon d-flex align-items-center justify-content-center">
                  <i className="fa fa-bars text-white" aria-hidden="true"></i>
                </span>
              </button>

              <div
                className="collapse navbar-collapse custom-navbar-class darkBlue"
                id="navbarSupportedContent"
              >
                <div>
                  <ul className="navbar-nav mr-auto  ">
                    <li className="nav-item nav-movies ">
                      <span className="nav-link">Movies</span>
                      <div className="movie-items ">
                        <ul className="navbar-nav">
                          <li className="nav-item hover-bg">
                            <Link className="nav-link " to="/movie/popular">
                              Popular
                            </Link>
                          </li>
                          <li className="nav-item hover-bg">
                            <Link
                              className="nav-link "
                              to="/movie/now_playing"
                            >
                              Now Playing
                            </Link>
                          </li>
                          <li className="nav-item hover-bg">
                            <Link
                              className="nav-link "
                              to="/movie/upcoming"
                            >
                              Upcoming
                            </Link>
                          </li>
                          <li className="nav-item hover-bg">
                            <Link
                              className="nav-link "
                              to="/movie/top_rated"
                            >
                              Top Rated
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item nav-tv">
                      <span className="nav-link">TV Shows</span>

                      <div className="tv-items ">
                        <ul className="navbar-nav ">
                          <li className="nav-item hover-bg">
                            <Link className="nav-link  " to="/tv/popular">
                              Popular
                            </Link>
                          </li>
                          <li className="nav-item hover-bg">
                            <Link className="nav-link  " to="/tv/airing_today">
                              Airing Today
                            </Link>
                          </li>
                          <li className="nav-item hover-bg">
                            <Link className="nav-link  " to="/tv/on_the_air">
                              On TV
                            </Link>
                          </li>
                          <li className="nav-item hover-bg">
                            <Link className="nav-link  " to="/tv/top_rated">
                              Top Rated
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="navbar-nav mr-auto  ">
                    <li className="nav-item ">
                      <span className="nav-link  " to="/">
                        <i className="fa-solid fa-plus "></i>
                      </span>
                    </li>
                    <li className="nav-item  nav-lan">
                      <span className="nav-link  language" to="/">
                        EN
                      </span>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link  " to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link  " to="/signup">
                        Join TMDB
                      </Link>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link  nav-mag" to="/">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
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
