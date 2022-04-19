import React from 'react'
import defaultImage from "./../../../assets/images/fallback-poster-image_6.svg";


const SearchShowResultDataCard = ({poster_path,title,release_date,overview}) => {
  return (
    <div className="card search-content-card d-flex flex-row">
      <div className="image-container">
        <img
          className="search-image"
          src={ poster_path ? `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${poster_path}` : defaultImage}
          alt={title}
        />
      </div>
      <div className="search-detail d-flex justify-content-center flex-column">
        <div className="search-detail-wrapper">
          <div className="search-detail-container">
            <h2>{title}</h2>
            <span className="release-date">{release_date}</span>
          </div>
        </div>

        <div className="overview">
          <p>
           {overview}
          </p>
        </div>
      </div>
    </div>

  );
}

export default SearchShowResultDataCard