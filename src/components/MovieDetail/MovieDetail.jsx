import React from "react";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";  
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import ReviewSection from "../ReviewSection/ReviewSection";
import MovieDetailHeaderSection from "../MovieDetailHeaderSection/MovieDetailHeaderSection";
import MovieDetailRightSection from "../MovieDetailRightSection/MovieDetailRightSection";
import "./MovieDetail.css";

const MovieDetail = () => {
  const params = useParams();

  return (
    <>
      <MovieDetailHeaderSection id={params.id} />

      <div className="movie-detail-wrapper container p-0">
        <div className="movie-detail-left-section">
          <CastCard id={params.id} isMovie="movie"/>
          <ReviewSection id={params.id} isMovie="movie" />
          <RecommendationCard id={params.id} isMovie="movie" />
        </div>

        <div className="movie-detail-right-section">
          <MovieDetailRightSection id={params.id} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
