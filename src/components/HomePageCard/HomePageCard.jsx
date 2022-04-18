import React, { useState, useEffect, useRef } from "react";
import "./HomePageCard.css";
import { Link } from "react-router-dom";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const HomePageCard = ({
  id,
  title,
  poster_path,
  release_date,
  popularity,
  className,
  isMovie,
}) => {
  const pColor =
    popularity >= 70
      ? "#21ce79"
      : popularity >= 35 && popularity < 70
      ? "#bec02d"
      : "#db2360";

  const tColor =
    popularity >= 70
      ? "#204529"
      : popularity >= 35
      ? "#423d0f"
      : popularity !== 0
      ? "#ff000054"
      : "#565a5b";

  const [miniModal, setMiniModal] = useState(false);

  const toolTipRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        toolTipRef &&
        toolTipRef.current &&
        toolTipRef.current.contains(event.target)
      ) {
        setMiniModal((prevState) => !prevState);
      } else {
        setMiniModal(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={"card homepage-card " + (className ? "category-card" : "")}
      >
        <div className="image">
          <div className={"wrapper"}>
            <div className="circle-more-icon">
              <img
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                alt="error"
                ref={toolTipRef}
              />
            </div>
            <div>
              {miniModal && (
                <div className={"tooltip_content show"}>
                  <div className="setting_content">
                    <div className="group">
                      <p className="no_hover">
                        Want to rate or add this item to a list?
                      </p>
                      <p>
                        <Link to="/login">
                          Login
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </p>
                    </div>
                    <div className="group">
                      <p className="no_hover">Not a member?</p>
                      <p>
                        <Link to="/signup">
                          Sign up and join the community
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to={`/${isMovie}/details/${id}`}
              className="image"
              title={title}
            >
              <img className="poster-image" src={poster_path} alt="..." />
            </Link>
          </div>
        </div>
        <div className="content">
          <div className="circular_progress_bar">
            <CircularProgressbarWithChildren
              value={popularity}
              styles={buildStyles({
                pathColor: pColor,
                trailColor: tColor,
                backgroundColor: "#032b48",
              })}
            >
              <div className="circular_progress_bar_data d-flex">
                <span>{popularity>0  ? popularity : "NR" }</span>
                <sup className="d-flex align-items-center">{popularity>0  ? "%" : "" }</sup>
              </div>
            </CircularProgressbarWithChildren>
          </div>

          <div className="movie-title">
            <h2>
              <Link to={`/${isMovie}/details/${id}`} title={title}>
                {title}
              </Link>
            </h2>
            <p>
              {new Date(release_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageCard;
