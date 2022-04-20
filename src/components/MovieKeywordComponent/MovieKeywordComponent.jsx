import React, { useState, useEffect } from "react";
import { GetKeywords } from "../../api";

const MovieKeywordComponent = ({ id }) => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
     GetKeywords("movie",id).then((response) => setKeywords(response.data.keywords));
  }, []);
  return (
    <>
      <div className="keyword-container">
        <h4>Keywords</h4>
        <ul>
          {keywords.map((keywordObj) => {
            return (
              <li key={keywordObj.id}>
                <span to="/">{keywordObj.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieKeywordComponent;
