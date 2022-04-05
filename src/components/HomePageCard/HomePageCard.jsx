import React, { useState,useEffect,useRef } from "react";
import "./HomePageCard.css";
import { Link } from "react-router-dom";


import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const HomePageCard = ({ id, title, poster_path, release_date, popularity,className }) => {
  let pColor;
  if (popularity >= 70) {
    pColor = "green";
  } else if (popularity >= 35 && popularity < 70) {
    pColor = "yellow";
  } else {
    pColor = "red";
  }

  

  const [miniModal, setMiniModal] = useState(false);





  const toolTipRef = useRef();

  useEffect(()=>{
    document.addEventListener('click',(event)=>{
      // console.log("i m clicking");
      if(toolTipRef && toolTipRef.current && toolTipRef.current.contains(event.target)){

        console.log(id + " clicked me");
        console.log(miniModal);
        setMiniModal((prevState)=>!prevState);
       
    
      }else{
        setMiniModal(false);
      }
    })
  },[])

 

  return (
    <>
      <div
        className={"card homepage-card " + (className ? "category-card" : "")}
      >
        <div className="image">
          <div className="wrapper">
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
                        <a href="/">
                          Login
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </p>
                    </div>
                    <div className="group">
                      <p className="no_hover">Not a member?</p>
                      <p>
                        <a href="/">
                          Sign up and join the community
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to={`/details/${id}`} className="image" title={title}>
              <img className="poster-image" src={poster_path} alt="Error occur" />
            </Link>
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
              <a href="/movie-detail" title={title}>
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
