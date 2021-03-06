import React, { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import InfiniteScroll from "react-infinite-scroller";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg";
import { GetDiscoverData } from "../../api";


const SearchRightSection = ({ isMovie, url }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [hasMore, setHasMore] = useState(true)

  

  useEffect(() => {

    setCategoryData([]);

    GetDiscoverData(isMovie,url,1).then((response) => setCategoryData(response.data.results));
  }, [isMovie,url]);

  const fetchData = (page) => {
   GetDiscoverData(isMovie, url, page).then((response) =>
     setCategoryData((prevState) => {
       response.data.results.length >= 20
         ? setHasMore(true)
         : setHasMore(false);
       return [...prevState, ...response.data.results];
     })
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
        {categoryData.length > 0 ? (
          categoryData.map((categoryObj) => {
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
          })
        ) : (
          <h6   >No results found</h6>
        )}
      </InfiniteScroll>
    </>
  );
};

export default SearchRightSection;
