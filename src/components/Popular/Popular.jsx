import React, { useState } from "react";
import "./Popular.css";
import PopularMovie from "./PopularMovie";
import PopularTV from "./PopularTV";
import SectionHeading from "../SectionHeading/SectionHeading";
// import { useTransition,animated } from "react-spring";

const Popular = () => {
  const sectionHeading = "What's Popular";
  // const section_element = ["Streaming", "On TV", "For Rent", "In Theaters"];

  const tabData = [
    { id: "movie", tabValue: "Streaming" },
    { id: "tv", tabValue: "On TV" },
  ];

  const [selectedTab, setSelectedTab] = useState("movie");
  const [isScroll, setIsScroll] = useState(false);

  const scrollHandler = (e) => {
    setIsScroll(e.target.scrollLeft < 200);
  };

  return (
    <>
      <div className="container  px-0  pt-2 popular">
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
                  {selectedTab === "movie" ? <PopularMovie /> : <PopularTV />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Popular;
