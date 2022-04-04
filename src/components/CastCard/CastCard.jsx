import React from 'react'

const CastCard = () => {
  return (
    <>
      <div className="card">
        <a href="/">
          <img
            className=""
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/zkg9wfbXZi9OqvwW2ku38zNC1Hk.jpg"
            alt="Noomi Rapace"
          />
        </a>
        <p className="person-name">
          <a href="/person/87722-noomi-rapace">Noomi Rapace</a>
        </p>
        <p className="character-name">Caroline Edh</p>
      </div>
    </>
  );
}

export default CastCard