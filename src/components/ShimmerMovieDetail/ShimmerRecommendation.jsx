import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerRecommendation = () => {
  return (
    <div className="recommendation-section container">
      <section className="recommendation-content ">
        <div className="d-flex gap-20 overflow-hidden ">
          <div className="recommendation-card  ">
            <div>
              <Skeleton height="143px" width="250px " duration={0.5} />
            </div>
            <div className="d-flex mt-1 w-100">
              <div className="child-100 w-50">
                <Skeleton height="20px" width="100%" duration={0.5} />
              </div>

              <div className="child-100 child-flex-end w-50">
                <Skeleton height="20px" width="30px" duration={0.5} />
              </div>
            </div>
          </div>
          <div className="recommendation-card  ">
            <div>
              <Skeleton height="143px" width="250px " duration={0.5} />
            </div>
            <div className="d-flex mt-1 w-100">
              <div className="child-100 w-50">
                <Skeleton height="20px" width="100%" duration={0.5} />
              </div>

              <div className="child-100 child-flex-end w-50">
                <Skeleton height="20px" width="30px" duration={0.5} />
              </div>
            </div>
          </div>
          <div className="recommendation-card  ">
            <div>
              <Skeleton height="143px" width="250px " duration={0.5} />
            </div>
            <div className="d-flex mt-1 w-100">
              <div className="child-100 w-50">
                <Skeleton height="20px" width="100%" duration={0.5} />
              </div>

              <div className="child-100 child-flex-end w-50">
                <Skeleton height="20px" width="30px" duration={0.5} />
              </div>
            </div>
          </div>
          <div className="recommendation-card  ">
            <div>
              <Skeleton height="143px" width="250px " duration={0.5} />
            </div>
            <div className="d-flex mt-1 w-100">
              <div className="child-100 w-50">
                <Skeleton height="20px" width="100%" duration={0.5} />
              </div>

              <div className="child-100 child-flex-end w-50">
                <Skeleton height="20px" width="30px" duration={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShimmerRecommendation;
