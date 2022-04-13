import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieKeywordComponent = ({ id }) => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const keywordURL = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(keywordURL)
      .then((response) => setKeywords(response.data.keywords));
  }, []);
  return (
    <>
      <div className="keyword-container">
        <h4>Keywords</h4>
        <ul>
          {keywords.map((keywordObj) => {
            return (
              <li key={keywordObj.id}>
                <Link to="/">{keywordObj.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieKeywordComponent;