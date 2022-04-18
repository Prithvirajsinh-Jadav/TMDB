import axios from "axios";
import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import InfiniteScroll from "react-infinite-scroller";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg";


const SearchRightSection = ({ isMovie, url }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [hasMore, setHasMore] = useState(true)

  

  useEffect(() => {
    const categoryURL = `https://api.themoviedb.org/3/discover/${isMovie}?api_key=${process.env.REACT_APP_API_KEY}&${url}&page=1`;

    console.log(url)
    setCategoryData([]);

    console.log(categoryURL);
    axios
      .get(categoryURL)
      .then((response) => setCategoryData(response.data.results));
  }, [isMovie,url]);

  const fetchData = (page) => {
    const categoryURL = `https://api.themoviedb.org/3/discover/${isMovie}?api_key=${process.env.REACT_APP_API_KEY}&${url}&page=${page}`;
    console.log(categoryURL);
    axios
      .get(categoryURL)
      .then((response) =>
        setCategoryData((prevState) => {
          response.data.results.length >= 20 ? setHasMore(true) : setHasMore(false);
         return [...prevState, ...response.data.results]})
      );
  };

  return (
    <>
      <InfiniteScroll
        pageStart={1}
        loadMore={fetchData}
        hasMore={hasMore}
        className="infinite-class"
      >
        {categoryData.map((categoryObj) => {
          return (
            <HomePageCard
              id={categoryObj.id}
              key={categoryObj.id}
              poster_path={
                categoryObj.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${categoryObj.poster_path}`
                  : defaultImage
              }
              title={categoryObj.name || categoryObj.title}
              release_date={
                categoryObj.first_air_date || categoryObj.release_date
              }
              popularity={categoryObj.vote_average * 10}
              className={true}
              isMovie={categoryObj.first_air_date ? "tv" : "movie"}
            />
          );
        })} 
      </InfiniteScroll>
    </>
  );
};

export default SearchRightSection;
