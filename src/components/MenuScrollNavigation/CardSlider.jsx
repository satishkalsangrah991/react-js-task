import React, { useEffect, useRef } from 'react';

const CardSlider = () => {
    const imageListRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const scrollbarThumbRef = useRef(null);
    const scrollbarRef = useRef(null);

    useEffect(() => {
        const imageList = imageListRef.current;
        const slideButtons = [prevButtonRef.current, nextButtonRef.current];
        const sliderScrollbar = scrollbarRef.current;
        const scrollbarThumb = scrollbarThumbRef.current;
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

        const handleMouseDown = (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }

            const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        const handleSlideButtonClick = (direction) => {
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }

        const handleSlideButtons = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'flex';
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
        }

        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }

        scrollbarThumb.addEventListener('mousedown', handleMouseDown);
        slideButtons.forEach((button, index) => {
            button.addEventListener('click', () => handleSlideButtonClick(index === 0 ? -1 : 1));
        });
        imageList.addEventListener('scroll', () => {
            updateScrollThumbPosition();
            handleSlideButtons();
        });

        handleSlideButtons();  // Initial call to set button visibility

        const handleResize = () => {
            const newMaxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            handleSlideButtons();
            updateScrollThumbPosition();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            scrollbarThumb.removeEventListener('mousedown', handleMouseDown);
            slideButtons.forEach((button, index) => {
                button.removeEventListener('click', () => handleSlideButtonClick(index === 0 ? -1 : 1));
            });
            imageList.removeEventListener('scroll', () => {
                updateScrollThumbPosition();
                handleSlideButtons();
            });
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container mx-auto">
            <div className="slider-wrapper relative">
                <div className="image-list flex overflow-hidden justify-center" ref={imageListRef}>
                    {/* Your images here */}
                    {[...Array(12).keys()].map((index) => (
            <div
              className="product-card-row-two rounded-md min-w-72 minw-60 h-[315px] overflow-hidde bg-white border border-transparent hover:border-qpurple transition-all duration-300 ease-in-out m-2 "
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
          <button id="prev-slide" className="slide-butto mt-4 px-4 py-2 bg-blue-500 text-white rounded absolute left-0 top-32" ref={prevButtonRef} >Prev</button>
          <button id="next-slide" className="slide-butto mt-4 px-4 py-2 bg-blue-500 text-white rounded absolute right-0 top-32" ref={nextButtonRef}>Next</button>
                </div>

            </div>
            <div className="slider-scrollbar" ref={scrollbarRef}>
                <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
            </div>
        </div>
    );
}

export default  CardSlider