import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";
import MovieRecommendationCard from "../MovieRecommendationCard/MovieRecommendationCard";
import ReviewSection from "../ReviewSection/ReviewSection";
// import MovieDetailHeaderSection from "../MovieDetailHeaderSection/MovieDetailHeaderSection";
import MovieDetailRightSection from "../MovieDetailRightSection/MovieDetailRightSection";
import CircularProgress from "@mui/material/CircularProgress";
import "./MovieDetail.css";
import "./ResponsiveDetail.css";

const MovieDetailHeaderSection = lazy(() =>
  import("../MovieDetailHeaderSection/MovieDetailHeaderSection")
);

const MovieDetail = () => {
  const params = useParams();

 

  return (
    <>
      {/* <Suspense
        fallback={
          <div className="d-flex align-items-center justify-content-center w-100 h-100 m-5 p-5">
            <CircularProgress />
          </div>
        }
      > */}
        <MovieDetailHeaderSection id={params.id} />
      {/* </Suspense> */}
      <div className="movie-detail-wrapper container">
        <div className="movie-detail-left-section">
          <CastCard id={params.id} isMovie="movie" />
          <ReviewSection id={params.id} isMovie="movie" />
          <MovieRecommendationCard id={params.id} />
        </div>

        <div className="movie-detail-right-section">
          <MovieDetailRightSection id={params.id} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
