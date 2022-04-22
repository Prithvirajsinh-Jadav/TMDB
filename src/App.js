import React from "react";
import {
  NavBar,
  Poster,
  Popular,
  Trending,
  Community,
  Footer,
  MovieDetail,
  CategorySection,
  Login,
  Signup,
  FullReview,
  TvDetail,
  FullSeason,
} from "./components/Components.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import SearchShowResult from "./components/SearchShowResult/SearchShowResult.jsx";

const App = () => {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Poster />
                <Popular />
                <Trending />
                <Community />
              </>
            }
          />
          <Route path="/movie/details/:id" element={<MovieDetail />} />
          <Route path="/tv/details/:id" element={<TvDetail />} />
          <Route path="/:isMovie/reviews/:reviewID" element={<FullReview />} />
          <Route path="/tv/seasons/:id" element={<FullSeason />} />

          <Route path="/:isMovie/:category" element={<CategorySection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/search/:currentSearchTab"
            element={<SearchShowResult />}
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
