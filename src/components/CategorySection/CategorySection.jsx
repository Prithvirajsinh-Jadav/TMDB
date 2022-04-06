import React, { useState, useEffect } from "react";
import "./CategorySection.css";
import HomePageCard from "../HomePageCard/HomePageCard";
import axios from "axios";

const CategorySection = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const API_KEY = "a192f556a534b82d1e2eb625272ad9aa";

    const categoryURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

    axios
      .get(categoryURL)
      .then((response) => setCategoryData(response.data.results));
  });

  return (
    <div className="category-wrapper container d-flex p-0 my-4">
      <div className="left-category-section w-20 bg-info">
        <h6>left section</h6>
      </div>
      <div className="right-category-section w-80 d-flex flex-wrap justify-content-center">
        

          { 
            categoryData.map((categoryObj) => {

              return (
                <HomePageCard
                id={categoryObj.id}
                key={categoryObj.id}
                poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face/${categoryObj.poster_path}`}
                title={categoryObj.title}
                release_date={categoryObj.release_date}
                popularity={categoryObj.vote_average * 10}
                className={true}

                />
              )
            })
          }
    
       
      </div>
    </div>
  );
};

export default CategorySection;
