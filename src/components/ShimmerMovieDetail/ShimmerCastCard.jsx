import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerCastCard = () => {
  return (
    <div className="bill-section ">
      <section className="bill-section-content position-relative">
        <div className="cast-section ">
          <div className="cast-scroll-section">
            <div className="card">
              <Skeleton
                className="lh-2"
                height="175px"
                width="138px"
                duration={0.5}
              />

              <p className="person-name">
                <Skeleton height="20px" duration={0.5} />
              </p>
              <p className="character-name">
                <Skeleton height="13px" duration={0.5} />
              </p>
            </div>
            <div className="card">
              <Skeleton
                className="lh-2"
                height="175px"
                width="138px"
                duration={0.5}
              />

              <p className="person-name">
                <Skeleton height="20px" duration={0.5} />
              </p>
              <p className="character-name">
                <Skeleton height="13px" duration={0.5} />
              </p>
            </div>
            <div className="card">
              <Skeleton
                className="lh-2"
                height="175px"
                width="138px"
                duration={0.5}
              />

              <p className="person-name">
                <Skeleton height="20px" duration={0.5} />
              </p>
              <p className="character-name">
                <Skeleton height="13px" duration={0.5} />
              </p>
            </div>
            <div className="card">
              <Skeleton
                className="lh-2"
                height="175px"
                width="138px"
                duration={0.5}
              />

              <p className="person-name">
                <Skeleton height="20px" duration={0.5} />
              </p>
              <p className="character-name">
                <Skeleton height="13px" duration={0.5} />
              </p>
            </div>
            <div className="card">
              <Skeleton
                className="lh-2"
                height="175px"
                width="138px"
                duration={0.5}
              />

              <p className="person-name">
                <Skeleton height="20px" duration={0.5} />
              </p>
              <p className="character-name">
                <Skeleton height="13px" duration={0.5} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShimmerCastCard;
