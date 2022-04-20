import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import { GetCategoryData } from "../../api";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg"

const PopularMovie = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
      GetCategoryData("movie","popular",1).then((response) =>setPopularMovieData(response.data.results));
  }, []);
  return (
    <>
      {popularMovieData.map((movie) => {
        return (
          <HomePageCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}` : defaultImage}
            title={movie.title}
            release_date={movie.release_date}
            popularity={movie.vote_average * 10}
            isMovie={movie.release_date ? "movie" : "tv"}
          />
        );
      })}
    </>
  );
};

export default PopularMovie;
