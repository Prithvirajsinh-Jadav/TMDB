import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageCard from "../HomePageCard/HomePageCard";

const PopularTV = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(url)
      .then((response) => setPopularMovieData(response.data.results))

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
          />
        );
      })}
    </>
  );
};

export default PopularTV;
