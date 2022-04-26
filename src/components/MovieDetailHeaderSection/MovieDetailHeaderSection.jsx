import React, { useState, useEffect } from "react";
import WatchProvider from "../WatchProvider/WatchProvider";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { GetDetails } from "../../api";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg";
import ShimmerMovieHeaderDetail from "./../ShimmerMovieDetail/ShimmerMovieHeaderDetail";

const MovieDetailHeaderSection = ({ id }) => {
  const [currentMovieData, setCurrentMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCurrentMovieData({});
      const getData = async () => {
       await GetDetails("movie", id).then((response) =>
         setCurrentMovieData(response.data)
       );
      setIsLoading(true)
      }
      getData();
    setIsLoading(false);
  }, [id]);

  const pColor =
    currentMovieData.popularity >= 70
      ? "#21ce79"
      : currentMovieData.popularity >= 35 && currentMovieData.popularity < 70
      ? "#bec02d"
      : "#db2360";

  const tColor =
    currentMovieData.popularity >= 70
      ? "#204529"
      : currentMovieData.popularity >= 35
      ? "#423d0f"
      : currentMovieData.popularity !== 0
      ? "#ff000054"
      : "#565a5b";

  return !isLoading ? (
    <ShimmerMovieHeaderDetail />
  ) : (
    <>
      {
        <div className="movie-header-section">
          <div className="container-fluid position-relative p-0">
            <img
              src={
                currentMovieData.backdrop_path
                  ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${currentMovieData.backdrop_path}`
                  : ""
              }
              alt=""
              className="image-absolute"
            />
            <div className="container d-flex text-white movie-detail-responsive">
              <div className="left-section ">
                <div className="poster_wrapper ">
                  <div className="poster  ">
                    <div className="detail-image-container position-relative">
                      <img
                        className="image-hover w-100 h-100"
                        src={
                          currentMovieData.poster_path
                            ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${currentMovieData.poster_path}`
                            : defaultImage
                        }
                        alt={currentMovieData.title}
                      />
                      <div className="image-hover-background">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="expand-icon"
                          >
                            <path
                              fill="#ffffff"
                              id="fullscreen"
                              d="M13.72156,12.06732a.5.5,0,0,1-.06812.62219l-.96374.96375a.5.5,0,0,1-.6222.06811L7.89624,11.064,6.19342,12.76642a.49983.49983,0,0,1-.847-.27521L4.10779,4.67969a.49976.49976,0,0,1,.57184-.57184L12.491,5.34619a.50011.50011,0,0,1,.27527.8476L11.06378,7.896Zm5.58874,1.58594a.5.5,0,0,0,.6222.06811L24.10376,11.064l1.70282,1.70246a.49983.49983,0,0,0,.847-.27521l1.23858-7.81152a.49976.49976,0,0,0-.57184-.57184L19.509,5.34619a.50011.50011,0,0,0-.27527.8476L20.93622,7.896l-2.65778,4.17132a.5.5,0,0,0,.06812.62219Zm-6.6206,4.69348a.5.5,0,0,0-.6222-.06811L7.89624,20.936,6.19342,19.23358a.49983.49983,0,0,0-.847.27521L4.10779,27.32031a.49976.49976,0,0,0,.57184.57184l7.8114-1.23834a.50011.50011,0,0,0,.27527-.8476L11.06378,24.104l2.65778-4.17132a.5.5,0,0,0-.06812-.62219Zm13.11688.88684L24.10376,20.936,19.9325,18.27863a.5.5,0,0,0-.6222.06811l-.96374.96375a.5.5,0,0,0-.06812.62219L20.93622,24.104,19.2337,25.80621a.50011.50011,0,0,0,.27527.8476l7.8114,1.23834a.49976.49976,0,0,0,.57184-.57184l-1.23858-7.81152A.49983.49983,0,0,0,25.80658,19.23358Z"
                            />
                          </svg>
                          Expand
                        </span>
                      </div>
                    </div>

                    <WatchProvider id={id} isMovie="movie" />
                  </div>
                </div>
              </div>
              <div className="movie-header-right-section  d-flex align-items-center">
                <div className="movie-title-section">
                  <h2 className="d-flex">
                    {currentMovieData.title}{" "}
                    <span className="release_year d-flex">
                      (
                      {currentMovieData.release_date &&
                        currentMovieData.release_date.slice(0, 4)}
                      )
                    </span>
                  </h2>

                  <div className="facts">
                    <span className="certification">R</span>

                    <span className="release">
                      {currentMovieData.release_date &&
                        new Date(
                          currentMovieData.release_date
                        ).toLocaleDateString("en-IN")}
                      (IN)
                    </span>

                    <span className="genres">
                      {currentMovieData.genres &&
                        currentMovieData.genres
                          .map((genreObj) => genreObj.name)
                          .join(", ")}
                    </span>

                    <span className="runtime">
                      {currentMovieData.runtime >= 60
                        ? Math.floor(currentMovieData.runtime / 60) + "h "
                        : ""}

                      {currentMovieData.runtime % 60 < 60
                        ? (currentMovieData.runtime % 60) + "m"
                        : ""}
                    </span>
                  </div>

                  <ul className="actions">
                    <li className="chart">
                      <div className="circular_progress_bar_large">
                        <CircularProgressbarWithChildren
                          value={currentMovieData.vote_average * 10}
                          styles={buildStyles({
                            pathColor: pColor,
                            trailColor: tColor,
                            backgroundColor: "#032b48",
                          })}
                        >
                          <div className="circular_progress_bar_data d-flex">
                            <span>
                              {currentMovieData.vote_average
                                ? currentMovieData.vote_average * 10
                                : 0}
                            </span>
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
                    </li>

                    <li className="icon-list">
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
                    </li>
                    <li className="icon-list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </li>
                    <li className="icon-list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </li>
                    <li className="play-trailer d-flex">
                      <span className="play"></span>
                      Play Trailer
                    </li>
                  </ul>

                  <div className="header_info">
                    <h3 className="tagline">{currentMovieData.tagline}</h3>

                    <h3 className="overview-heading">Overview</h3>
                    <div className="overview">
                      <p>{currentMovieData.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default MovieDetailHeaderSection;
