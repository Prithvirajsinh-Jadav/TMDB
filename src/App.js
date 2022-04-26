import React, { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import SearchShowResult from "./components/SearchShowResult/SearchShowResult";
import ShimmerKeyword from "./components/ShimmerMovieDetail/ShimmerKeyword";

const NavBar = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.NavBar,
  }))
);
const Poster = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Poster,
  }))
);

const Popular = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Popular,
  }))
);
const Trending = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Trending,
  }))
);
const Community = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Community,
  }))
);
const Footer = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Footer,
  }))
);
const MovieDetail = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.MovieDetail,
  }))
);
const CategorySection = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.CategorySection,
  }))
);
const Login = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Login,
  }))
);
const Signup = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.Signup,
  }))
);
const FullReview = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.FullReview,
  }))
);
const TvDetail = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.TvDetail,
  }))
);
const FullSeason = lazy(() =>
  import("./components/Components.jsx").then((module) => ({
    default: module.FullSeason,
  }))
);

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="d-flex align-items-center justify-content-center w-100 h-100 ">
            <CircularProgress />
          </div>
        }
      >
        <Router>
          <NavBar />
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
            <Route
              path="/:isMovie/reviews/:reviewID"
              element={<FullReview />}
            />
            <Route path="/tv/seasons/:id" element={<FullSeason />} />

            <Route path="/:isMovie/:category" element={<CategorySection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shimmer" element={<ShimmerKeyword />} />
            <Route
              path="/search/:currentSearchTab"
              element={<SearchShowResult />}
            />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
