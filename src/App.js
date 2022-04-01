import React from "react";
import { NavBar,Poster,Popular,Trending,Community,Footer,MovieDetail } from "./components/Components.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";



//Trending Page 

//all today
// https://api.themoviedb.org/3/trending/all/day?api_key=a192f556a534b82d1e2eb625272ad9aa

//all Week
// https://api.themoviedb.org/3/trending/all/week?api_key=a192f556a534b82d1e2eb625272ad9aa

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
         <Route exact path="/movie-detail" element={
           <>
            <MovieDetail/>
           </>
         } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
