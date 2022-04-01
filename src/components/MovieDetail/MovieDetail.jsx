import React from "react";
import "./MovieDetail.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const MovieDetail = () => {
  return (
    <>
      <div className="movie-header-section">
        <div className="container-fluid">
          <div className="container d-flex text-white py-4">
            <div className="left-section ">
              <div className="poster_wrapper bg-info">
                <div className="poster ">
                  <div className="image_content">
                    <img
                      className="poster "
                      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg"
                      alt="Black Crab"
                    />
                  </div>
                </div>
                <div className="ott_offer">
                  <div className="text_wrapper">
                    <div className="movie-provider">
                      <img
                        src="https://www.themoviedb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg"
                        width="36"
                        height="36"
                        alt="Now Streaming on Netflix"
                      />
                    </div>
                    <div className="text">
                      <span>
                        <h6 className="now-streaming">Now Streaming</h6>
                        <h6 className="watch-now">
                          <a
                            className="no_click"
                            href="/"
                            title="Now Streaming on Netflix"
                          >
                            Watch Now
                          </a>
                        </h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section px-5 ">
              <div className="movie-title-section">
                <h2>
                  <a href="/">Black Crab</a>
                  <span className="release_year">(2022)</span>
                </h2>

                <div className="facts">
                  <span className="certification">R</span>

                  <span className="release">03/18/2022 (US)</span>

                  <span className="genres">
                    <a href="/genre/28-action/movie">Action</a>,&nbsp;
                    <a href="/genre/53-thriller/movie">Thriller</a>
                  </span>

                  <span className="runtime">1h 49m</span>
                </div>

                <ul className="actions">
                  <li className="chart">
                    <div className="circular_progress_bar_large">
                      <CircularProgressbarWithChildren
                        value={80}
                        styles={buildStyles({
                          pathColor: "green",
                          trailColor: "rgb(28 ,97 ,147)",
                          backgroundColor: "#032b48",
                        })}
                      >
                        <div className="circular_progress_bar_data">
                          <span>80</span>
                          <sup>%</sup>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className="text">
                      User
                      <br />
                      Score
                    </div>
                  </li>

                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </a>
                  </li>
                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </a>
                  </li>
                  <li className="play-trailer">
                    <a className="d-flex" href="/">
                      {/* <i className="fa-solid fa-play"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="fa-play"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Play Trailer
                    </a>
                  </li>
                </ul>

                <div className="header_info">
                  <h3 className="tagline">Hope burns brightest in the cold.</h3>

                  <h3>Overview</h3>
                  <div className="overview">
                    <p>
                      To end an apocalyptic war and save her daughter, a
                      reluctant soldier embarks on a desperate mission to cross
                      a frozen sea carrying a top-secret cargo.
                    </p>
                  </div>

                  <ol className="people_section">
                    <li className="profile">
                      <p>
                        <a href="/">Adam Berg</a>
                      </p>
                      <p className="character">Director, Screenplay</p>
                    </li>

                    <li className="profile">
                      <p>
                        <a href="/">Jerker Virdborg</a>
                      </p>
                      <p className="character">Novel</p>
                    </li>

                    <li className="profile">
                      <p>
                        <a href="/">Pelle Rådström</a>
                      </p>
                      <p className="character">Writer</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bill-section container">
        <section className="bill-section-content">
          <h3>Top Bill Cast</h3>
          <div className="cast-section should_fade is_fading">
            <div className="cast-scroll-section">
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
              <div className="card">
                <a href="/">
                  <img
                    class=""
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
                    alt="Noomi Rapace"
                  />
                </a>
                <p className="person-name">
                  <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
                </p>
                <p class="character-name">Caroline Edh</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieDetail;
