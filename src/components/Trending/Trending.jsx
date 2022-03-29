import React,{useState, useEffect} from "react";
import "./Trending.css";
import axios from "axios";
import SectionHeading from "../SectionHeading/SectionHeading";

const Trending = () => {
  const section_element = ["Today", "This Week"];
  const section_heading = "Trending";

   let [trendingData, setTrendingData] = useState([]);

   useEffect(() => {
     axios
       .get(
         "https://api.themoviedb.org/3/trending/movie/day?api_key=a192f556a534b82d1e2eb625272ad9aa"
       )
       .then((response) => response.data.results)
       .then((data) => {
         data.forEach((element) => {
           setTrendingData((prevData) => [
             ...prevData,
             {
               id: element.id,
               poster_path: "https://www.themoviedb.org/t/p/w220_and_h330_face" + element.poster_path,
               title: element.title,
               release_date: element.release_date,
             },
           ]);
         });
       });
   }, []);

  
  return (
    <>
    <div className="trending">
      {console.log(trendingData)}
      <SectionHeading
        
        selectors={section_element}
        section_heading={section_heading}
        renderData={trendingData}
        />
        </div>
    </>
  );
};

export default Trending;
