import React from "react";
import "./Popular.css";
import HomePageCard from "../HomePageCard/HomePageCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const Popular = () => {
  const section_element = ["Streaming", "On TV", "For Rent", "In Theaters"];
  const section_heading = "What's Popular";
  return (
    <>
      <div className="popular">
        <SectionHeading
          HomePageCard={HomePageCard}
          selectors={section_element}
          section_heading={section_heading}
        />
      </div>
    </>
  );
};

export default Popular;
