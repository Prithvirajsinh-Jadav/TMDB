import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="container p-0 poster">
      <section className="new_index">
        <div id="media_v4" className="media discover">
          <div className="column_wrapper">
            <div className="content_wrapper wrap">
              <div className="title">
                <h2 >Welcome.</h2>
                <h3>
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </h3>
              </div>

              <div className="search ">
                <form
                  id="inner_search_form"
                  action="/search"
                  method="get"
                >
                 
                    <input
                      id="inner_search_v4"
                      name="query"
                      type="text"
                      className="search_input "
                      placeholder="Search for a movie, tv show, person......"
                    />
                  
                  <input type="submit" value="Search" className="submit_input"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poster;
