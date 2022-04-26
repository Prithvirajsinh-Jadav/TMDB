import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerReviewCast = () => {
  return (
    <div className="social-section  ">
      <section className="social-panel panel">
        <section className="review">
  
          <div className="review-section">
            <div className="inner-content">
              <div className="card mb-4">
                <div className="review-top-section">
                  <div className="avatar">
                    <span>
                      <Skeleton
                        circle
                        height="64px"
                        width="64px"
                        duration={0.5}
                      />
                    </span>
                  </div>

                  <div className="review-info ms-3 w-100">
                    <h3>
                      <Skeleton height="28px" duration={0.5} />
                    </h3>

                    <h5 className="mt-1">
                      <Skeleton height="18px" duration={0.5} />
                    </h5>
                  </div>
                </div>

                <div className="review-bottom-section">

                  <br/>
                  <Skeleton height="20px" count={3} duration={0.5} />
                  <br/>
                  <br/>
                  <Skeleton height="20px" count={2} duration={0.5} />
                  <br/>
                  <Skeleton height="20px" count={1} duration={0.5} />
                </div>
              </div>
            </div>

            <p className="new_button ">
              <Skeleton height="22px" duration={0.5} />
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ShimmerReviewCast;
