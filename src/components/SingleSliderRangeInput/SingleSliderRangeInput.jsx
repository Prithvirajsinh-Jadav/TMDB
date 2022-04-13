import React from "react";
import Slider from "@mui/material/Slider";

const SingleSliderRangeInput = () => {
  console.log("i m exe");

  const sliderHandler = (e) => {
    console.log(e.target.value);
  }


  return (
    <Slider
      defaultValue={50}
      aria-label="Default"
      valueLabelDisplay="auto"
      onChange={(e) => sliderHandler(e)}
    />
  );
};

export default SingleSliderRangeInput;
