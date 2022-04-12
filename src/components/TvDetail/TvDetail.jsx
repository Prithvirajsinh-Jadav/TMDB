import React from "react";
import {Link, useParams } from "react-router-dom";
import ReviewSection from "../ReviewSection/ReviewSection";
import CastCard from "../CastCard/CastCard";
import CurrentSeasonCard from "../CurrentSeasonCard/CurrentSeasonCard";
import TvDetailHeaderSection from "../TvDetailHeaderSection/TvDetailHeaderSection";
import TvDetailRightSection from "../TvDetailRightSection/TvDetailRightSection";
import TvRecommendationCard from "../TvRecommendationCard/TvRecommendationCard";

const TvDetail = () => {
  const params = useParams();
  return (
    <>
      <TvDetailHeaderSection id={params.id} />
      <div className="movie-detail-wrapper container p-0">
        <div className="movie-detail-left-section">
          <CastCard id={params.id} isMovie="tv" />
          <div className="container px-0 current-season mt-5">
            <div className="current-season-wrapper pt-4">
              <h3>Current Season</h3>
              <CurrentSeasonCard id={params.id} />
              {
                <p className="view-season new_button">
                  <Link to={`/tv/seasons/${params.id}`}>View All Seasons</Link>
                </p>
              }
            </div>
          </div>
          <ReviewSection id={params.id} isMovie="tv" />
          <TvRecommendationCard id={params.id}  />
        </div>

        <div className="movie-detail-right-section">
          <TvDetailRightSection id={params.id} />
        </div>
      </div>
    </>
  );
};

export default TvDetail;
