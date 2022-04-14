import axios from "axios";
import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import InfiniteScroll from "react-infinite-scroller";

const SearchRightSection = ({ isMovie, category, url }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const categoryURL = `https://api.themoviedb.org/3/${isMovie}/${category}?api_key=${process.env.REACT_APP_API_KEY}&${url}&page=1`;

    setCategoryData([]);

    console.log(categoryURL);
    axios
      .get(categoryURL)
      .then((response) => setCategoryData(response.data.results));
  }, [category]);

  const fetchData = (page) => {
    const categoryURL = `https://api.themoviedb.org/3/${isMovie}/${category}?api_key=${process.env.REACT_APP_API_KEY}&${url}&page=${page}`;
    console.log(categoryURL);
    axios
      .get(categoryURL)
      .then((response) =>
        setCategoryData((prevState) => [...prevState, ...response.data.results])
      );
  };

  return (
    <>
      <InfiniteScroll
        pageStart={1}
        loadMore={fetchData}
        hasMore={true}
        className="infinite-class"
      >
        {categoryData.map((categoryObj) => {
          return (
            <HomePageCard
              id={categoryObj.id}
              key={categoryObj.id}
              poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face/${categoryObj.poster_path}`}
              title={categoryObj.name || categoryObj.title}
              release_date={
                categoryObj.first_air_date || categoryObj.release_date
              }
              popularity={categoryObj.vote_average * 10}
              className={true}
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default SearchRightSection;
