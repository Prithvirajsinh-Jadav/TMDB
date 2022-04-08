import axios from "axios";
import React, { useState, useEffect } from "react";
import { Anchor } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultImage from "./../../assets/images/defaultReviewImage.jpg";

const ReviewCard = ({ id }) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const reviewURL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(reviewURL)
      .then((response) => setReviewData(response.data.results));
  }, []);

  // console.log(reviewData);
  return (
    <>
      {reviewData.map((currentReview) => {
        return (
          <div className="card mb-4" key={currentReview.author}>
            <div className="review-top-section">
              <div className="avatar">
                <Link to="/">
                  <img
                    src={
                      currentReview.author_details.avatar_path &&
                      currentReview.author_details.avatar_path.startsWith(
                        "/http"
                      )
                        ? currentReview.author_details.avatar_path.slice(1)
                        : currentReview.author_details.avatar_path === null
                        ? defaultImage
                        : `https://www.themoviedb.org/t/p/w64_and_h64_face${currentReview.author_details.avatar_path}`
                    }
                    alt={currentReview.author}
                  />
                </Link>
              </div>

              <div className="review-info">
                <h3 className="d-flex">
                  <Link
                    to={`https://www.themoviedb.org/u/${currentReview.author_details.username}`}
                  >
                    A review by {currentReview.author}
                  </Link>
                  {currentReview.author_details.rating && (
                    <div className="rating ms-2">
                      <span className="star"></span>
                      {currentReview.author_details.rating.toFixed(1)}
                    </div>
                  )}
                </h3>

                <h5>
                  Written by
                  <Link
                    to={`https://www.themoviedb.org/u/${currentReview.author_details.username}`}
                  >
                    {currentReview.author}
                  </Link>
                  on &nbsp;
                  {new Date(currentReview.created_at).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </h5>
              </div>
            </div>

            <div className="review-bottom-section">
              <pre>
                {currentReview.content.slice(0, 600)}
                {currentReview.content.length > 600 && (
                  <>
                    ...
                    <Anchor
                      className="underline"
                      target="_blank"
                      href={currentReview.url}
                    >
                      read the rest.
                    </Anchor>
                  </>
                )}
              </pre>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewCard;
