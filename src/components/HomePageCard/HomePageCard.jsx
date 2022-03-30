import React from "react";
import "./HomePageCard.css";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const HomePageCard = ({ id, title, poster_path, release_date, popularity }) => {
  let pColor;
  if (popularity >= 70) {
    pColor = "green";
  } else if (popularity >= 35 && popularity < 70) {
    pColor = "yellow";
  }else{
    pColor = "red";
  }

  return (
    <>
      <div className="card">
        <div className="image">
          <div className="wrapper">
            <a className="image" href="/" title={title}>
              <img className=" poster" src={poster_path} alt="Error occur " />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="circular_progress_bar">
            <CircularProgressbarWithChildren
              value={popularity}
              styles={buildStyles({
                pathColor: pColor,
                trailColor: "rgb(28 97 147)",
                backgroundColor: "#032b48",
              })}
            >
              <div className="circular_progress_bar_data">
                <span>{popularity}</span>
                <sup>%</sup>
              </div>
            </CircularProgressbarWithChildren>
          </div>

          <div className="movie-title">
            <h2>
              <a href="/" title={title}>
                {title}
              </a>
            </h2>
            <p> {release_date} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageCard;
