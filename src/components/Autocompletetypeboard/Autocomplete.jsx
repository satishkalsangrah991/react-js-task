// import { useState, useRef, useEffect } from "react";
// const cityNames = [
//   "Amsterdam",
//   "Berlin",
//   "London",
//   "New York",
//   "Paris",
//   "Rome",
//   "San Francisco",
//   "Tokyo",
//   "Washington DC",
//   "Zurich",
//   "Copenhagen",
//   "Helsinki",
//   "Madrid",
//   "Reykjavik",
//   "Stockholm",
//   "Vancouver",
//   "Vienna",
//   "Zagreb",
//   "Budapest",
//   "Dublin",
//   "Hamburg",
//   "Krakow",
//   "Lisbon",
//   "Ljubljana"
// ];

// const Autocomplete = () => {
//   const [data] = useState(cityNames);
//   const [filteredData, setfilteredData] = useState(cityNames);
//   const [value, setValue] = useState("");
//   const autocompleteRef = useRef(null);

//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleClick = (event) => {
//       if (
//         autocompleteRef.current &&
//         !autocompleteRef.current.contains(event.target)
//       ) {
//         setShow(false);
//       }
//     };
//     document.addEventListener("click", handleClick);
//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);

//   const debounce = function (fn) {
//     let timer;
//     return function (...args) {
//       if (timer) clearTimeout(timer);
//       let context = this;
//       timer = setTimeout(() => {
//         timer = null;
//         fn.apply(context, args);
//       }, 500);
//     };
//   };

//   const handleChange = (value) => {
//     setValue(value);
//     const optimised = debounce(fun);
//     optimised(value);
//   };

//   const fun = (value) => {
//     const filteredData = data.filter((item) =>
//       item.toLowerCase().includes(value.toLowerCase())
//     );
//     setfilteredData(filteredData);
//   };

//   const handleClick = (value) => {
//     setValue(value);
//     setShow(false);
//   };

//   return (
//     <>
//       <div 
//       className="autocomplete" 
//       ref={autocompleteRef}
//       >
//         <input
//           value={value}
//           onChange={(e) => handleChange(e.target.value)}
//           type="text"
//           placeholder="Type to Search"
//           onFocus={() => setShow(true)}
//         />
//         {show && (
//           <ul>
//             {filteredData.map((row) => {
//               return <li onClick={() => handleClick(row)}>{row}</li>;
//             })}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };

// export default Autocomplete;


import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const Autocomplete = ({ value1, total1 }) => {

   const value=2 
   const total=5
  const [rating, setRating] = useState(value || 0);
  const [selection, setSelection] = useState(0);

  const onHover = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id")) {
      val = event.target.getAttribute("data-star-id");
    }
    setSelection(val);
  };
  return (
    <div
      onMouseLeave={() => onHover(null)}
      onMouseOver={onHover}
      onClick={(e) =>
        setRating(e.target.getAttribute("data-star-id") || rating)
      }
    >
      {Array.from({ length: total }, (_, index) => {
        return (
          <Star
            marked={selection ? selection >= index + 1 : rating >= index + 1}
            starId={index + 1}
            key={`star_${index}`}
          />
        );
      })}
    </div>
  );
};

export default Autocomplete;
