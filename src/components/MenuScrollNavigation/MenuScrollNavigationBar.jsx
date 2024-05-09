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
    menuRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  }
};

const scrollRightHandler = () => {
  if (menuRef.current) {
    menuRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  }
  
};

 // Auto click scroll buttons every 3 seconds
//  useEffect(() => {
//   const intervalId = setInterval(() => {
//     // if (showLeftButton) {
//       scrollLeftHandler();
//     // } 
//     // else if (showRightButton) {
//       scrollRightHandler();
//     // }
//   }, 1000);

//   return () => clearInterval(intervalId);
// }, [showLeftButton, showRightButton]);

const autoScroll = true;
let slideInterval;
let intervalTime = 5000;
let auto = () => {
  slideInterval = setInterval(scrollRightHandler, intervalTime);
};

// useEffect(() => {
//   if (autoScroll) {
//     auto();
//   }
//   return () => clearInterval(slideInterval);
// }, [ autoScroll]);

  return (
    <div className="flex flex-col items-center justify-center hscreen mt-10">
   
      <div className="overflow-hidden w-full border border-gray-300 rounded">
        <div className="flex overflow-hidden" ref={menuRef} 
        // style={{ marginLeft: -scrollLeft }}
        >
          {/* Your menu items */}
          {[...Array(22).keys()].map((index) => (
            <div key={index} className="p-4 bg-gray-200 m-1 rounded truncat min-w-72 min-h-80 cursor-pointer">
              Item {index + 1}
              <br></br>
To hide the right button when the menu has reached its end, you can compare the sum of the scroll position and the client width with the total scrollable width of the menu. If they are equal or greater, it means the menu has reached its end, and you should hide the right button. Here's how you can modify the code to achieve this:

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



// import React, { useEffect, useRef, useState } from 'react';

// function MenuScrollNavigationBar() {
//   const menuRef = useRef(null);
//   const [showLeftButton, setShowLeftButton] = useState(false);
//   const [showRightButton, setShowRightButton] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (menuRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
//         setShowLeftButton(scrollLeft > 0);
//         setShowRightButton((scrollLeft + clientWidth + 2) < scrollWidth);
//       }
//     };

//     if (menuRef.current) {
//       menuRef.current.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (menuRef.current) {
//         menuRef.current.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const scrollHandler = (direction) => {
//     if (menuRef.current) {
//       const scrollAmount = direction === 'left' ? -250 : 250;
//       menuRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   // Auto scroll every 3 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (showLeftButton && showRightButton) {
//         scrollHandler('right');
//       } else if (showRightButton && showLeftButton) {
//         scrollHandler('left');
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [showLeftButton, showRightButton]);

//   return (
//     <div className="flex flex-col items-center justify-center hscreen mt-10">
//       <div className="overflow-hidden w-full border border-gray-300 rounded">
//         <div className="flex overflow-hidden" ref={menuRef}>
//           {[...Array(12).keys()].map((index) => (
//             <div key={index} className="p-4 bg-gray-200 m-1 rounded truncate min-w-72 min-h-80">
//               Item {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//       {showLeftButton && <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => scrollHandler('left')}>Left</button>}
//       {showRightButton && <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => scrollHandler('right')}>Right</button>}
//     </div>
//   );
// }

// export default MenuScrollNavigationBar;
