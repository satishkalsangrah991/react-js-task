import React, { useEffect, useRef, useState } from 'react';

function MenuScrollNavigationBar() {
//   const menuRef = useRef(null);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const scrollLeftHandler = () => {
//     if (menuRef.current) {
//       const scrollWidth = menuRef.current.scrollWidth;
//       console.log(scrollWidth)
//       const scrollLeft = menuRef.current.scrollLeft;
//       const offsetWidth = menuRef.current.offsetWidth;
//       const newPosition = Math.max(scrollWidth - offsetWidth, scrollLeft - offsetWidth);
//       console.log(newPosition)
//       setScrollLeft(newPosition);
//     }
//   };

//   const scrollRightHandler = () => {
//     if (menuRef.current) {
//       const scrollWidth = menuRef.current.scrollWidth;
//       const scrollLeft = menuRef.current.scrollLeft;
//       const offsetWidth = menuRef.current.offsetWidth;
//       const maxScroll = scrollWidth - offsetWidth;
//       const newPosition = Math.min(maxScroll, scrollLeft + offsetWidth);
//       console.log(newPosition)
//       setScrollLeft(newPosition);
//     }
//   };

// second code this useRef

//   const menuRef = useRef(null);

//   const scrollLeftHandler = () => {
//     console.log( menuRef.current.scrollWidth)
//     if (menuRef.current) {
//       menuRef.current.scrollBy({ left: -150, behavior: 'smooth' });
//     }
//   };

//   const scrollRightHandler = () => {
//     console.log( menuRef.current.scrollLeft)
//     if (menuRef.current) {
//       menuRef.current.scrollBy({ left: 150, behavior: 'smooth' });
//     }
//   };


// third way of scroll

// const elementRef = useRef(null);
// const [arrowDisable, setArrowDisable] = useState(true);
// const handleHorizantalScroll = (element, speed, distance, step) => {
//   // console.log(element)
//   let scrollAmount = 0;
//   const slideTimer = setInterval(() => {
//     element.scrollLeft += step;
//     console.log(step)
//     scrollAmount += Math.abs(step);
//     if (scrollAmount >= distance) {
//       clearInterval(slideTimer);
//     }
//     // console.log(scrollAmount)
//     if (element.scrollLeft === 0) {
//       setArrowDisable(true);
//     } else {
//       setArrowDisable(false);
//     }
//   }, speed);
 
// };

// handleHorizantalScroll(elementRef.current, 25, 150, -10); left button
// handleHorizantalScroll(elementRef.current, 25, 150, 10);  right button


// forth way code 
const menuRef = useRef(null);
const [showLeftButton, setShowLeftButton] = useState(false);
const [showRightButton, setShowRightButton] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    if (menuRef.current) {
    
      const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
    //   console.log(scrollLeft, scrollWidth, clientWidth,(scrollLeft + clientWidth+2))
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton((scrollLeft + clientWidth+2) < scrollWidth);
    }
  };

  if (menuRef.current) {
    menuRef.current.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (menuRef.current) {
      menuRef.current.removeEventListener('scroll', handleScroll);
    }
  };
}, []);

const scrollLeftHandler = () => {
  if (menuRef.current) {
    menuRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  }
};

const scrollRightHandler = () => {
  if (menuRef.current) {
    menuRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  }
};

  return (
    <div className="flex flex-col items-center justify-center hscreen mt-10">
   
      <div className="overflow-hidden w-full border border-gray-300 rounded">
        <div className="flex overflow-hidden" ref={menuRef} 
        // style={{ marginLeft: -scrollLeft }}
        >
          {/* Your menu items */}
          {[...Array(42).keys()].map((index) => (
            <div key={index} className="p-4 bg-gray-200 m-1 rounded truncat">
              Item {index + 1}
            </div>
          ))}
        </div>
      </div>
      {showLeftButton &&<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={scrollLeftHandler}>Left</button>}
      {showRightButton && <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={scrollRightHandler}>Right</button>}
    </div>
  );
}

export default MenuScrollNavigationBar