import React, { useState, useEffect } from "react";
import TrendingDay from "./TrendingDay";
import TrendingWeek from "./TrendingWeek";
// import HomePageCard from "../HomePageCard/HomePageCard";
import SectionHeading from "../SectionHeading/SectionHeading";

import "./Trending.css";

const Trending = () => {
  const tabData = [
    { id: "day", tabValue: "Today" },
    { id: "week", tabValue: "This Week" },
  ];
  const sectionHeading = "Trending";
  const [selectedTab, setSelectedTab] = useState("day");
  const [isScroll, setIsScroll] = useState(false);
  

  const scrollHandler = (e) => {

    if(e.target.scrollLeft < 200){
      setIsScroll(false);
    }else{
      setIsScroll(true);
    }
    
  }

  return (
    <>
      {/* {console.log(trendingData)} */}

      <div className="container  px-0  pt-2 trending">
        <section className="content_section ">
          <div className="inner_content ">
            <SectionHeading
              tabData={tabData}
              sectionHeading={sectionHeading}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <div
              className={
                "movie_content " + (isScroll ? "" : "should_fade  is_fading")
              }
              onScroll={scrollHandler}
            >
              <div className="scroll_content">
                <div className="column_content">
                  {selectedTab === "day" ? <TrendingDay /> : <TrendingWeek />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Trending;
