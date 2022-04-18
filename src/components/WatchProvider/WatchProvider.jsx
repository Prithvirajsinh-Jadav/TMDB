import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { GetWatchProvider } from '../../api';

const WatchProvider = ({id,isMovie}) => {

    const [watchProvider, setWatchProvider] = useState({});

    useEffect(()=>{
    

        GetWatchProvider(id,isMovie).then((response) => {
              return response.data.results["IN"];
            })
            .then((data) => {
              if (data && data.flatrate) {
                setWatchProvider({
                  providerName: data.flatrate[0].provider_name,
                  providerLogo: `https://www.themoviedb.org/t/p/original${data.flatrate[0].logo_path}`,
                  watchText: "Now Streaming",
                });
              } else if (data && data.buy) {
                setWatchProvider({
                  providerName: data.buy[0].provider_name,
                  providerLogo: `https://www.themoviedb.org/t/p/original${data.buy[0].logo_path}`,
                  watchText: "Available to Rent or Buy",
                });
              } else {
                setWatchProvider({});
              }
            });

    },[])

  return (
    <>
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
                <h6 className="now-streaming">{watchProvider.watchText}</h6>
                <h6 className="watch-now">
                  <Link
                    className="no_click"
                    to="/"
                    title={`Now streaming on ${watchProvider.providerName}`}
                  >
                    Watch Now
                  </Link>
                </h6>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WatchProvider