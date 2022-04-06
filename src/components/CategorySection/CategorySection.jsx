import React, { useState, useEffect,useRef } from "react";
import "./CategorySection.css";
import HomePageCard from "../HomePageCard/HomePageCard";
import axios from "axios";

const CategorySection = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const API_KEY = "a192f556a534b82d1e2eb625272ad9aa";

    const categoryURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

    axios
      .get(categoryURL)
      .then((response) => setCategoryData(response.data.results));
  });

 

  const [showFilterPanel, setShowFilterPanel] = useState({ flag : false,filterID : ""})

  const filterPanelRef = useRef();

   const filterPanelHandler = (event) => {
     console.log("aham brahmashmi");
  if (
    filterPanelRef &&
    filterPanelRef.current &&
    filterPanelRef.current.contains(event.target)
  ) {

    console.log(event);
    setShowFilterPanel((prevState) => (
      {
        ...prevState,filterID : "123"
      }
    ));

     console.log(showFilterPanel);
  } 
   }


  //  console.log(showFilterPanel);

  return (
    <div className="category-wrapper container d-flex p-0 my-4 flex-column">
      <div className="category-title mt-2">
        <h2>Popular Movies</h2>
      </div>
      <div className="d-flex mt-2">
        <div className="left-category-section w-20">
          <div className="filter-section">
            <div
              className="filter-panel"
              ref={filterPanelRef}
              onClick={filterPanelHandler}
            >
              <div
                className="filter-name d-flex align-self-center w-100 justify-content-between flex-nowrap"
                id="sort"
              >
                <h2>Sort</h2>
                <span
                  className={
                    "chevron-right " + (showFilterPanel.flag ? "rotate" : "")
                  }
                ></span>
              </div>

              <div
                className={
                  "filter " + (showFilterPanel.flag ? "height-100" : "height-0")
                }
              >
                <h3>Sort Results By</h3>
                <span className="k-widget k-dropdown kendo_dropdown full_width font_size_1">
                  <select
                    id="sort_by"
                    name="sort_by"
                    className="filter-dropdown w-100"
                  >
                    <option value="popularity.desc">
                      Popularity Descending
                    </option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="primary_release_date.desc">
                      Release Date Descending
                    </option>
                    <option value="primary_release_date.asc">
                      Release Date Ascending
                    </option>
                    <option value="title.asc">Title (A-Z)</option>
                    <option value="title.desc">Title (Z-A)</option>
                  </select>
                </span>
              </div>
            </div>
            <div
              className="filter-panel"
              ref={filterPanelRef}
              onClick={filterPanelHandler}
            >
              <div
                className="filter-name d-flex align-self-center w-100 justify-content-between flex-nowrap"
                id="filters"
              >
                <h2>Sort</h2>
                <span
                  className={
                    "chevron-right " + (showFilterPanel.flag ? "rotate" : "")
                  }
                ></span>
              </div>

              <div
                className={
                  "filter " + (showFilterPanel.flag ? "height-100" : "height-0")
                }
              >
                <h3>Sort Results By</h3>
                <span className="k-widget k-dropdown kendo_dropdown full_width font_size_1">
                  <select
                    id="sort_by"
                    name="sort_by"
                    className="filter-dropdown w-100"
                  >
                    <option value="popularity.desc">
                      Popularity Descending
                    </option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="primary_release_date.desc">
                      Release Date Descending
                    </option>
                    <option value="primary_release_date.asc">
                      Release Date Ascending
                    </option>
                    <option value="title.asc">Title (A-Z)</option>
                    <option value="title.desc">Title (Z-A)</option>
                  </select>
                </span>
              </div>
            </div>
            <div
              className="filter-panel"
              ref={filterPanelRef}
              onClick={filterPanelHandler}
            >
              <div
                className="filter-name d-flex align-self-center w-100 justify-content-between flex-nowrap"
                id="filters"
              >
                <h2>Sort</h2>
                <span
                  className={
                    "chevron-right " + (showFilterPanel.flag ? "rotate" : "")
                  }
                ></span>
              </div>

              <div
                className={
                  "filter " + (showFilterPanel.flag ? "height-100" : "height-0")
                }
              >
                <h3>Sort Results By</h3>
                <span className="k-widget k-dropdown kendo_dropdown full_width font_size_1">
                  <select
                    id="sort_by"
                    name="sort_by"
                    className="filter-dropdown w-100"
                  >
                    <option value="popularity.desc">
                      Popularity Descending
                    </option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="primary_release_date.desc">
                      Release Date Descending
                    </option>
                    <option value="primary_release_date.asc">
                      Release Date Ascending
                    </option>
                    <option value="title.asc">Title (A-Z)</option>
                    <option value="title.desc">Title (Z-A)</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-category-section w-80 d-flex flex-wrap justify-content-center ">
          {categoryData.map((categoryObj) => {
            return (
              <HomePageCard
                id={categoryObj.id}
                key={categoryObj.id}
                poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face/${categoryObj.poster_path}`}
                title={categoryObj.title}
                release_date={categoryObj.release_date}
                popularity={categoryObj.vote_average * 10}
                className={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
