import React from "react";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import ReviewSection from "../ReviewSection/ReviewSection";
import DetailHeaderSection from "../DetailHeaderSection/DetailHeaderSection";
import DetailRightSection from "../DetailRightSection/DetailRightSection";
import "./MovieDetail.css";

const MovieDetail = () => {
  const params = useParams();

  return (
    <>
      <DetailHeaderSection id={params.id} />

      <div className="movie-detail-wrapper container p-0">
        <div className="movie-detail-left-section">
          <CastCard id={params.id} />
          <ReviewSection id={params.id} />
          <RecommendationCard id={params.id} />
        </div>

        <div className="movie-detail-right-section">
          <DetailRightSection id={params.id} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
