import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerKeyword = () => {
  return (
    <>
      <div className="social-link-container">
        <div className="child-100">
          <Skeleton height="32px" width="32px" duration={0.5} />
        </div>

        <div>
          <Skeleton height="32px" width="32px" duration={0.5} />
        </div>

        <div>
          <Skeleton height="32px" width="32px" duration={0.5} />
        </div>

        <div className="justwatch-wrapper">
          <Skeleton height="32px" width="32px" duration={0.5} />
        </div>

        <div>
          <Skeleton height="32px" width="32px" duration={0.5} />
        </div>
      </div>

      <div className="movie-details-container pt-4">
        <div className="movie-status d-flex flex-column w-100 ">
          <div className="child-100 w-100">
            <Skeleton height="25px" width="100%" duration={0.5} />
          </div>
          <div className="child-100 w-100">
            <Skeleton height="15px" width="100%" duration={0.5} />
          </div>
        </div>
        <div className="movie-status d-flex flex-column w-100 ">
          <div className="child-100 w-100">
            <Skeleton height="25px" width="100%" duration={0.5} />
          </div>
          <div className="child-100 w-100">
            <Skeleton height="15px" width="100%" duration={0.5} />
          </div>
        </div>
        <div className="movie-status d-flex flex-column w-100 ">
          <div className="child-100 w-100">
            <Skeleton height="25px" width="100%" duration={0.5} />
          </div>
          <div className="child-100 w-100">
            <Skeleton height="15px" width="100%" duration={0.5} />
          </div>
        </div>
        <div className="movie-status d-flex flex-column w-100 ">
          <div className="child-100 w-100">
            <Skeleton height="25px" width="100%" duration={0.5} />
          </div>
          <div className="child-100 w-100">
            <Skeleton height="15px" width="100%" duration={0.5} />
          </div>
        </div>
      </div>

      <div className="keyword-container w-100">
        <div className="child-100 w-100">
          <Skeleton height="35px" width="100%" duration={0.5} />
        </div>
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
          <Skeleton height="25px" width="100px" duration={0.5} />
      </div>
    </>
  );
};

export default ShimmerKeyword;
