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
        <NavBar />
        <Routes>
          <Route
            exact
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
          <Route exact path="/movie/details/:id" element={<MovieDetail />} />
          <Route exact path="/tv/details/:id" element={<TvDetail />} />
          <Route
            exact
            path="/:isMovie/reviews/:reviewID"
            element={<FullReview />}
          />
          <Route exact path="/tv/seasons/:id" element={<FullSeason />} />

          <Route path="/:isMovie/:category" element={<CategorySection />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/search/:currentSearchTab" element={<SearchShowResult />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
