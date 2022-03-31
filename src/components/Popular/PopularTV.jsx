import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageCard from "../HomePageCard/HomePageCard";

const PopularTV = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/tv/popular?api_key=a192f556a534b82d1e2eb625272ad9aa";

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
              title: element.original_name,
              release_date: element.first_air_date,
              popularity: element.vote_average * 10,
            },
          ]);
        });
      });
  }, []);
  return (
    <>
      {popularMovieData.map((tv) => {
        return (
         
            <HomePageCard
              key={tv.id}
              id={tv.id}
              poster_path={tv.poster_path}
              title={tv.title}
              release_date={tv.release_date}
              popularity={tv.popularity}
            />
         
        );
      })}
    </>
  );
};

export default PopularTV;
