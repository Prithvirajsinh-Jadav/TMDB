import React, { useState, useEffect } from "react";
import { GetDetails } from "../../api";
import TvKeywordComponent from "../TvKeywordComponent/TvKeywordComponent";
import ShimmerKeyword from "../ShimmerMovieDetail/ShimmerKeyword";

const TvDetailRightSection = ({ id }) => {
  const [currentTvData, setCurrentTvData] = useState({});
      const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setCurrentTvData({});

     const getData = async () => {
       await GetDetails("tv", id).then((response) =>
         setCurrentTvData(response.data)
       );

       setIsLoading(true);
     };

     getData();
     setIsLoading(false);

  }, [id]);


  return !isLoading ? (
    <ShimmerKeyword />
  ) : (
    <>
      <div className="social-link-container">
        <div>
          <a
            className="social_link"
            title="Visit Facebook"
            href={currentTvData.homepage}
            target="_blank"
            rel="noreferrer"
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
            href={currentTvData.homepage}
            target="_blank"
            rel="noreferrer"
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
            href={currentTvData.homepage}
            target="_blank"
            rel="noreferrer"
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
            href={currentTvData.homepage}
            target="_blank"
            rel="noreferrer"
          >
            <span className="glyphicons_v2 justwatch"></span>
          </a>
        </div>

        <div>
          <a
            className="social_link"
            title="Visit Homepage"
            href={currentTvData.homepage}
            target="_blank"
            rel="noreferrer"
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
        <div className="movie-facts d-flex">
          <p className="m-0">
            <strong>
              Facts
              <br />
            </strong>
          </p>
        </div>
        <div className="movie-status d-flex">
          <p>
            <strong>
              Status
              <br />
            </strong>
            {currentTvData.status}
          </p>
        </div>

        <div className="movie-language d-flex">
          <p>
            <strong>
              Network
              <br />
            </strong>

            {currentTvData &&
              currentTvData.networks &&
              currentTvData.networks[0] &&
              currentTvData.networks[0].logo_path &&
              currentTvData.networks[0].logo_path && (
                <img
                  loading="lazy"
                  alt="..."
                  src={`https://www.themoviedb.org/t/p/h30${currentTvData.networks[0].logo_path}`}
                />
              )}
          </p>
        </div>
        <div className="movie-budget d-flex">
          <p>
            <strong>
              Type
              <br />
            </strong>
            {currentTvData.type}
          </p>
        </div>
        <div className="movie-revenue d-flex">
          <p>
            <strong>
              Original Language
              <br />
            </strong>
            English
          </p>
        </div>
      </div>

      <TvKeywordComponent id={id} isMovie="movie" />
    </>
  );
};

export default TvDetailRightSection;
