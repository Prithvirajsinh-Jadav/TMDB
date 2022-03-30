import React from 'react'
import "./SectionHeading.css"



const SectionHeading = ({
  tabData,
  sectionHeading,
  selectedTab,
  setSelectedTab,
}) => {

  const toggleData = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.id);
    setSelectedTab(e.currentTarget.id);
   
    
    
  };
  return (
    <>
      <div className="column_header ">
        <h2 className="section_heading">{sectionHeading} </h2>
        <div className="selector_wrap">
          <div className="selector position-relative">
            <div className={"is_active " + (selectedTab==="tv" || selectedTab==="week" ? "slider" : "")}></div>

            {tabData.map((tab) => {
              return (
                <div
                  key={tab.id}
                  className={
                    "anchor " +
                    (selectedTab === tab.id 
                      ? "active"
                      : "non_active")
                  }
                  id={tab.id}
                  onClick={toggleData}
                >
                  <h3>
                    <a href="/">{tab.tabValue}</a>
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

export default SectionHeading