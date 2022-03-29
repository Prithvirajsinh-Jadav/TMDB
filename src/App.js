import "./App.css";
import { NavBar,Poster,Popular,Trending,Community,Footer } from "./components/Components.jsx";
import React from "react";




//Trending Page 

//all today
// https://api.themoviedb.org/3/trending/all/day?api_key=a192f556a534b82d1e2eb625272ad9aa

//all Week
// https://api.themoviedb.org/3/trending/all/week?api_key=a192f556a534b82d1e2eb625272ad9aa

const App = () => {
  
  return (
    <>
      <NavBar />
      <Poster />
      {/* <Popular /> */}
      <Trending />
      <Community/>
      <Footer />
    </>
  );
};

export default App;
