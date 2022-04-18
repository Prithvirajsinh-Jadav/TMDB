import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import InfiniteScroll from "react-infinite-scroller";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg";
import { GetCategoryData } from "../../api";

const TvCategoryRightSection = ({ category }) => {
  const [categoryData, setCategoryData] = useState([]);
    const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    setCategoryData([]);
     GetCategoryData("tv", category, 1).then((response) =>
       setCategoryData(response.data.results)
     );
  }, [category]);

  const fetchData = (page) => {
      GetCategoryData("tv", category, page).then((response) =>
        setCategoryData((prevState) => {
           response.data.results.length >= 20
             ? setHasMore(true)
             : setHasMore(false);
        return  [...prevState, ...response.data.results]})
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
              poster_path={ categoryObj.poster_path ?  `https://www.themoviedb.org/t/p/w220_and_h330_face/${categoryObj.poster_path}` : defaultImage}
              title={categoryObj.name}
              release_date={categoryObj.first_air_date}
              popularity={categoryObj.vote_average * 10}
              className={true}
              isMovie="tv"
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default TvCategoryRightSection;
