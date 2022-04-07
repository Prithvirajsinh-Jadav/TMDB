import React, { useState, useEffect } from "react";
import "./CategorySection.css";
import HomePageCard from "../HomePageCard/HomePageCard";
import axios from "axios";
import { languages } from "../language";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CategorySection = () => {
  const [categoryData, setCategoryData] = useState([]);
  // const [allCountries, setAllCountries] = useState([]);

  const [genreList, setGenreList] = useState([]);

  const [watchProvider, setWatchProvider] = useState([]);

  useEffect(() => {
    const API_KEY = "a192f556a534b82d1e2eb625272ad9aa";

    const categoryURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

    // const allCountriesURL = `https://api.themoviedb.org/3/watch/providers/regions?api_key=${API_KEY}`;

    const genreKeywordURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    const watchProviderURL = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${API_KEY}&watch_region=in`;

    axios
      .get(categoryURL)
      .then((response) => setCategoryData(response.data.results));

    // axios
    //   .get(allCountriesURL)
    //   .then((response) => setAllCountries(response.data.results));

    axios
      .get(genreKeywordURL)
      .then((response) => setGenreList(response.data.genres));

    axios
      .get(watchProviderURL)
      .then((response) => setWatchProvider(response.data.results));
  }, []);

  const [showSortPanel, setShowSortPanel] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [showWatchPanel, setShowWatchPanel] = useState(false);

  const filterPanelHandler = (event) => {
    if (event.target.id === "sort") {
      setShowSortPanel((prevState) => !prevState);
    } else if (event.target.id === "filters") {
      setShowFilterPanel((prevState) => !prevState);
    } else if (event.target.id === "watch") {
      setShowWatchPanel((prevState) => !prevState);
    }
  };

  const checkBoxHandler = () => {
    console.log("hello world");
  };

  //  console.log(watchProvider);

  return (
    <div className="category-wrapper container d-flex p-0 my-4 flex-column">
      <div className="category-title mt-2">
        <h2>Popular Movies</h2>
      </div>
      <div className="d-flex mt-2">
        <div className="left-category-section w-20 ">
          <div className="filter-section">
            <div className="filter-panel" onClick={filterPanelHandler}>
              <div
                className="filter-name d-flex align-self-center w-100 justify-content-between flex-nowrap"
                id="sort"
              >
                <h2>Sort</h2>
                <span
                  className={"chevron-right " + (showSortPanel ? "rotate" : "")}
                ></span>
              </div>

              <div
                className={
                  "filter " + (showSortPanel ? "height-100" : "height-0")
                }
              >
                <div className="sort-section">
                  <h3>Sort Results By</h3>
                  <span>
                    <select
                      id="sort_by"
                      name="sort_by"
                      className="filter-dropdown w-100"
                    >
                      <option value="popularity.desc">
                        Popularity Descending
                      </option>
                      <option value="popularity.asc">
                        Popularity Ascending
                      </option>
                      <option value="vote_average.desc">
                        Rating Descending
                      </option>
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
            <div className="filter-panel my-3" onClick={filterPanelHandler}>
              <div
                className="filter-name d-flex align-self-center w-100 justify-content-between flex-nowrap"
                id="filters"
              >
                <h2>Filters</h2>
                <span
                  className={
                    "chevron-right " + (showFilterPanel ? "rotate" : "")
                  }
                ></span>
              </div>

              <div
                className={
                  "filter " + (showFilterPanel ? "height-100" : "height-0")
                }
              >
                <div className="availabilities-section">
                  <h3>Availabilities</h3>

                  <label className="w-100 d-inline-flex align-items-center">
                    <input
                      id="all_availabilities"
                      type="checkbox"
                      className="checkbox-input me-1"
                      name="all_availabilities"
                    />
                    <label
                      htmlFor="all_availabilities"
                      className="all_availabilities"
                    >
                      Search all availabilities?
                    </label>
                  </label>

                  <div className="d-none availabilities-hidden-section">
                    <label className="w-100 d-inline-flex align-items-center">
                      <input
                        id="stream"
                        type="checkbox"
                        className="checkbox-input me-1"
                        name="stream"
                      />
                      <label htmlFor="stream" className="stream">
                        Stream
                      </label>
                    </label>
                    <label className="w-100 d-inline-flex align-items-center">
                      <input
                        id="free"
                        type="checkbox"
                        className="checkbox-input me-1"
                        name="free"
                      />
                      <label htmlFor="free" className="free">
                        Free
                      </label>
                    </label>
                    <label className="w-100 d-inline-flex align-items-center">
                      <input
                        id="ads"
                        type="checkbox"
                        className="checkbox-input me-1"
                        name="ads"
                      />
                      <label htmlFor="ads" className="ads">
                        Ads
                      </label>
                    </label>
                    <label className="w-100 d-inline-flex align-items-center">
                      <input
                        id="rent"
                        type="checkbox"
                        className="checkbox-input me-1"
                        name="rent"
                      />
                      <label htmlFor="rent" className="rent">
                        Rent
                      </label>
                    </label>
                    <label className="w-100 d-inline-flex align-items-center">
                      <input
                        id="buy"
                        type="checkbox"
                        className="checkbox-input me-1"
                        name="buy"
                      />
                      <label htmlFor="buy" className="buy">
                        Buy
                      </label>
                    </label>
                  </div>
                </div>

                <div className="release-section">
                  <h3>Release Dates</h3>

                  <label className="w-100 d-inline-flex align-items-center">
                    <input
                      id="release"
                      type="checkbox"
                      className="checkbox-input me-1"
                      name="release"
                    />
                    <label htmlFor="release" className="release-checkbox">
                      Search all releases?
                    </label>
                  </label>

                  <div className="releases-hidden-section">
                    <div className="release-country-section">
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="countries"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="countries"
                        />
                        <label htmlFor="countries" className="countries">
                          Search all countries?
                        </label>
                      </label>

                      <div className="countries-input-section">
                        {/* <img src="https://flagcdn.com/w20/in.png" alt="india" /> */}
                      </div>
                    </div>
                    <div className="watch-provider-section">
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="premiere"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="premiere"
                        />
                        <label htmlFor="premiere" className="premiere">
                          Premiere
                        </label>
                      </label>
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="theatrical-limited"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="theatrical-limited"
                        />
                        <label
                          htmlFor="theatrical-limited"
                          className="theatrical-limited"
                        >
                          Theatrical (limited)
                        </label>
                      </label>
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="theatrical"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="theatrical"
                        />
                        <label htmlFor="theatrical" className="theatrical">
                          Theatrical
                        </label>
                      </label>
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="digital"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="digital"
                        />
                        <label htmlFor="digital" className="digital">
                          Digital
                        </label>
                      </label>
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="physical"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="physical"
                        />
                        <label htmlFor="physical" className="physical">
                          Physical
                        </label>
                      </label>
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="tv"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="tv"
                        />
                        <label htmlFor="tv" className="tv">
                          TV
                        </label>
                      </label>
                    </div>

                    <div className="date-picker-section d-none">
                      <div className="from-section">from</div>
                      <div className="to-section">to</div>
                    </div>
                  </div>
                </div>

                <div className="genre-section">
                  <h3>Genres</h3>

                  <div className="keyword-wrapper">
                    <ul>
                      {genreList.map((keyword) => {
                        return (
                          <li key={keyword.id}>
                            <a href="/">{keyword.name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="certificate-section">
                  <h3>Certification</h3>
                  <div className="certificate-wrapper">
                    <ul>
                      <li>
                        <a href="/">U</a>
                      </li>
                      <li>
                        <a href="/">UA</a>
                      </li>
                      <li>
                        <a href="/">A</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="language-section">
                  <h3>Language</h3>
                  <div className="language-wrapper">
                    <span>
                      <select
                        id="languages"
                        name="languages"
                        className="filter-dropdown w-100"
                      >
                        {languages.map((currentLanguage) => {
                          return (
                            <option
                              key={currentLanguage.iso_639_1}
                              value={currentLanguage.iso_639_1}
                            >
                              {" "}
                              {currentLanguage.english_name}{" "}
                            </option>
                          );
                        })}
                      </select>
                    </span>
                  </div>
                </div>

                <div className="user-score-section">
                  <h3>User Score</h3>
                </div>

                <div className="votes-section">
                  <h3>Minimum User Score</h3>
                </div>

                <div className="runtime-section">
                  <h3>Runtime</h3>
                </div>

                {/* <div className="keyword-search-section">
                  <h3>Keywords</h3>
                </div> */}
              </div>
            </div>
            <div className="filter-panel" onClick={filterPanelHandler}>
              <div
                className="filter-name d-flex align-self-center w-100 justify-content-between flex-nowrap"
                id="watch"
              >
                <h2>Where to Watch</h2>
                <span
                  className={
                    "chevron-right " + (showWatchPanel ? "rotate" : "")
                  }
                ></span>
              </div>

              <div
                className={
                  "filter " + (showWatchPanel ? "height-100" : "height-0")
                }
              >
                <div className="country-section">
                  <h6>country section</h6>

                  <div className="ott-provider-wrapper">
                    <ul className="ott-provider ">
                      {watchProvider.map((currentWatchProvider) => {
                        return (
                          <OverlayTrigger
                            placement="top"
                            key={currentWatchProvider.provider_id}
                            overlay={
                              <Tooltip id={`tooltip`}>
                                {currentWatchProvider.provider_name}
                              </Tooltip>
                            }
                          >
                            <li>
                              <a href="/" className="position-relative">
                                <img
                                  src={`https://www.themoviedb.org/t/p/original/t/p/original${currentWatchProvider.logo_path}`}
                                  width="50"
                                  height="50"
                                  alt={currentWatchProvider.provider_name}
                                />

                                <div>
                                  <span className="white-check check"></span>
                                </div>
                              </a>
                            </li>
                          </OverlayTrigger>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-btn-section mt-3">
              <button className="btn btn-custom w-100">Search</button>
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

          <div className="load-more-btn-section  w-100 mx-4">
            <button className="btn btn-custom btn-load w-100">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
