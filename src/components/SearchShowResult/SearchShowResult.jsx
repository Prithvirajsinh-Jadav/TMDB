import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchShowResult.css";

const SearchShowResult = () => {
  const [searchParams] = useSearchParams();
  const [inputBox, setInputBox] = useState("");
  console.log(searchParams.get("query"));
  return (
    <div className="search-section">
      <div className="search-box-section-wrapper container-fluid p-0">
        <div className="search-box-section container p-0">
          <form
            id="search-form"
            action="/search"
            method="get"
            className="d-flex"
          >
            <span className="search-icon"></span>
            <input
              id="search_v4"
              name="query"
              type="text"
              placeholder="Search for a movie, tv show, person..."
              value={inputBox}
              className="search-input-box "
              onChange={(e) => setInputBox(e.target.value)}
            ></input>
          </form>
        </div>
      </div>
      <div className="search-section-wrapper container p-0 my-4 d-flex">
        <div className="search-left-section">
          <div className="search-left-section-content ">
            <h3 className="search-heading">Search Results</h3>
            <div id="search_menu_scroller" className="search-panel-container">
              <ul className="search-panel">
                <li className="selected">
                  <a
                    id="movie"
                    href="/search/movie?query=the batman"
                    className="search_tab"
                    title="Movies"
                    alt="Movies"
                  >
                    Movies
                  </a>
                  <span>0</span>
                </li>

                <li className="">
                  <a
                    id="tv"
                    href="/search/tv?query=the batman"
                    className="search_tab "
                    title="TV Shows"
                    alt="TV Shows"
                  >
                    TV Shows
                  </a>
                  <span>0</span>
                </li>

                <li className="">
                  <a
                    id="collection"
                    href="/search/collection?query=the batman"
                    className="search_tab "
                    title="Collections"
                    alt="Collections"
                  >
                    Collections
                  </a>
                  <span>0</span>
                </li>

                <li className="">
                  <a
                    id="keyword"
                    href="/search/keyword?query=the batman"
                    className="search_tab "
                    title="Keywords"
                    alt="Keywords"
                  >
                    Keywords
                  </a>
                  <span>0</span>
                </li>

                <li className="">
                  <a
                    id="person"
                    href="/search/person?query=the batman"
                    className="search_tab "
                    title="People"
                    alt="People"
                  >
                    People
                  </a>
                  <span>0</span>
                </li>

                <li className="">
                  <a
                    id="company"
                    href="/search/company?query=the batman"
                    className="search_tab "
                    title="Companies"
                    alt="Companies"
                  >
                    Companies
                  </a>
                  <span>0</span>
                </li>

                <li className="">
                  <a
                    id="network"
                    href="/search/network?query=the batman"
                    className="search_tab "
                    title="Networks"
                    alt="Networks"
                  >
                    Networks
                  </a>
                  <span>0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search-right-section ms-4 w-100">
          <div className="search-right-section-wrapper">
            <div className="card search-content-card d-flex flex-row">
              <div className="image-container">
                <img
                  className="search-image"
                  src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                  alt="The Batman"
                />
              </div>
              <div className="search-detail d-flex justify-content-center flex-column">
                <div className="search-detail-wrapper">
                  <div className="search-detail-container">
                    <h2>The Batman</h2>
                    <span className="release-date">March 1, 2022</span>
                  </div>
                </div>

                <div className="overview">
                  <p>
                    In his second year of fighting crime In his second year of
                    fighting crime, Batman uncovers corruption in Gotham City
                    that connects to his own family while facing a serial killer
                    known as the Riddler.In his second year of fighting crime,
                    Batman uncovers corruption in Gotham City that connects to
                    his own family while facing a serial killer known as the
                    Riddler.,
                  </p>
                </div>
              </div>
            </div>
            <div className="card search-content-card d-flex flex-row">
              <div className="image-container">
                <img
                  className="search-image"
                  src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                  alt="The Batman"
                />
              </div>
              <div className="search-detail d-flex justify-content-center flex-column">
                <div className="search-detail-wrapper">
                  <div className="search-detail-container">
                    <h2>The Batman</h2>
                    <span className="release-date">March 1, 2022</span>
                  </div>
                </div>

                <div className="overview">
                  <p>
                    In his second year of fighting crime In his second year of
                    fighting crime, Batman uncovers corruption in Gotham City
                    that connects to his own family while facing a serial killer
                    known as the Riddler.In his second year of fighting crime,
                    Batman uncovers corruption in Gotham City that connects to
                    his own family while facing a serial killer known as the
                    Riddler.,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShowResult;
