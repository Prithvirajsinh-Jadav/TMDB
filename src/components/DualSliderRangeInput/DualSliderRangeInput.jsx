import React,{useState} from 'react'
import Slider from '@mui/material/Slider';

// const DualSliderRangeInput = () => {
//   return (
//     <div>DualSliderRangeInput</div>
//   )
// }

// export default DualSliderRangeInput





export const DualSliderRangeInput = () => {
  const [value, setValue] = React.useState([20, 37]);

 

  return (
    <Slider
      // getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
