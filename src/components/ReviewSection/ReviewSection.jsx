import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import defaultImage from "./../../assets/images/defaultReviewImage.jpg";

const ReviewSection = ({ id, isMovie }) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const reviewURL = `https://api.themoviedb.org/3/${isMovie}/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(reviewURL)
      .then((response) => setReviewData(response.data.results));
  }, []);

  return (
    <>
      <div className="social-section  ">
        <section className="social-panel panel">
          <section className="review">
            <div className="social-menu">
              <h3 className="pe-4">Social</h3>
              <ul>
                <li className="social-menu-active">
                  <Link id="reviews" className="media_panel" to="/">
                    Reviews <span>{reviewData.length}</span>
                  </Link>
                </li>
                <li className="">
                  <Link id="discussions" className="media_panel" to="/">
                    Discussions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="review-section">
              <div className="inner-content">
            
                {
                  reviewData.slice(0,1).map((currentReview) => {
                    return (
                      <ReviewCard
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
                  })
                }
              </div>

             { reviewData.length !==0 && 
              <p className="new_button ">
                <Link to={`/${isMovie}/reviews/${id}`}>Read All Reviews</Link>
              </p>}
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default ReviewSection;
