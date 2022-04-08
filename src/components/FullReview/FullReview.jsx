import React from "react";
import "./FullReview.css";
import { Link } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useParams } from "react-router-dom";

const FullReview = () => {

  const params = useParams();

  return (
    <div className="fullreview-wrapper">
      <div className="container-fluid poster-section p-0">
        <div className="poster-section-wrapper d-flex container py-3">
          <div className="poster-left-section">
            <span>
              <Link to={"/details/579974"}>
                <img
                  src="https://www.themoviedb.org/t/p/w58_and_h87_face/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                  alt="..."
                />
              </Link>
            </span>
          </div>
          <div className="poster-right-section ms-4">
            <h2 className="review-movie-title">
              Spider-Man: No Way Home <span>(2021)</span>
            </h2>
            <h6>← Back to main</h6>
          </div>
        </div>
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
              <ReviewCard id={params.reviewID} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullReview;
