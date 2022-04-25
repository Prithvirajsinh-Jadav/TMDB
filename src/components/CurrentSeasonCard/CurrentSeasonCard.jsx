import React, { useState, useEffect } from "react";
import "./CurrentSeasonCard.css";
import { GetDetails } from "../../api";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg"

const CurrentSeasonCard = ({ id }) => {
  const [tvDetail, setTvDetail] = useState([]);

  useEffect(() => {
    GetDetails("tv", id).then((response) => setTvDetail(response.data));
  }, [id]);


  return (
    <>
      {tvDetail.seasons && (
        <div className="current-season-card card flex flex-row ">
          <div className="current-image-container">
            <img
              className="season-image "
              src={tvDetail.seasons.slice(-1)[0]
                .poster_path ? `https://www.themoviedb.org/t/p/w130_and_h195_bestv2/t/p/w130_and_h195_bestv2${
                tvDetail.seasons.slice(-1)[0].poster_path
              }` : defaultImage}
              alt={`${tvDetail.title}`}
            />
          </div>
          <div className="current-season-content d-flex align-items-center">
            <div>
              <h2>{tvDetail.seasons && tvDetail.seasons.slice(-1)[0].name}</h2>
              <h4>
                {tvDetail.first_air_date && tvDetail.first_air_date.slice(0, 4)}{" "}
                | &nbsp;
                {tvDetail.seasons &&
                  tvDetail.seasons.slice(-1)[0].episode_count}{" "}
                Episodes
              </h4>
              <div className="season-overview">
                <p>
                  {tvDetail.seasons && tvDetail.seasons.slice(-1)[0].name} of{" "}
                  {tvDetail.name} premiered on{" "}
                  {tvDetail.first_air_date &&
                    new Date(tvDetail.first_air_date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentSeasonCard;
