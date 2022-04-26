import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetRecommendations } from "../../api";
import ShimmerRecommendation from "./../ShimmerMovieDetail/ShimmerRecommendation";

const TvRecommendationCard = ({ id }) => {
  const [recommendationData, setRecommendationData] = useState([]);

  const [isScroll, setIsScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const scrollHandler = (e) => {
    setIsScroll(e.target.scrollLeft < 200);
  };

  useEffect(() => {
    setRecommendationData([]);

    const getData = async () => {
      await GetRecommendations(id, "tv").then((response) =>
        setRecommendationData(response.data.results)
      );
      setIsLoading(true);
    };

    getData();
    setIsLoading(false);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="recommendation-section container p-0">
        <section className="recommendation-content">
          <div className="section-heading">
            <h3>Recommendations</h3>
          </div>

          <div className="scroll-wrapper position-relative">
            <div
              className={"scroll-content " + (isScroll ? "" : "should_fade")}
              onScroll={scrollHandler}
            >
              {!isLoading ? (
                <ShimmerRecommendation />
              ) : (
                <div className="column-content ">
                  {recommendationData.length !== 0 ? (
                    recommendationData.map((recommendationMovie) => {
                      return (
                        <div
                          className="recommendation-card"
                          key={recommendationMovie.id}
                          onClick={scrollToTop}
                        >
                          <div className="image_content ">
                            <Link
                              to={`/tv/details/${recommendationMovie.id}`}
                              title={recommendationMovie.name}
                              alt={recommendationMovie.name}
                            >
                              <img
                                src={`https://www.themoviedb.org/t/p/w250_and_h141_face${recommendationMovie.backdrop_path}`}
                                alt={recommendationMovie.title}
                              />

                              <div className="meta-data">
                                <span className="release_date">
                                  <svg
                                    className="calender"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      id="calendar"
                                      d="M15,18.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1A.5.5,0,0,1,15,18.5ZM14.5,22h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,22Zm0-8h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,14Zm4,8h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,22Zm-8-4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,10.5,18Zm0,4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,10.5,22Zm12-8h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,22.5,14Zm0,4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,22.5,18Zm-4,0h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,18Zm0-4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,14ZM27,7V26a2.00006,2.00006,0,0,1-2,2H7a2.00006,2.00006,0,0,1-2-2V7A2.002,2.002,0,0,1,7,5V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,9,6.5v-1A.5.5,0,0,1,9.5,5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V5A2.002,2.002,0,0,1,27,7ZM25.00146,26l-.00109-14H7V26Z"
                                    />
                                  </svg>
                                  {new Date(
                                    recommendationMovie.first_air_date
                                  ).toLocaleDateString("en-IN")}
                                </span>
                                <span className="d-flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="recommendation-icon "
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="recommendation-icon"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="recommendation-icon"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </span>
                              </div>
                            </Link>
                          </div>
                          <p className="movie-heading d-flex justify-content-between">
                            <Link
                              className="title"
                              to={`/tv/details/${recommendationMovie.id}`}
                              title={recommendationMovie.name}
                              alt={recommendationMovie.name}
                            >
                              <bdi>{recommendationMovie.name}</bdi>
                            </Link>
                            <span className="vote_average">
                              {Math.floor(
                                recommendationMovie.vote_average * 10
                              )}
                              %
                            </span>
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <p>
                      We don't have enough data to suggest any movies. You can
                      help by rating movies you've seen.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TvRecommendationCard;
