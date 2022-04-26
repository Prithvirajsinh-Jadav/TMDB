import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerMovieHeaderDetail = () => {
  return (
    <div className="movie-header-section">
      <div className="container-fluid position-relative p-0">
        <div className="container d-flex text-white movie-detail-responsive">
          <div className="left-section ">
            <div className="poster_wrapper ">
              <div className="poster  ">
                <Skeleton width="300px" height="510px" duration={0.5} />
              </div>
            </div>
          </div>
          <div className="movie-header-right-section  d-flex align-items-center">
            <div className="movie-title-section">
              <h2 className="d-flex ">
                <div className="child-100 w-100">
                  <Skeleton height="45px" duration={0.5} />
                </div>
                <span className="release_year d-flex ms-2">
                  <Skeleton width="100px" height="45px" duration={0.5} />
                </span>
              </h2>

              <div className="facts d-flex">
                <span className="release d-flex align-items-end">
                  <Skeleton width="50px" height="20px" duration={0.5} />
                </span>

                <span className="release d-flex align-items-end">
                  <Skeleton width="100px" height="20px" duration={0.5} />
                </span>

                <span className="genres">
                  <Skeleton width="100px" height="20px" duration={0.5} />
                </span>

                <span className="runtime">
                  <Skeleton width="50px" height="20px" duration={0.5} />
                </span>
              </div>

              <ul className="actions">
                <li className="chart">
                  <div className="circular_progress_bar_large d-flex align-items-center justify-content-center">
                    <Skeleton
                      circle
                      width="60px"
                      height="60px"
                      duration={0.5}
                    />
                  </div>
                  <div className="text">
                    <Skeleton width="40px" height="40px" duration={0.5} />
                  </div>
                </li>

                <li className="icon-list">
                  <Skeleton circle width="46px" height="46px" duration={0.5} />
                </li>

                <li className="icon-list">
                  <Skeleton circle width="46px" height="46px" duration={0.5} />
                </li>
                <li className="icon-list">
                  <Skeleton circle width="46px" height="46px" duration={0.5} />
                </li>
                <li className="icon-list">
                  <Skeleton circle width="46px" height="46px" duration={0.5} />
                </li>
                <li className="play-trailer d-flex">
                  <Skeleton width="120px" height="20px" duration={0.5} />
                </li>
              </ul>

              <div className="header_info">
                <h3 className="tagline">
                  <Skeleton height="22px" duration={0.5} />
                </h3>

                <h3 className="overview-heading">
                  <Skeleton height="26px" duration={0.5} />
                </h3>
                <div className="overview">
                  <p>
                    <Skeleton count={4} duration={0.5} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMovieHeaderDetail;
