import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieReviewHeading = ({id}) => {

    const [currentMovieData, setCurrentMovieData] = useState([]);

    useEffect(() => {
          const detailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

          axios
            .get(detailsURL)
            .then((response) => setCurrentMovieData(response.data));

    
    }, [])

  return (
    <div className="poster-section-wrapper d-flex container py-3">
      <div className="poster-left-section">
        <span>
          <Link to={`/movie/detail/${id}`}>
            <img
              src={`https://www.themoviedb.org/t/p/w58_and_h87_face${currentMovieData.poster_path}`}
              alt="..."
            />
          </Link>
        </span>
      </div>
      <div className="poster-right-section ms-4">
        <h2 className="review-movie-title">
          {currentMovieData.title}
          <span>
            (
            {currentMovieData.release_date &&
              currentMovieData.release_date.slice(0, 4)}
            )
          </span>
        </h2>
        <h6>
          <Link to={`/movie/details/${id}`}>← Back to main</Link>
        </h6>
      </div>
    </div>
  );
};

export default MovieReviewHeading;
