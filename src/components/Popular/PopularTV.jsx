import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import { GetCategoryData } from "../../api";

const PopularTV = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {

    GetCategoryData("tv","popular",1).then((response) => setPopularMovieData(response.data.results))

  }, []);
  return (
    <>
      {popularMovieData.map((tv) => {
        return (
          <HomePageCard
            key={tv.id}
            id={tv.id}
            poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face${tv.poster_path}`}
            title={tv.original_name}
            release_date={tv.first_air_date}
            popularity={tv.vote_average * 10}
            isMovie={tv.release_date  ? "movie" : "tv"}
          />
        );
      })}
    </>
  );
};

export default PopularTV;
