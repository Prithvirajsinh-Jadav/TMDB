import React, { useState, useEffect } from "react";
import "./CategorySection.css";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { languages } from "../language";
import { country } from "../country";

import MovieCategoryRightSection from "../MovieCategoryRightSection/MovieCategoryRightSection";
import CategoryWatchProvider from "../CategoryWatchProvider/CategoryWatchProvider";
import TvCategoryRightSection from "../TvCategoryRightSection/TvCategoryRightSection";

const CategorySection = () => {
  const [genreList, setGenreList] = useState([]);

  const params = useParams();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const genreKeywordURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    axios
      .get(genreKeywordURL)
      .then((response) => setGenreList(response.data.genres));
  }, []);

  const [showSortPanel, setShowSortPanel] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [showWatchPanel, setShowWatchPanel] = useState(false);
  const [sortValue, setSortValue] = useState("popularity.desc");
  const [currentSearchCountry, setCurrentSearchCountry] = useState("IN");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [currentWatchCountry, setCurrentWatchCountry] = useState("IN");
  const [activeGenreList, setActiveGenreList] = useState([]);
  const [activeCategoryWatchProvider, setActiveCategoryWatchProvider] = useState([])

  const filterPanelHandler = (event) => {
    if (event.target.id === "sort") {
      setShowSortPanel((prevState) => !prevState);
    } else if (event.target.id === "filters") {
      setShowFilterPanel((prevState) => !prevState);
    } else if (event.target.id === "watch") {
      setShowWatchPanel((prevState) => !prevState);
    }
  };

  //  console.log(watchProvider);
  // const [showAvailibility, setShowAvailibility] = useState(false);
  // const [availibilityChecked, setAvailibilityChecked] = useState(true);
  // const [streamChecked, setStreamChecked] = useState(true);
  // const [freeChecked, setFreeChecked] = useState(true);
  // const [adsChecked, setAdsChecked] = useState(true);
  // const [rentChecked, setRentChecked] = useState(true);
  // const [buyChecked, setBuyChecked] = useState(true);

  const initialState = {
    all_availabilities: true,
    stream: true,
    free: true,
    ads: true,
    rent: true,
    buy: true,
    release: true,
    countries: true,
    premiere: true,
    theatrical: true,
    theatricalLimited: true,
    digital: true,
    physical: true,
    tv: true,
  };

  const [isChecked, setIsChecked] = useState(initialState);

  const sortHandler = (e) => {
    setSortValue(e.target.value);
  };

  const checkBoxHandler = (e) => {
    const { name } = e.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const searchCountryHandler = (e) => {
    setCurrentSearchCountry(e.target.value);
  };

  const watchCountryHandler = (e) => {
    setCurrentWatchCountry(e.target.value);
  };

  const keywordsHandler = (e) => {
    const {id,classList} = e.target;
    classList.toggle("keyword-active");
    if(activeGenreList.includes(`${id}`)){
      setActiveGenreList(activeGenreList.filter(item => item !== id))
    }else{
      setActiveGenreList((prevState) => ([...prevState , `${id}`]))
    }
  }

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
                      onChange={sortHandler}
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
                      <option value="original_title.asc">Title (A-Z)</option>
                      <option value="original_title.desc">Title (Z-A)</option>
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
                      onChange={checkBoxHandler}
                      checked={isChecked.all_availabilities}
                    />
                    <label
                      htmlFor="all_availabilities"
                      className="all_availabilities"
                    >
                      Search all availabilities?
                    </label>
                  </label>

                  <div
                    className={
                      "availabilities-hidden-section " +
                      (isChecked.all_availabilities ? "d-none" : "")
                    }
                  >
                    <label className="w-100 d-inline-flex align-items-center">
                      <input
                        id="stream"
                        type="checkbox"
                        className="checkbox-input me-1"
                        name="stream"
                        onChange={checkBoxHandler}
                        checked={isChecked.stream}
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
                        onChange={checkBoxHandler}
                        checked={isChecked.free}
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
                        onChange={checkBoxHandler}
                        checked={isChecked.ads}
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
                        onChange={checkBoxHandler}
                        checked={isChecked.rent}
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
                        onChange={checkBoxHandler}
                        checked={isChecked.buy}
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
                      checked={isChecked.release}
                      onChange={checkBoxHandler}
                    />
                    <label htmlFor="release" className="release-checkbox">
                      Search all releases?
                    </label>
                  </label>

                  <div
                    className={
                      "releases-hidden-section " +
                      (isChecked.release ? "d-none" : "")
                    }
                  >
                    <div className="release-country-section">
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="countries"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="countries"
                          checked={isChecked.countries}
                          onChange={checkBoxHandler}
                        />
                        <label htmlFor="countries" className="countries">
                          Search all countries?
                        </label>
                      </label>

                      <div
                        className={
                          "countries-input-section py-2 " +
                          (isChecked.countries ? "d-none" : "")
                        }
                      >
                        <span>
                          <select
                            id="searchCountries"
                            name="searchCountries"
                            className="filter-dropdown w-100"
                            onChange={searchCountryHandler}
                            value={currentSearchCountry}
                          >
                            {country.map((currentLanguage) => {
                              return (
                                <option
                                  key={currentLanguage.iso_3166_1}
                                  value={currentLanguage.iso_3166_1}
                                >
                                  {currentLanguage.english_name}{" "}
                                </option>
                              );
                            })}
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className="watch-provider-section">
                      <label className="w-100 d-inline-flex align-items-center">
                        <input
                          id="premiere"
                          type="checkbox"
                          className="checkbox-input me-1"
                          name="premiere"
                          checked={isChecked.premiere}
                          onChange={checkBoxHandler}
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
                          name="theatricalLimited"
                          checked={isChecked.theatricalLimited}
                          onChange={checkBoxHandler}
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
                          checked={isChecked.theatrical}
                          onChange={checkBoxHandler}
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
                          checked={isChecked.digital}
                          onChange={checkBoxHandler}
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
                          checked={isChecked.physical}
                          onChange={checkBoxHandler}
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
                          checked={isChecked.tv}
                          onChange={checkBoxHandler}
                        />
                        <label htmlFor="tv" className="tv">
                          TV
                        </label>
                      </label>
                    </div>

                    <div className="date-picker-section">
                      <div className="from-section d-flex justify-content-between">
                        <div>
                          <span>from</span>
                        </div>

                        <div className="date-picker-container d-flex justify-content-end">
                          <DatePicker
                            selected={fromDate}
                            onChange={(date) => setFromDate(date)}
                          />
                        </div>
                      </div>
                      <div className="to-section d-flex justify-content-between mt-2">
                        <div>
                          <span>to</span>
                        </div>
                        <div className="date-picker-container d-flex justify-content-end">
                          <DatePicker
                            selected={toDate}
                            onChange={(date) => setToDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="genre-section">
                  <h3>Genres</h3>

                  <div className="keyword-wrapper">
                    <ul>
                      {genreList.map((keyword) => {
                        return (
                          <li key={keyword.id} id={keyword.id} onClick={keywordsHandler}>
                            {keyword.name}
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
                      <li>U</li>
                      <li>UA</li>
                      <li>A</li>
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
                  <span>
                    <select
                      id="country"
                      name="countries"
                      className="filter-dropdown w-100"
                      onChange={watchCountryHandler}
                      value={currentWatchCountry}
                    >
                      {country.map((currentLanguage) => {
                        return (
                          <option
                            key={currentLanguage.iso_3166_1}
                            value={currentLanguage.iso_3166_1}
                          >
                            {currentLanguage.english_name}{" "}
                          </option>
                        );
                      })}
                    </select>
                  </span>

                  <CategoryWatchProvider
                    currentWatchCountry={currentWatchCountry}
                    activeCategoryWatchProvider={activeCategoryWatchProvider}
                    setActiveCategoryWatchProvider={setActiveCategoryWatchProvider}
                  />
                </div>
              </div>
            </div>

            <div className="search-btn-section mt-3">
              <button className="btn btn-custom w-100">Search</button>
            </div>
          </div>
        </div>

        <div className="right-category-section w-80 d-flex flex-wrap justify-content-center h-100">
          {params.isMovie === "movie" ? (
            <MovieCategoryRightSection category={params.category} />
          ) : (
            <TvCategoryRightSection category={params.category} />
          )}

          <div className="load-more-btn-section  w-100 mx-4">
            <button className="btn btn-custom btn-load w-100">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
