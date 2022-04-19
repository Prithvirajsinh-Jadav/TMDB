import React, { useState } from "react";
import defaultImage from "./../../../assets/images/male-cast.svg";

const SearchShowPeopleDataCard = ({
  profile_path,
  name,
  department,
  known_for_array,
}) => {
    console.log(known_for_array)

    // const [showKnownFor, setShowKnownFor] = useState([])

    

    // known_for_array.map((currentKnown)=>setShowKnownFor((prevState)=> [...prevState, currentKnown.name || currentKnown.title]))

    let known_for_string = known_for_array.map((currentKnown)=>{

      
        return (currentKnown.name || currentKnown.title);
        
    }).join(", ")

  return (
    <div className="card person-card  d-flex flex-row">
      <div className="person-image-container">
        <img
          className="person-image"
          src={
            profile_path
              ? `https://www.themoviedb.org/t/p/w90_and_h90_face${profile_path}`
              : defaultImage
          }
          alt={name}
        />
      </div>
      <div className="d-flex justify-content-center flex-column mx-3">
        <p className="search-person-name m-0 p-0">{name}</p>
        <p className="search-sub m-0 p-0">
          <span>{department}</span> • <span>{known_for_string}</span>
        </p>
      </div>
    </div>
  );
};

export default SearchShowPeopleDataCard;
