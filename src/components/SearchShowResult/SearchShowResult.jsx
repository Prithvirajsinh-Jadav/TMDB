import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useParams } from "react-router-dom";
import { GetSearchQueryData } from "../../api";
import SearchShowResultDataCard from "./SearchShowResultDataCard/SearchShowResultDataCard";
import "./SearchShowResult.css";
import ReactPaginate from "react-paginate";
import SearchShowPeopleDataCard from "./SearchShowPeopleDataCard/SearchShowPeopleDataCard";

const SearchShowResult = () => {
  const [searchParams] = useSearchParams();
  const [inputBox, setInputBox] = useState("");
  const query = searchParams.get("query");
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [searchTvData, setSearchTvData] = useState([]);
  const [searchCollectionData, setSearchCollectionData] = useState([]);
  const [searchPersonData, setSearchPersonData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const params = useParams();

  useEffect(() => {
    GetSearchQueryData("movie", query, 1).then((response) =>
      setSearchMovieData(response.data)
    );
    GetSearchQueryData("tv", query, 1).then((response) =>
      setSearchTvData(response.data)
    );

    GetSearchQueryData("collection", query, 1).then((response) =>
      setSearchCollectionData(response.data)
    );

    GetSearchQueryData("person", query, 1).then((response) =>
      setSearchPersonData(response.data)
    );
  }, [query]);

  useEffect(() => {
    setPageNumber(0);

    getSearchData(params.currentSearchTab, 0);
  }, [params.currentSearchTab]);

  const getSearchData = (currentSearchTab, selected) => {
    switch (currentSearchTab) {
      case "movie":
        GetSearchQueryData("movie", query, selected + 1).then((response) =>
          setSearchMovieData(response.data)
        );
        break;
      case "tv":
        GetSearchQueryData("tv", query, selected + 1).then((response) =>
          setSearchTvData(response.data)
        );

        break;
      case "collection":
        GetSearchQueryData("collection", query, selected + 1).then((response) =>
          setSearchCollectionData(response.data)
        );
        break;
      case "people":
        GetSearchQueryData("person", query, selected + 1).then((response) =>
          setSearchPersonData(response.data)
        );
        console.log(searchPersonData);
        break;
      default:
        GetSearchQueryData("movie", query, selected + 1).then((response) =>
          setSearchMovieData(response.data)
        );
    }
  };

  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
    getSearchData(params.currentSearchTab, selected);
  };


  const pageCount =
    params.currentSearchTab === "movie"
      ? searchMovieData.total_pages
      : params.currentSearchTab === "tv"
      ? searchTvData.total_pages
      : params.currentSearchTab === "collection"
      ? searchCollectionData.total_pages
      : searchPersonData.total_pages;

  // console.log(pageCount)

  return (
    <div className="search-section">
      <div className="search-box-section-wrapper container-fluid p-0">
        <div className="search-box-section container p-0">
          <form
            id="search-form"
            action="/search/movie"
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
                <li
                  className={
                    "" + (params.currentSearchTab === "movie" ? "selected" : "")
                  }
                >
                  <Link
                    id="movie"
                    to={`/search/movie?query=${query}`}
                    className="search_tab"
                    title="Movies"
                    alt="Movies"
                  >
                    Movies
                  </Link>
                  <span>{searchMovieData.total_results}</span>
                </li>

                <li
                  className={
                    "" + (params.currentSearchTab === "tv" ? "selected" : "")
                  }
                >
                  <Link
                    id="tv"
                    to={`/search/tv?query=${query}`}
                    className="search_tab "
                    title="TV Shows"
                    alt="TV Shows"
                  >
                    TV Shows
                  </Link>
                  <span>{searchTvData.total_results}</span>
                </li>

                <li
                  className={
                    "" +
                    (params.currentSearchTab === "collection" ? "selected" : "")
                  }
                >
                  <Link
                    id="collection"
                    to={`/search/collection?query=${query}`}
                    className="search_tab "
                    title="Collections"
                    alt="Collections"
                  >
                    Collections
                  </Link>
                  <span>{searchCollectionData.total_results}</span>
                </li>

                <li
                  className={
                    "" +
                    (params.currentSearchTab === "people" ? "selected" : "")
                  }
                >
                  <Link
                    id="person"
                    to={`/search/people?query=${query}`}
                    className="search_tab "
                    title="People"
                    alt="People"
                  >
                    People
                  </Link>
                  <span>{searchPersonData.total_results}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search-right-section ms-4 w-100">
          <div className="search-right-section-wrapper">
            <div className="search-right-section-content-wrapper">
              {params.currentSearchTab === "movie" &&
                searchMovieData.results &&
                searchMovieData.results.map((currentSearchMovieData) => (
                  <SearchShowResultDataCard
                    key={currentSearchMovieData.id}
                    poster_path={currentSearchMovieData.poster_path}
                    title={currentSearchMovieData.title}
                    release_date={currentSearchMovieData.release_date}
                    overview={currentSearchMovieData.overview}
                  />
                ))}

              {params.currentSearchTab === "tv" &&
                searchTvData.results &&
                searchTvData.results.map((currentSearchTvData) => (
                  <SearchShowResultDataCard
                    key={currentSearchTvData.id}
                    poster_path={currentSearchTvData.poster_path}
                    title={currentSearchTvData.name}
                    release_date={currentSearchTvData.first_air_date}
                    overview={currentSearchTvData.overview}
                  />
                ))}

              {params.currentSearchTab === "collection" &&
                searchCollectionData.results &&
                searchCollectionData.results.map(
                  (currentSearchCollectionData) => (
                    <SearchShowResultDataCard
                      key={currentSearchCollectionData.id}
                      poster_path={currentSearchCollectionData.poster_path}
                      title={currentSearchCollectionData.name}
                      release_date=""
                      overview={currentSearchCollectionData.overview}
                    />
                  )
                )}

              {params.currentSearchTab === "people" &&
                searchPersonData.results &&
                searchPersonData.results.map((currentSearchPeopleData) => (
                  <SearchShowPeopleDataCard
                    key={currentSearchPeopleData.id}
                    profile_path={currentSearchPeopleData.profile_path}
                    name={currentSearchPeopleData.name}
                    department={currentSearchPeopleData.known_for_department}
                    known_for_array={currentSearchPeopleData.known_for}
                  />
                ))}
            </div>
            <div className="pagination-wrapper">
              <div
                className={
                  "pagination d-flex justify-content-center mt-4 " +
                  (pageCount <= 1 ? "d-none" : "")
                }
              >
                <ReactPaginate
                  previousLabel="< Previous"
                  nextLabel="Next >"
                  pageCount={
                    params.currentSearchTab === "movie"
                      ? searchMovieData.total_pages
                      : params.currentSearchTab === "tv"
                      ? searchTvData.total_pages
                      : params.currentSearchTab === "collection"
                      ? searchCollectionData.total_pages
                      : searchPersonData.total_pages
                  }
                  onPageChange={pageChangeHandler}
                  pageRangeDisplayed={7}
                  activeClassName={"active-page "}
                  disabledClassName={"disable-page "}
                  previousLinkClassName="previous-page"
                  nextLinkClassName="next-page"
                  containerClassName="page-container"
                  forcePage={pageNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShowResult;
