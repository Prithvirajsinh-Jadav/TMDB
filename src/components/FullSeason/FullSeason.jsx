import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TvReviewHeading from "../TvReviewHeading/TvReviewHeading";
import "./FullSeason.css";
import defaultPosterImage from "./../../assets/images/fallback-poster-image_1.svg"
import { GetDetails } from "../../api";

const FullSeason = () => {
  const params = useParams();

  const [currentTvData, setCurrentTvData] = useState({});

  useEffect(() => {

    GetDetails("tv",params.id).then((response) => setCurrentTvData(response.data));
  }, [params.id]);

  return (
    <>
      <div className="container-fluid poster-section p-0">
        <TvReviewHeading id={params.id} />
      </div>
      <div className="all-season-wrapper">
        <div className="all-season">

      {currentTvData.seasons &&
        currentTvData.seasons.map((seasons) => {
          return (
            <div className="season-card container-fluid p-0" key={seasons.id}>
              <div className="container season-content py-4 d-flex">
                <div className="season-image-container d-flex align-items-center">
                  <img
                    className="season-image"
                    src={
                      seasons.poster_path
                        ? `https://www.themoviedb.org/t/p/w130_and_h195_bestv2${seasons.poster_path}`
                        : defaultPosterImage
                    }
                   
                    alt={seasons.name}
                  />
                </div>
                <div className="current-season-content ps-4 pt-0 d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center">
                    <h2>
                      <Link to="/">
                        {seasons && seasons.name}
                       
                      </Link>
                    </h2>
                    <h4 className="d-flex align-self-end m-2">
                      {seasons.air_date && seasons.air_date.slice(0, 4)} |
                      &nbsp;
                      {seasons && seasons.episode_count} Episodes
                    </h4>
                  </div>
                  <div className="season-details">
                    <p>
                      {seasons && seasons.name} of {seasons.name} premiered on{" "}
                      {seasons.air_date &&
                        new Date(seasons.air_date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }

         
        </div>
      </div>
    </>
  );
};

export default FullSeason;
