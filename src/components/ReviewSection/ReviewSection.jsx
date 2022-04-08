import React from 'react'
import { Link } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewSection = ({id}) => {
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
                    Reviews <span>1</span>
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
                <ReviewCard id={id} />
              </div>

              <p className="new_button ">
                <Link to="/movie/568124-encanto/reviews">Read All Reviews</Link>
              </p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default ReviewSection