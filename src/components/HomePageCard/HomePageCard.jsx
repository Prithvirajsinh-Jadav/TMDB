import React from 'react';
import './HomePageCard.css';
import red from "../../assets/images/turning_red.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
                //       id={element.id}
                //       poster_path={element.poster_path}
                //       title={element.title}
                //       release_date={element.release_date}
const HomePageCard = ({id,title,poster_path,release_date}) => {
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
            <CircularProgressbarWithChildren value={50}>
              <div className="circular_progress_bar_data">
                <span>66</span>
                <sup>%</sup>
              </div>
            </CircularProgressbarWithChildren>
          </div>

          <div className="movie-title">
            <h2>
              <a href="/" title="Turning Red">
               {title}
              </a>
            </h2>
            <p> {release_date} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageCard