import React, { useState, useEffect } from "react";
import "./CurrentSeasonCard.css";
import { Link } from "react-router-dom";
import { GetDetails } from "../../api";

const CurrentSeasonCard = ({ id }) => {
  const [tvDetail, setTvDetail] = useState([]);

  useEffect(() => {
    GetDetails("tv",id).then((response) => setTvDetail(response.data));
  }, [id]);

  console.log(tvDetail)


  return (
    <div className="current-season-card card flex flex-row ">
      <Link to="/">
        <img
          className="season-image ng-warning"
          src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2/t/p/w130_and_h195_bestv2${tvDetail.seasons && tvDetail.seasons.slice(-1)[0].poster_path}`}
          alt={`${tvDetail.title}`}
        />
      </Link>

      <div className="current-season-content d-flex align-items-center">
        <div>
          <h2>
            <Link to="/">
              {tvDetail.type}
            </Link>
          </h2>
          <h4>
            {tvDetail.first_air_date && tvDetail.first_air_date.slice(0, 4)} |
            &nbsp;
            {tvDetail.seasons &&
              tvDetail.seasons.slice(-1)[0].episode_count}{" "}
            Episodes
          </h4>
          <div className="season-overview">
            <p>
              {tvDetail.seasons && tvDetail.seasons.slice(-1)[0].name} of{" "}
              {tvDetail.name} premiered on{" "}
              {tvDetail.first_air_date &&
                new Date(tvDetail.first_air_date).toLocaleDateString("en-US", {
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
};

export default CurrentSeasonCard;
