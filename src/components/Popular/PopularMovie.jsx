import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageCard from "../HomePageCard/HomePageCard";

const PopularMovie = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
    const url =
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(url)
      .then((response) =>setPopularMovieData(response.data.results));
  }, []);
  return (
    <>
      {popularMovieData.map((movie) => {
        // console.log(movie); this will tells us that the media_type does not always comes

        return (
          <HomePageCard
            key={movie.id}
            id={movie.id}
            poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
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
