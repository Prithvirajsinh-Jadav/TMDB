import React, { useState, useEffect } from "react";
import { GetKeywords } from "../../api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TvKeywordComponent = ({ id }) => {
  const [keywords, setKeywords] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
      setKeywords([]);

      const getData = async () => {
        await GetKeywords("tv", id).then((response) =>
          setKeywords(response.data.results)
        );

        setIsLoading(true);
      };

      getData();
      setIsLoading(false);
  }, [id]);
  return (
    <>
      <div className="keyword-container">
        <h4>Keywords</h4>
        {keywords.length !== 0 ? (
          <ul>
            {!isLoading ? (
              <>
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
                <Skeleton height="25px" width="100px" />
              </>
            ) : (
              keywords.map((keywordObj) => {
                return (
                  <li key={keywordObj.id}>
                    <span to="/">{keywordObj.name}</span>
                  </li>
                );
              })
            )}
          </ul>
        ) : (
          "No keywords have been added. "
        )}
      </div>
    </>
  );
};

export default TvKeywordComponent;
