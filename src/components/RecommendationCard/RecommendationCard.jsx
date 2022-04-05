import React from 'react';


const RecommendationCard = ({poster_path,title,release_date,id,popularity}) => {



 

  return (
    <>
      <div className="recommendation-card">
        <div className="image_content ">
          <a href="/" title={title} alt={title}>
            <img src={poster_path} alt="Don't Look Up" />

            <div className="meta-data">
              <span className="release_date">
                <svg
                  className="calender"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    id="calendar"
                    d="M15,18.5v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1A.5.5,0,0,1,15,18.5ZM14.5,22h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,22Zm0-8h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,14Zm4,8h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,22Zm-8-4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,10.5,18Zm0,4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,10.5,22Zm12-8h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,22.5,14Zm0,4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,22.5,18Zm-4,0h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,18Zm0-4h-1a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,18.5,14ZM27,7V26a2.00006,2.00006,0,0,1-2,2H7a2.00006,2.00006,0,0,1-2-2V7A2.002,2.002,0,0,1,7,5V6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,9,6.5v-1A.5.5,0,0,1,9.5,5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V5A2.002,2.002,0,0,1,27,7ZM25.00146,26l-.00109-14H7V26Z"
                  />
                </svg>
                {release_date}
              </span>
              <span className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="recommendation-icon "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="recommendation-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="recommendation-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
          </a>
        </div>
        <p className="movie-heading d-flex justify-content-between">
          <a
            className="title"
            href="/movie/646380"
            title="Don't Look Up"
            alt="Don't Look Up"
          >
            <bdi>{release_date} </bdi>
          </a>
          <span className="vote_average"> {Math.floor(popularity)}%</span>
        </p>
      </div>
    </>
  );
}

export default RecommendationCard;