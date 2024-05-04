import React from "react";
// import { numberWithCommas } from "../utils/config";
const numberWithCommas=(x) =>{
    if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
function SliderInput({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle
}) {
  return (
    <React.Fragment>
      <span className="title text-md font-semibold font-sans my-3">{title}</span>
      {state > 0 && (
        <span className="title text-indigo-700" style={{ textDecoration: "underline" }}>
          {underlineTitle}
        </span>
      )}
      {/* <div>
        <input
          type="range"
          min={min}
          max={max}
          className="slider"
          value={state}
          onChange={onChange}
        />
        <div className="lables">
          <label>{labelMin ?? numberWithCommas(min)}</label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
      </div> */}

      <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w- my-4 font-semibol font-sans">

        <div className="mb-4">
          {/* <label htmlFor="price-range" className="block text-gray-700 font-sans font-bold mb-2">Price Range</label> */}
          <input 
           type="range"
          min={min}
          max={max}
          value={state}
          onChange={onChange}
          className="w-full accent-indigo-600" 
  
        //   oninput="updatePrice(this.value)" 


          />
        </div>
        <div className="flex justify-between text-gray-500">
        <label>{labelMin ?? numberWithCommas(min)}</label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SliderInput;