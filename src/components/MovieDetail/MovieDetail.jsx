import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";
import ReviewCard from "../ReviewCard/ReviewCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import axios from "axios";
import "./MovieDetail.css";

const MovieDetail = () => {
  const params = useParams();
  // console.log(params.id);

  // const initialValue = {
  //   poster_path: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2",
  //   backdrop_path:
  //     "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",
  //   homepage: "",
  //   budget: 0,
  //   genres: [],
  //   original_title: "",
  //   overview: "",
  //   revenue: "",
  //   status: "",
  //   tagline: "",
  //   release_date: "",
  //   runtime:"",
  //   popularity: "vote_average" * 10,
  // };

  const [currentMovieData, setCurrentMovieData] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [recommendationData, setRecommendationData] = useState([]);
  const [castData, setCastData] = useState([]);
  const [watchProvider, setWatchProvider] = useState({});

  useEffect(() => {
    const API_KEY = "a192f556a534b82d1e2eb625272ad9aa";

    const detailsURL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`;

    const keywordURL = `https://api.themoviedb.org/3/movie/${params.id}/keywords?api_key=${API_KEY}`;

    const recommendationURL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;

    const castURL = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}`;

    const watchProvider = `https://api.themoviedb.org/3/movie/${params.id}/watch/providers?api_key=${API_KEY}`;

    axios
      .get(detailsURL)
      .then((response) => response.data)
      .then((movie) =>
        setCurrentMovieData({
          poster_path:
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
            movie.poster_path,
          backdrop_path:
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
            movie.backdrop_path,
          title: movie.title,
          homepage: movie.homepage,
          budget: movie.budget,
          genres: movie.genres,
          original_title: movie.original_title,
          overview: movie.overview,
          revenue: movie.revenue,
          status: movie.status,
          tagline: movie.tagline,
          release_date: movie.release_date,
          runtime: movie.runtime,
          popularity: movie.vote_average * 10,
        })
      );

    axios
      .get(keywordURL)
      .then((response) => setKeywords(response.data.keywords));

    axios
      .get(recommendationURL)
      .then((response) => setRecommendationData(response.data.results));

    axios.get(castURL).then((response) => setCastData(response.data.cast));

    axios
      .get(watchProvider)
      .then((response) => {
        return response.data.results["IN"]})
      .then((data) => {
        console.log(data);
        if (data && data.flatrate) {
          console.log("i m exe");
          setWatchProvider({
            providerName: data.flatrate[0].provider_name,
            providerLogo: `https://www.themoviedb.org/t/p/original${data.flatrate[0].logo_path}`,
            watchText : "Now Streaming",
          });
        }
        else if(data && data.buy){
           setWatchProvider({
             providerName:data.buy[0].provider_name,
             providerLogo: `https://www.themoviedb.org/t/p/original${data.buy[0].logo_path}`,
             watchText : "Available to Rent or Buy"
           });
        }
        
        else {
          setWatchProvider({});
        }
      });
  }, [params.id]);

  // console.log(watchProvider);

  return (
    <>
      <div
        className="movie-header-section"
        style={{
          backgroundImage: `url(${currentMovieData.backdrop_path})`,
        }}
      >
        <div className="container-fluid">
          <div className="container d-flex text-white py-4">
            <div className="left-section ">
            
                <div className="poster_wrapper">
                  <div className="poster position-relative ">
                    <div className="image_content">
                      <img
                        className="poster image-hover"
                        src={currentMovieData.poster_path}
                        alt={currentMovieData.title}
                      />
                      <div className="image-hover-background">
                        <a href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="expand-icon"
                          >
                            <path
                              fill="#ffffff"
                              id="fullscreen"
                              d="M13.72156,12.06732a.5.5,0,0,1-.06812.62219l-.96374.96375a.5.5,0,0,1-.6222.06811L7.89624,11.064,6.19342,12.76642a.49983.49983,0,0,1-.847-.27521L4.10779,4.67969a.49976.49976,0,0,1,.57184-.57184L12.491,5.34619a.50011.50011,0,0,1,.27527.8476L11.06378,7.896Zm5.58874,1.58594a.5.5,0,0,0,.6222.06811L24.10376,11.064l1.70282,1.70246a.49983.49983,0,0,0,.847-.27521l1.23858-7.81152a.49976.49976,0,0,0-.57184-.57184L19.509,5.34619a.50011.50011,0,0,0-.27527.8476L20.93622,7.896l-2.65778,4.17132a.5.5,0,0,0,.06812.62219Zm-6.6206,4.69348a.5.5,0,0,0-.6222-.06811L7.89624,20.936,6.19342,19.23358a.49983.49983,0,0,0-.847.27521L4.10779,27.32031a.49976.49976,0,0,0,.57184.57184l7.8114-1.23834a.50011.50011,0,0,0,.27527-.8476L11.06378,24.104l2.65778-4.17132a.5.5,0,0,0-.06812-.62219Zm13.11688.88684L24.10376,20.936,19.9325,18.27863a.5.5,0,0,0-.6222.06811l-.96374.96375a.5.5,0,0,0-.06812.62219L20.93622,24.104,19.2337,25.80621a.50011.50011,0,0,0,.27527.8476l7.8114,1.23834a.49976.49976,0,0,0,.57184-.57184l-1.23858-7.81152A.49983.49983,0,0,0,25.80658,19.23358Z"
                            />
                          </svg>
                          Expand
                        </a>
                      </div>
                    </div>
                  </div>
                  {Object.keys(watchProvider).length !== 0 && (
                    <div className="ott_offer">
                      <div className="text_wrapper">
                        <div className="movie-provider">
                          <img
                            src={watchProvider.providerLogo}
                            width="36"
                            height="36"
                            alt={`Now streaming on ${watchProvider.providerName}`}
                          />
                        </div>
                        <div className="text">
                          <span>
                            <h6 className="now-streaming"> {watchProvider.watchText} </h6>
                            <h6 className="watch-now">
                              <a
                                className="no_click"
                                href="/"
                                title={`Now streaming on ${watchProvider.providerName}`}
                              >
                                Watch Now
                              </a>
                            </h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
             
            </div>
            <div className="right-section px-5 ">
              <div className="movie-title-section">
                <h2>
                  <a href="/">{currentMovieData.title}</a>
                  <span className="release_year">
                    (
                    {currentMovieData.release_date &&
                      currentMovieData.release_date.slice(0, 4)}
                    )
                  </span>
                </h2>

                <div className="facts">
                  <span className="certification">R</span>

                  <span className="release">
                    {currentMovieData.release_date} (US)
                  </span>

                  <span className="genres">
                    {currentMovieData.genres &&
                      currentMovieData.genres.map((genreObj) => {
                        return (
                          <a key={genreObj.id} href="/">
                            {genreObj.name},
                          </a>
                        );
                      })}
                  </span>

                  <span className="runtime">{currentMovieData.runtime} m</span>
                </div>

                <ul className="actions">
                  <li className="chart">
                    <div className="circular_progress_bar_large">
                      <CircularProgressbarWithChildren
                        value={80}
                        styles={buildStyles({
                          pathColor: "green",
                          trailColor: "rgb(28 ,97 ,147)",
                          backgroundColor: "#032b48",
                        })}
                      >
                        <div className="circular_progress_bar_data d-flex">
                          <span>{currentMovieData.popularity}</span>
                          <sup>%</sup>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className="text">
                      User
                      <br />
                      Score
                    </div>
                  </li>

                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </a>
                  </li>
                  <li className="icon-list">
                    <a className="no_click" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </a>
                  </li>
                  <li className="play-trailer">
                    <a className="d-flex" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="fa-play"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Play Trailer
                    </a>
                  </li>
                </ul>

                <div className="header_info">
                  <h3 className="tagline">{currentMovieData.tagline}</h3>

                  <h3>Overview</h3>
                  <div className="overview">
                    <p>{currentMovieData.overview}</p>
                  </div>

                  {/* <ol className="people_section">
                    <li className="profile">
                      <p>
                        <a href="/">Adam Berg</a>
                      </p>
                      <p className="character">Director, Screenplay</p>
                    </li>

                    <li className="profile">
                      <p>
                        <a href="/">Jerker Virdborg</a>
                      </p>
                      <p className="character">Novel</p>
                    </li>

                    <li className="profile">
                      <p>
                        <a href="/">Pelle Rådström</a>
                      </p>
                      <p className="character">Writer</p>
                    </li>
                  </ol> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-detail-wrapper container p-0">
        <div className="movie-detail-left-section">
          <div className="bill-section ">
            <section className="bill-section-content position-relative">
              <h3>Top Bill Cast</h3>
              <div className="cast-section should_fade is_fading">
                <div className="cast-scroll-section">
                  {castData &&
                    castData.slice(0, 9).map((cast) => {
                      return (
                        <CastCard
                          key={cast.id}
                          id={cast.id}
                          cast_poster_path={
                            cast.profile_path
                              ? `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`
                              : null
                          }
                          cast_name={cast.name}
                          cast_character={cast.character}
                          gender={cast.gender}
                        />
                      );
                    })}
                </div>
              </div>
            </section>
          </div>

          <div className="social-section  ">
            <section className="social-panel panel">
              <section className="review">
                <div className="social-menu">
                  <h3 className="pe-4">Social</h3>
                  <ul>
                    <li className="social-menu-active">
                      <a id="reviews" className="media_panel" href="/">
                        Reviews <span>1</span>
                      </a>
                    </li>
                    <li className="">
                      <a id="discussions" className="media_panel" href="/">
                        Discussions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="review-section">
                  <div className="inner-content">
                    <ReviewCard />
                  </div>

                  <p className="new_button ">
                    <a href="/movie/568124-encanto/reviews">Read All Reviews</a>
                  </p>
                </div>
              </section>
            </section>
          </div>

          <div className="recommendation-section container p-0">
            <section className="recommendation-content">
              <div className="section-heading">
                <h3>Recommendations</h3>
              </div>

              <div className="scroll-wrapper position-relative">
                <div className="scroll-content should_fade  is_fading">
                  <div className="column-content ">
                    {recommendationData.length !== 0 ? (
                      recommendationData.map((recommendationMovie) => {
                        return (
                          <RecommendationCard
                            id={recommendationMovie.id}
                            key={recommendationMovie.id}
                            title={recommendationMovie.title}
                            release_date={recommendationMovie.release_date}
                            poster_path={`https://www.themoviedb.org/t/p/w250_and_h141_face${recommendationMovie.backdrop_path}`}
                            popularity={recommendationMovie.vote_average * 10}
                          />
                        );
                      })
                    ) : (
                      <p>
                        We don't have enough data to suggest any movies based on
                        RRR. You can help by rating movies you've seen.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="movie-detail-right-section">
          <div className="social-link-container">
            <div>
              <a
                className="social_link"
                title="Visit Facebook"
                href="https://www.facebook.com/EncantoMovie"
                target="_blank"
                rel="noreferrer"
                data-role="tooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    id="facebook"
                    d="M27.99993,5.32469v21.3509a1.32468,1.32468,0,0,1-1.32457,1.32461H20.5595V18.7061h3.11971l.46705-3.6221H20.5595V12.77145c0-1.0487.2912-1.76335,1.79509-1.76335l1.918-.00088V7.76765a25.66255,25.66255,0,0,0-2.79492-.14271c-2.76537,0-4.6586,1.688-4.6586,4.78787V15.084H13.69145v3.6221H16.8191v9.2941H5.32455a1.32452,1.32452,0,0,1-1.32462-1.32461V5.32469A1.32442,1.32442,0,0,1,5.32455,4.00007H26.67536A1.32457,1.32457,0,0,1,27.99993,5.32469Z"
                    fill="#262626"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                className="social_link"
                title="Visit Twitter"
                href="https://twitter.com/EncantoMovie"
                target="_blank"
                rel="noreferrer"
                data-role="tooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    id="twitter"
                    d="M26.32865,10.20428c.01043.22891.01043.45778.01043.6867A15.18194,15.18194,0,0,1,2.99214,23.68808a10.26487,10.26487,0,0,0,1.26929.07283A10.70029,10.70029,0,0,0,10.8889,21.472a5.33486,5.33486,0,0,1-4.9836-3.70387,5.36636,5.36636,0,0,0,2.40336-.09364,5.34632,5.34632,0,0,1-4.2761-5.23331v-.07283a5.39627,5.39627,0,0,0,2.41374.6659A5.35659,5.35659,0,0,1,4.79205,5.90738,15.1498,15.1498,0,0,0,15.78924,11.484a5.89821,5.89821,0,0,1-.13524-1.21727,5.33642,5.33642,0,0,1,9.22847-3.65189,10.61188,10.61188,0,0,0,3.3918-1.2901A5.368,5.368,0,0,1,25.9229,8.27951a10.81127,10.81127,0,0,0,3.06924-.84274A10.868,10.868,0,0,1,26.32865,10.20428Z"
                    fill="#262626"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                className="social_link"
                title="Visit Instagram"
                href="https://instagram.com/encantomovie/"
                target="_blank"
                rel="noreferrer"
                data-role="tooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    id="instagram"
                    d="M16,6.16216c3.20414,0,3.58366.01222,4.849.06995a6.64012,6.64012,0,0,1,2.22824.4132,3.97394,3.97394,0,0,1,2.27743,2.27743,6.64009,6.64009,0,0,1,.4132,2.22822c.05773,1.26538.06995,1.6449.06995,4.849s-.01222,3.58366-.06995,4.849a6.64012,6.64012,0,0,1-.4132,2.22824,3.97394,3.97394,0,0,1-2.27743,2.27743,6.64012,6.64012,0,0,1-2.22824.4132c-1.26518.05773-1.64466.06995-4.849.06995s-3.58384-.01222-4.849-.06995a6.64012,6.64012,0,0,1-2.22824-.4132,3.97394,3.97394,0,0,1-2.27743-2.27743,6.64009,6.64009,0,0,1-.4132-2.22822c-.05773-1.26538-.06995-1.6449-.06995-4.849s.01222-3.58366.06995-4.849a6.64012,6.64012,0,0,1,.4132-2.22824A3.97394,3.97394,0,0,1,8.92274,6.64531a6.64009,6.64009,0,0,1,2.22822-.4132c1.26538-.05773,1.6449-.06995,4.849-.06995M16,4c-3.259,0-3.66766.0138-4.94758.0722A8.80773,8.80773,0,0,0,8.13953,4.63,6.136,6.136,0,0,0,4.63,8.13953a8.80773,8.80773,0,0,0-.55779,2.91289C4.0138,12.33234,4,12.741,4,16s.0138,3.66766.0722,4.94758A8.80773,8.80773,0,0,0,4.63,23.86047,6.136,6.136,0,0,0,8.13953,27.37a8.80773,8.80773,0,0,0,2.91289.55779C12.33234,27.98621,12.741,28,16,28s3.66766-.01379,4.94758-.0722A8.80773,8.80773,0,0,0,23.86047,27.37,6.136,6.136,0,0,0,27.37,23.86047a8.80773,8.80773,0,0,0,.55779-2.91289C27.9862,19.66766,28,19.259,28,16s-.0138-3.66766-.0722-4.94758A8.80773,8.80773,0,0,0,27.37,8.13953,6.136,6.136,0,0,0,23.86047,4.63a8.80773,8.80773,0,0,0-2.91289-.55779C19.66766,4.0138,19.259,4,16,4Zm0,5.83784A6.16216,6.16216,0,1,0,22.16216,16,6.16216,6.16216,0,0,0,16,9.83784ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20ZM22.40563,8.15437a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,22.40563,8.15437Z"
                    fill="#262626"
                  />
                </svg>
              </a>
            </div>

            <div className="justwatch-wrapper">
              <a
                className="social_link just_watch"
                title=""
                href="https://www.justwatch.com/in/movie/encanto"
                target="_blank"
                rel="noreferrer"
                data-role="tooltip"
              >
                <span className="glyphicons_v2 justwatch"></span>
              </a>
            </div>

            <div>
              <a
                className="social_link"
                title="Visit Homepage"
                href="https://movies.disney.com/encanto"
                target="_blank"
                rel="noreferrer"
                data-role="tooltip"
              >
                <svg
                  id="glyphicons-basic"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    id="link"
                    d="M28,13.5v5A4.5,4.5,0,0,1,23.5,23h-7A4.5,4.5,0,0,1,12,18.5V15a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v3.5A1.5,1.5,0,0,0,16.5,20h7A1.5,1.5,0,0,0,25,18.5v-5A1.5,1.5,0,0,0,23.5,12H21.86035a.49994.49994,0,0,1-.4743-.34186l-.66669-2A.5.5,0,0,1,21.19373,9H23.5A4.5,4.5,0,0,1,28,13.5ZM10.614,20.34186A.49994.49994,0,0,0,10.13965,20H8.5A1.5,1.5,0,0,1,7,18.5v-5A1.5,1.5,0,0,1,8.5,12h7A1.5,1.5,0,0,1,17,13.5V17a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V13.5A4.5,4.5,0,0,0,15.5,9h-7A4.5,4.5,0,0,0,4,13.5v5A4.5,4.5,0,0,0,8.5,23h2.30627a.5.5,0,0,0,.47437-.65814Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="movie-details-container pt-4">
            <div className="movie-status d-flex">
              <p>
                <strong>
                  Status
                  <br />
                </strong>
                {currentMovieData.status}
              </p>
            </div>

            <div className="movie-language d-flex">
              <p>
                <strong>
                  Original Title
                  <br />
                </strong>
                {currentMovieData.original_title}
              </p>
            </div>
            <div className="movie-budget d-flex">
              <p>
                <strong>
                  Budget
                  <br />
                </strong>
                {currentMovieData.budget}
              </p>
            </div>
            <div className="movie-revenue d-flex">
              <p>
                <strong>
                  Revenue
                  <br />
                </strong>
                {currentMovieData.revenue}
              </p>
            </div>
          </div>

          <div className="keyword-container">
            <h4>Keywords</h4>
            <ul>
              {keywords.map((keywordObj) => {
                return (
                  <li key={keywordObj.id}>
                    <a href="/">{keywordObj.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
