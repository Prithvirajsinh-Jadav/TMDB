import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageCard from "../HomePageCard/HomePageCard";

const PopularMovie = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=a192f556a534b82d1e2eb625272ad9aa";

    axios
      .get(url)
      .then((response) => response.data.results)
      .then((data) => {
        data.map((element) => {
          return setPopularMovieData((prevData) => [
            ...prevData,
            {
              id: element.id,
              poster_path:
                "https://www.themoviedb.org/t/p/w220_and_h330_face" +
                element.poster_path,
              title: element.title,
              release_date: element.release_date,
              popularity: element.vote_average * 10,
            },
          ]);
        });
      });
  }, []);
  return (
    <>
      {popularMovieData.map((movie) => {
        return (
         
            <HomePageCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              popularity={movie.popularity}
            />
      
        );
      })}
    </>
  );
};

export default PopularMovie;
