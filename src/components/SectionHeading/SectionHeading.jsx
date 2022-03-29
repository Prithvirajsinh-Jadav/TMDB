import React from 'react'
import "./SectionHeading.css"
import HomePageCard from "../HomePageCard/HomePageCard";
import { v4 as uuid } from "uuid";


const SectionHeading = ({ selectors,section_heading,renderData }) => {
  console.log(renderData);
  return (
    <div className="container  px-0  pt-2">
      <section className="content_section">
        <div className="inner_content">
          <div className="column_header ">
            <h2 className="section_heading">{section_heading} </h2>
            <div className="selector_wrap">
              <div className="selector">
                {selectors.map((element) => {
                  return (
                    <div className="anchor" key={element}>
                      <h3>
                        <a
                          href="/"
                          className="no_click "
                          data-group="streaming"
                        >
                          {element}
                        </a>
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="movie_content">
            <div className="section_scroll">
              <div className="column_content">
             
              {

                renderData.map((element) => {
                  return (
                    <HomePageCard
                      key={uuid()}
                      id={element.id}
                      poster_path={element.poster_path}
                      title={element.title}
                      release_date={element.release_date}
                    />
                  );
                })
              }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHeading