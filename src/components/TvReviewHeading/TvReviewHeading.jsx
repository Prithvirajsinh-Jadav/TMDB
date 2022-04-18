import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetDetails } from "../../api";

const TvReviewHeading = ({ id }) => {
  const [currentTvDetail, setCurrentTvDetail] = useState([]);

  useEffect(() => {

    GetDetails("tv", id).then((response) => setCurrentTvDetail(response.data));
  }, [id]);

  return (
    <div className="poster-section-wrapper d-flex container py-3 px-0">
      <div className="poster-left-section">
        <span>
          <Link to={`/tv/detail/${id}`}>
            <img
              src={`https://www.themoviedb.org/t/p/w58_and_h87_face${currentTvDetail.poster_path}`}
              alt="..."
            />
          </Link>
        </span>
      </div>
      <div className="poster-right-section ms-4">
        <h2 className="review-movie-title">
          {currentTvDetail.name}
          <span>
            (
            {currentTvDetail.first_air_date &&
              currentTvDetail.first_air_date.slice(0, 4)}
            )
          </span>
        </h2>
        <h6>
          <Link to={`/tv/details/${id}`}>← Back to main</Link>
        </h6>
      </div>
    </div>
  );
};

export default TvReviewHeading;
