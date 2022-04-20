import React from "react";
import "./SectionHeading.css";
import { Link } from "react-router-dom";

const SectionHeading = ({
  tabData,
  sectionHeading,
  selectedTab,
  setSelectedTab,
}) => {
  const toggleData = (e) => {
    e.preventDefault();
    setSelectedTab(e.currentTarget.id);
  };
  return (
    <>
      <div className="column_header ">
        <h2 className="section_heading">{sectionHeading} </h2>
        <div className="selector_wrap">
          <div className="selector position-relative">
            <div
              className={
                "is_active " +
                (selectedTab === "tv" || selectedTab === "week" ? "slider" : "")
              }
            ></div>

            {tabData.map((tab) => {
              return (
                <div
                  key={tab.id}
                  className={
                    "anchor " +
                    (selectedTab === tab.id ? "active" : "non_active")
                  }
                  id={tab.id}
                  onClick={toggleData}
                >
                  <h3>
                    <Link to="/">{tab.tabValue}</Link>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHeading;
