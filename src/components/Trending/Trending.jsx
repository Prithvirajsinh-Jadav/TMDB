import React, { useState } from "react";
import TrendingDay from "./TrendingDay";
import TrendingWeek from "./TrendingWeek";
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
   setIsScroll(e.target.scrollLeft < 200);
  };

  return (
    <>
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
              className={"movie_content " + (isScroll ? "" : "should_fade")}
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
