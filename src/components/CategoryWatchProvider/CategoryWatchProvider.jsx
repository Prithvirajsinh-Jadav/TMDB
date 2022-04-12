import axios from "axios";
import React, { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";


const CategoryWatchProvider = ({ currentWatchCountry }) => {
  const [categoryWatchProvider, setCategoryWatchProvider] = useState([]);


  useEffect(() => {
    const categoryWatchProviderURL = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY}&watch_region=${currentWatchCountry}`;

    axios
      .get(categoryWatchProviderURL)
      .then((response) => setCategoryWatchProvider(response.data.results));
  }, [currentWatchCountry]);

  return (
    <div className="ott-provider-wrapper pt-3">
      <ul className="ott-provider ">
        {categoryWatchProvider.map((currentWatchProvider) => {
          return (
            <OverlayTrigger
              placement="top"
              key={currentWatchProvider.provider_id}
              overlay={
                <Tooltip id={`tooltip`}>
                  {currentWatchProvider.provider_name}
                </Tooltip>
              }
            >
              <li>
                <Link to="/" className="position-relative">
                  <img
                    src={`https://www.themoviedb.org/t/p/original/t/p/original${currentWatchProvider.logo_path}`}
                    width="50"
                    height="50"
                    alt={currentWatchProvider.provider_name}
                  />

                  <div>
                    <span className="white-check check"></span>
                  </div>
                </Link>
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryWatchProvider;
