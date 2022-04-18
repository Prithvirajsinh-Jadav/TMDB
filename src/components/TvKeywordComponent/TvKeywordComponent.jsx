import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetKeywords } from "../../api";

const TvKeywordComponent = ({ id }) => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    GetKeywords("tv",id).then((response) => setKeywords(response.data.results));
  }, [id]);
  return (
    <>
      <div className="keyword-container">
        <h4>Keywords</h4>
        {keywords.length !== 0 ?
        <ul>
          {keywords.map((keywordObj) => {
            return (
              <li key={keywordObj.id}>
                <Link to="/">{keywordObj.name}</Link>
              </li>
            );
          })}
        </ul>
        : "No keywords have been added. "}
      </div>
    </>
  );
};

export default TvKeywordComponent;
