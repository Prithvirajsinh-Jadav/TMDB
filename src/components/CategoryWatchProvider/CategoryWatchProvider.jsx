import axios from "axios";
import React, { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CategoryWatchProvider = ({
  currentWatchCountry,
  activeCategoryWatchProvider,
  setActiveCategoryWatchProvider,
}) => {
  const [categoryWatchProvider, setCategoryWatchProvider] = useState([]);

  useEffect(() => {
    const categoryWatchProviderURL = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY}&watch_region=${currentWatchCountry}`;

    axios
      .get(categoryWatchProviderURL)
      .then((response) => setCategoryWatchProvider(response.data.results));
  }, [currentWatchCountry]);

  return (
    <div className="ott-provider-wrapper pt-3">
      <ul className="ott-provider ">
        {categoryWatchProvider.map(
          (currentWatchProvider, index) => (
            <OttCard
              key={currentWatchProvider.provider_id}
              currentWatchProvider={currentWatchProvider}
            />
          )
          // {
          // return (
          //   // <OverlayTrigger
          //   //   placement="top"
          //   //   key={currentWatchProvider.provider_id}
          //   //   overlay={
          //   //     <Tooltip id={`tooltip`}>
          //   //       {currentWatchProvider.provider_name}
          //   //     </Tooltip>
          //   //   }
          //   // >
          //   <div
          //     className="position-relative hover-li"
          //     id={currentWatchProvider.provider_id}
          //     onClick={activeCategoryWatchProviderHandler}
          //   >
          //     <div className="icon-image-container" tabIndex="-1">
          //       <img
          //         src={`https://www.themoviedb.org/t/p/original/t/p/original${currentWatchProvider.logo_path}`}
          //         width="50"
          //         height="50"
          //         alt={currentWatchProvider.provider_name}
          //       />
          //     </div>

          //     {/* <div className="hover-div">
          //         <div className="white-check check bg-warning"></div>
          //       </div> */}
          //   </div>
          //   // </OverlayTrigger>
          // );
        )}
      </ul>
    </div>
  );
};

const OttCard = ({ currentWatchProvider }) => {
  const activeCategoryWatchProviderHandler = (e) => {
    e.persist();
    console.log("i m exe");
    // e.persist();
    console.log(e);
    // const {id,classList} = e.target;

    //  classList.toggle("active-icon-class");
    //  if (activeCategoryWatchProvider.includes(`${id}`)) {
    //    setActiveCategoryWatchProvider(
    //      activeCategoryWatchProvider.filter((item) => item !== id)
    //    );
    //  } else {
    //    setActiveCategoryWatchProvider((prevState) => [...prevState, `${id}`]);
    //  }
  };

  return (
    <div
      className="position-relative hover-li"
      id={currentWatchProvider.provider_id}
      onClick={activeCategoryWatchProviderHandler}
    >
      <div className="icon-image-container" tabIndex="-1">
        <img
          src={`https://www.themoviedb.org/t/p/original/t/p/original${currentWatchProvider.logo_path}`}
          width="50"
          height="50"
          // alt={currentWatchProvider.provider_name}
        />
      </div>

      {/* <div className="hover-div">
                  <div className="white-check check bg-warning"></div>
                </div> */}
    </div>
  );
};

export default CategoryWatchProvider;
