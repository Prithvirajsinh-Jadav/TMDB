import React, { useState} from "react";
import "./Popular.css";
import PopularMovie from "./PopularMovie";
import PopularTV from "./PopularTV";
import SectionHeading from "../SectionHeading/SectionHeading";

const Popular = () => {
  const sectionHeading = "What's Popular";
  // const section_element = ["Streaming", "On TV", "For Rent", "In Theaters"];

  const tabData = [
    { id: "movie", tabValue: "Streaming" },
    { id: "tv", tabValue: "On TV" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [selectedTab, setSelectedTab] = useState("movie");
  



  const scrollHandler = (e) => {
    if (e.target.scrollLeft < 200) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  // console.log(popularData);
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
              className={
                "movie_content " + (isScroll ? "" : "should_fade  is_fading")
              }
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
      {/* <div className="popular">
        <SectionHeading
          HomePageCard={HomePageCard}
          selectors={section_element}
          section_heading={section_heading}
        />
      </div> */}
    </>
  );
};

export default Popular;
