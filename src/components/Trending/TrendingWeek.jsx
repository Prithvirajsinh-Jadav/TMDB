import { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import { GetTrendingData } from "../../api";

const TrendingWeek = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {

    GetTrendingData("week").then((response) => setTrendingData(response.data.results))
  }, []);
  return (
    <>
      {trendingData.map((movie) => {
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

export default TrendingWeek;
