import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import defaultImage from "./../../assets/images/defaultReviewImage.jpg";
import "./FullReview.css";
import MovieReviewHeading from "../MovieReviewHeading/MovieReviewHeading";
import TvReviewHeading from "../TvReviewHeading/TvReviewHeading";
import { GetReview } from "../../api";

const FullReview = () => {
  const params = useParams();
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    GetReview(params.reviewID, params.isMovie).then((response) =>
      setReviewData(response.data.results)
    );
  }, [params.reviewID, params.isMovie]);

  return (
    <div className="fullreview-wrapper">
      <div className="container-fluid poster-section p-0">
        {params.isMovie === "movie" ? (
          <MovieReviewHeading id={params.reviewID} />
        ) : (
          <TvReviewHeading id={params.reviewID} />
        )}
      </div>

      <div className="review-content-wrapper d-flex w-100 container p-4">
        <div className="review-content-left-section w-20 justify-content-end d-flex me-2 align-items-start">
          <button className="btn btn-custom btn-review d-flex ">
            <span className="pencil mx-1"></span>
            WRITE REVIEW
          </button>
        </div>
        <div className="review-content-right-section w-80">
          <div className="review-section">
            <div className="inner-content">
              {reviewData.map((currentReview) => {
                return (
                  <ReviewCard
                    key={currentReview.author}
                    author={currentReview.author}
                    authorImage={
                      currentReview.author_details.avatar_path &&
                      currentReview.author_details.avatar_path.startsWith(
                        "/http"
                      )
                        ? currentReview.author_details.avatar_path.slice(1)
                        : currentReview.author_details.avatar_path === null
                        ? defaultImage
                        : `https://www.themoviedb.org/t/p/w64_and_h64_face${currentReview.author_details.avatar_path}`
                    }
                    rating={currentReview.author_details.rating}
                    userLink={`https://www.themoviedb.org/u/${currentReview.author_details.username}`}
                    created_at={currentReview.created_at}
                    content={currentReview.content}
                    url={currentReview.url}
                  />
                );
              })}
              {/* <ReviewCard id={params.reviewID} /> */}
              {/* author,authorImage,rating,userLink,created_at,content,url */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullReview;
