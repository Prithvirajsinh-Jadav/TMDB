import axios from "axios";
import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";

const MovieCategoryRightSection = ({ category }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const categoryURL = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&page=1`;

    setCategoryData([]);

    axios
      .get(categoryURL)
      .then((response) => setCategoryData(response.data.results));
  }, [category]);

  return (
    <>
      {categoryData.map((categoryObj) => {
        return (
          <HomePageCard
            id={categoryObj.id}
            key={categoryObj.id}
            poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face/${categoryObj.poster_path}`}
            title={categoryObj.title}
            release_date={categoryObj.release_date}
            popularity={categoryObj.vote_average * 10}
            className={true}
          />
        );
      })}
    </>
  );
};

export default MovieCategoryRightSection;
