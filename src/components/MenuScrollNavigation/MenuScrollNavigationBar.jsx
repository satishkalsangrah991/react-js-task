import React, { useEffect, useRef, useState } from "react";

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
        setShowRightButton(scrollLeft + clientWidth + 2 < scrollWidth);
      }
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (menuRef.current) {
        menuRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeftHandler = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRightHandler = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 250, behavior: "smooth" });
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
  let intervalTime = 2000;
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
      <div className="overflow-hidden w-full border border-gray-300 rounded relative">
        <div
          className="flex overflow-hidden justify-center"
          ref={menuRef}
          // style={{ marginLeft: -scrollLeft }}
        >
          {/* Your menu items */}
          {[...Array(24).keys()].map((index) => (
            <div
              className="product-card-row-two rounded-md w-ful min-w-60 h-[315px] overflow-hidde bg-white border border-transparent hover:border-qpurple transition-all duration-300 ease-in-out m-2 "
              style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 11px 73px" }}
            >
              <div className="w-full h-[105px] bg-white px-5 ">
                <div className="w-full h-full ">
                  <div className="w-full h-[205px] relative">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt=""
                        src="https://shopus-quomodo.vercel.app/_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=3840&q=75"
                        // src="https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=3840&q=75"
                        decoding="async"
                        data-nimg="fill"
                        className="w-full h-full object-contain"
                        sizes="100vw"
                        // srcSet="/_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=3840&q=75 3840w"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "scale-down",
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="flex space-x-1 mb-2.5">
                      <span className="text-qgray">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-[#DFDFDF]"
                        >
                          <path d="M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z" />
                        </svg>
                      </span>
                      <span className="text-qgray">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-[#DFDFDF]"
                        >
                          <path d="M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z" />
                        </svg>
                      </span>
                      <span className="text-qgray">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-[#DFDFDF]"
                        >
                          <path d="M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z" />
                        </svg>
                      </span>
                      <span className="text-qgray">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-[#DFDFDF]"
                        >
                          <path d="M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z" />
                        </svg>
                      </span>
                      <span className="text-qgray">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-[#DFDFDF]"
                        >
                          <path d="M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="title mb-2 text-base font-600 text-qblack leading-[24px] line-clamp-1 hover:text-qpurple cursor-pointer">
                      Feminine Wrap Blouse
                    </h3>
                    <p className="price">
                      <span className="main-price  font-500 text-base text-qpurple">
                        $450.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLeftButton && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded absolute left-0"
          onClick={scrollLeftHandler}
        >
          Left
        </button>
      )}
      {showRightButton && (
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded absolute right-0"
          onClick={scrollRightHandler}
        >
          Right
        </button>
      )}
    </div>
  );
}

export default MenuScrollNavigationBar;

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

{
  /* <div
// style={{width:'300px'}}
 key={index} className="p-4 bg-gray-200 m-1 rounded truncat min-w-72 min-h80 cursor-pointer w[300px]">
  Item {index + 1}
  <br></br>
To hide the right button when the menu has reached its end, you can compare the sum of the scroll position and the client width with the total scrollable width of the menu. If they are equal or greater, it means the menu has reached its end, and you should hide the right button. Here's how you can modify the code to achieve this:

</div> */
}
