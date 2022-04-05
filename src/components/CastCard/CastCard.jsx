import React from 'react'
import MaleCastImage from "./../../assets/images/male-cast.svg"
import FemaleCastImage from "./../../assets/images/female-cast.svg"

const CastCard = ({ id, cast_name, cast_poster_path, cast_character,gender }) => {
  return (
    <>
      <div className="card">
        <a href="/">
          <img
            className=""
            src={cast_poster_path ? cast_poster_path : (gender === 1 ? FemaleCastImage : MaleCastImage )}
            alt={cast_name}
          />
        </a>
        <p className="person-name">
          <a href="/person/87722-noomi-rapace">{cast_name} </a>
        </p>
        <p className="character-name">{cast_character} </p>
      </div>
    </>
  );
};

export default CastCard