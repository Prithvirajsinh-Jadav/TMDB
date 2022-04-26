import React, { useState, useEffect } from "react";
import MaleCastImage from "./../../assets/images/male-cast.svg";
import FemaleCastImage from "./../../assets/images/female-cast.svg";
import { GetCredits } from "./../../api";
import ShimmerCastCard from "./../ShimmerMovieDetail/ShimmerCastCard";

const CastCard = ({ id, isMovie }) => {
  const [castData, setCastData] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCastData([]);
    const getData = async () => {
      await GetCredits(id, isMovie).then((response) =>
        setCastData(response.data.cast)
      );
    setIsLoading(true);
    };

    getData();
    setIsLoading(false);
  }, [id, isMovie]);

  // console.log(castData);

  const scrollHandler = (e) => {
    setIsScroll(e.target.scrollLeft < 200);
  };
 
  return (
    <>
      <div className="bill-section ">
        <section className="bill-section-content position-relative">
          <h3>{isMovie === "movie" ? "Top Bill Cast" : "Series Cast"} </h3>
          <div
            className={"cast-section " + (isScroll ? "" : "should_fade")}
            onScroll={scrollHandler}
          >
            {!isLoading ? (
              <ShimmerCastCard />
            ) : (
              <div className="cast-scroll-section">
                {castData &&
                  castData.slice(0, 9).map((cast) => {
                    return (
                      <div className="card" key={cast.id}>
                        <img
                          src={
                            cast.profile_path
                              ? `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`
                              : cast.gender === 1
                              ? FemaleCastImage
                              : MaleCastImage
                          }
                          alt={cast.name}
                        />

                        <p className="person-name">{cast.name}</p>
                        <p className="character-name">{cast.character} </p>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CastCard;
