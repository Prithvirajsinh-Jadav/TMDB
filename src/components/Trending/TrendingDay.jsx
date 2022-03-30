import { useState, useEffect} from 'react';
import HomePageCard from "../HomePageCard/HomePageCard";
import axios from 'axios';

const TrendingDay = () => {

    const [trendingData, setTrendingData] = useState([])

    useEffect(() => {
    
    const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=a192f556a534b82d1e2eb625272ad9aa"; 
    
    axios
        .get(url)
        .then((response) => response.data.results)
        .then((data) => {
          data.map((movie) => {
            return setTrendingData((prevData) => [
              ...prevData,
              {
                id: movie.id,
                poster_path:
                  "https://www.themoviedb.org/t/p/w220_and_h330_face" +
                  movie.poster_path,
                title: movie.title,
                release_date: movie.release_date,
                popularity: movie.vote_average * 10,
              },
            ]);
          });
        });
    }, []);
  return (
    <>
      {trendingData.map((movie) => {
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
}

export default TrendingDay