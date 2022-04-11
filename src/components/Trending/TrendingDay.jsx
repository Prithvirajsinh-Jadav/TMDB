import { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import axios from "axios";

const TrendingDay = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(url)
      .then((response) => response.data.results)
      .then((data) => {
        setTrendingData(data);
      });
  }, []);

  return (
    <>
      {trendingData &&
        trendingData.map((movie) => {
          return (
            <HomePageCard
              key={movie.id}
              id={movie.id}
              poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              title={movie.title}
              release_date={movie.release_date}
              popularity={movie.vote_average * 10}
              isMovie={movie.release_date  ? "movie" : "tv"}
            />
          );
        })}
    </>
  );
};

export default TrendingDay;
