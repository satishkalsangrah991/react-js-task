import React, { useState } from "react";
import FutureNavbar from "./FutureNavbar";
import section1Image from "../../images/section1-bg-image.png";
import mainImg from "../../images/main-img.webp";
import img1 from "../../images/img1.webp";
import img2 from "../../images/img2.webp";
import img3 from "../../images/img3.webp";
const FuturePediaWeb = () => {
  const i1 = [`url ("https://www.futurepedia.io/diamond-lattice.png")`];
  // bg-[url('https://www.futurepedia.io/diamond-lattice.png')]
  const i = "https://www.futurepedia.io/diamond-lattice.png";
const [modal,setModal] = useState(false)
  function getAnimationStyles() {
    return {
      animationDuration: "3s",
      animationTimingFunction: "ease",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationDirection: "normal",
      animationFillMode: "none",
      animationPlayState: "running",
      animationName: "PageWrapper_styles_Gradient__EgRsv",
      animationTimeline: "auto",
      animationRangeStart: "normal",
    };
  }
  function getPageWrapperStyles() {
    return {
      background: "linear-gradient(270deg, #cbe6fd, #f0f6fb)",
      backgroundSize: "200% 200%",
      animation: `PageWrapper_styles_Gradient__EgRsv ${getAnimationStyles()} 3s ease infinite`,
      // animation: "PageWrapper_styles_Gradient__EgRsv 3s ease infinite",
      // animation:"plus",
      position: "absolute",
      inset: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
    };
  }
  const allCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <FutureNavbar />
      <div className="relative min-h-fit ">
        <div className="pb-32">
          <div
            // style={{backgroundImage :`url(https://www.futurepedia.io/diamond-lattice.png)`}}
            style={{ backgroundImage: `url(${section1Image})` }}
            className={`relative bg-diamond-lattice bg-cover pb-1 pt-[64px] lg:pt-[80px] bg[#d9ebf9] 
        `}
          >
            <div
              // className="PageWrapper_styles_bg__7m8Tq"
              style={getPageWrapperStyles()}
              className=""
            />
            <div className="-z-0 mb-8 text-center sm:mt-20">
              <h1>
                <span
                  className="mb-2 px-4 text-4xl font-bold text-slate-800 lg:text-6xl"
                  data-br=":R1crq7la:"
                  data-brr={1}
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                  }}
                >
                  Discover what AI can do for you
                </span>
              </h1>
              <p className="px-4 text-xl font-normal text-slate-600">
                <span
                  data-br=":R2crq7la:"
                  data-brr={1}
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                  }}
                >
                  We've helped{/* */}{" "}
                  <strong className="text-bold">5M+ professionals</strong> learn
                  to leverage AI by helping them find the best AI tools.
                </span>
              </p>
            </div>
            <div className="mb-4">
              <section>
                <div className="px-4 md:px-0">
                  <div className="mx-auto block max-w-3xl rounded-[4rem] bg-black/5 p-2 transition-colors focus-within:bg-ice-200">
                    <form className="relative flex items-center rounded-[4rem] bg-white px-2 py-2 lg:h-[70px]">
                      <input
                        id="search"
                        className="h-full w-full rounded-bl-[4rem] rounded-tl-[4rem] border-0 px-4 text-lg outline-none placeholder:text-slate-500 focus:ring-0"
                        placeholder="Enter a tool name or use case..."
                        name="q"
                        defaultValue
                      />
                      <button
                        className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ice-500 text-primary-foreground hover:bg-ice-600 cursor-pointer rounded-full py-4 text-lg flex-shrink-0 px-4"
                        type="submit"
                      >
                        <span className="lg:hidden">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={0}
                            viewBox="0 0 15 15"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span className="hidden lg:block">Search AI Tools</span>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="relative mx-auto mt-4 flex w-full flex-wrap items-center justify-center gap-2 px-4">
                  <a
                    className="inline-block cursor-pointer rounded-full bg-white px-4 py-2 text-slate-400 hover:bg-ice-300 hover:text-white"
                    href="/ai-tools/marketing"
                  >
                    Marketing
                  </a>
                  <a
                    className="inline-block cursor-pointer rounded-full bg-white px-4 py-2 text-slate-400 hover:bg-ice-300 hover:text-white"
                    href="/ai-tools/productivity"
                  >
                    Productivity
                  </a>
                  <a
                    className="inline-block cursor-pointer rounded-full bg-white px-4 py-2 text-slate-400 hover:bg-ice-300 hover:text-white"
                    href="/ai-tools/design-generators"
                  >
                    Design
                  </a>
                  <a
                    className="inline-block cursor-pointer rounded-full bg-white px-4 py-2 text-slate-400 hover:bg-ice-300 hover:text-white"
                    href="/ai-tools/video-generators"
                  >
                    Video
                  </a>
                  <a
                    className="inline-block cursor-pointer rounded-full bg-white px-4 py-2 text-slate-400 hover:bg-ice-300 hover:text-white"
                    href="/ai-tools/research-assistant"
                  >
                    Research
                  </a>
                  <a
                    className="inline-block cursor-pointer rounded-full bg-white px-4 py-2 text-slate-400 hover:bg-ice-300 hover:text-white"
                    href="/ai-tools"
                  >
                    All Categories
                  </a>
                </div>
              </section>
              <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4 md:mt-8 xl:p-0">
                <div className="mt-4 flex w-full flex-col md:flex-row">
                  <div className="flex justify-between gap-2 sm:gap-4">
                    <a
                      className="hover:no-underline grow"
                      href="?sort=featured"
                    >
                      <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-lg py-2 gap-2 w-full px-2 sm:px-6 text-ice-500 border-b-4 border-ice-500 rounded-bl-none rounded-br-none rounded-tl-lg hover:text-ice-400 hover:border-ice-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up fill-ice-500 flex"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>{" "}
                        {/* */}Featured
                      </button>
                    </a>
                    <a className="hover:no-underline grow" href="?sort=popular">
                      <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg text-lg py-2 gap-2 w-full px-2 sm:px-6 border-b-4 border-slate-500 rounded-bl-none rounded-br-none rounded-tl-lg hover:border-ice-400 text-slate-600 hover:text-slate-500">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-slate-500 flex"
                        >
                          <path
                            d="M21.4891 11.2229L17.261 14.9129L18.5275 20.4067C18.5945 20.6939 18.5754 20.9945 18.4725 21.2709C18.3697 21.5472 18.1876 21.7872 17.9491 21.9606C17.7106 22.1341 17.4262 22.2334 17.1316 22.2462C16.837 22.2589 16.5451 22.1845 16.2925 22.0323L11.501 19.1261L6.71971 22.0323C6.46712 22.1845 6.17526 22.2589 5.88062 22.2462C5.58598 22.2334 5.30164 22.1341 5.06314 21.9606C4.82464 21.7872 4.64257 21.5472 4.53969 21.2709C4.43681 20.9945 4.41769 20.6939 4.48471 20.4067L5.7494 14.9186L1.52033 11.2229C1.29665 11.03 1.13491 10.7754 1.05539 10.4909C0.975861 10.2064 0.982096 9.9048 1.07331 9.62385C1.16452 9.34291 1.33665 9.09515 1.56811 8.91164C1.79957 8.72813 2.08005 8.61705 2.3744 8.59231L7.94877 8.1095L10.1247 2.9195C10.2383 2.64717 10.43 2.41455 10.6756 2.25093C10.9211 2.08731 11.2096 2 11.5047 2C11.7998 2 12.0883 2.08731 12.3338 2.25093C12.5794 2.41455 12.7711 2.64717 12.8847 2.9195L15.0672 8.1095L20.6397 8.59231C20.9341 8.61705 21.2145 8.72813 21.446 8.91164C21.6775 9.09515 21.8496 9.34291 21.9408 9.62385C22.032 9.9048 22.0382 10.2064 21.9587 10.4909C21.8792 10.7754 21.7175 11.03 21.4938 11.2229H21.4891Z"
                            className="fill-slate-500 flex"
                          />
                          <path
                            d="M21.4891 11.2229L17.261 14.9129L18.5275 20.4067C18.5945 20.6939 18.5754 20.9945 18.4725 21.2709C18.3697 21.5472 18.1876 21.7872 17.9491 21.9606C17.7106 22.1341 17.4262 22.2334 17.1316 22.2462C16.837 22.2589 16.5451 22.1845 16.2925 22.0323L11.501 19.1261L6.71971 22.0323C6.46712 22.1845 6.17526 22.2589 5.88062 22.2462C5.58598 22.2334 5.30164 22.1341 5.06314 21.9606C4.82464 21.7872 4.64257 21.5472 4.53969 21.2709C4.43681 20.9945 4.41769 20.6939 4.48471 20.4067L5.7494 14.9186L1.52033 11.2229C1.29665 11.03 1.13491 10.7754 1.05539 10.4909C0.975861 10.2064 0.982096 9.9048 1.07331 9.62385C1.16452 9.34291 1.33665 9.09515 1.56811 8.91164C1.79957 8.72813 2.08005 8.61705 2.3744 8.59231L7.94877 8.1095L10.1247 2.9195C10.2383 2.64717 10.43 2.41455 10.6756 2.25093C10.9211 2.08731 11.2096 2 11.5047 2C11.7998 2 12.0883 2.08731 12.3338 2.25093C12.5794 2.41455 12.7711 2.64717 12.8847 2.9195L15.0672 8.1095L20.6397 8.59231C20.9341 8.61705 21.2145 8.72813 21.446 8.91164C21.6775 9.09515 21.8496 9.34291 21.9408 9.62385C22.032 9.9048 22.0382 10.2064 21.9587 10.4909C21.8792 10.7754 21.7175 11.03 21.4938 11.2229H21.4891Z"
                            className="fill-slate-500 flex"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M21.4891 11.2229L17.261 14.9129L18.5275 20.4067C18.5945 20.6939 18.5754 20.9945 18.4725 21.2709C18.3697 21.5472 18.1876 21.7872 17.9491 21.9606C17.7106 22.1341 17.4262 22.2334 17.1316 22.2462C16.837 22.2589 16.5451 22.1845 16.2925 22.0323L11.501 19.1261L6.71971 22.0323C6.46712 22.1845 6.17526 22.2589 5.88062 22.2462C5.58598 22.2334 5.30164 22.1341 5.06314 21.9606C4.82464 21.7872 4.64257 21.5472 4.53969 21.2709C4.43681 20.9945 4.41769 20.6939 4.48471 20.4067L5.7494 14.9186L1.52033 11.2229C1.29665 11.03 1.13491 10.7754 1.05539 10.4909C0.975861 10.2064 0.982096 9.9048 1.07331 9.62385C1.16452 9.34291 1.33665 9.09515 1.56811 8.91164C1.79957 8.72813 2.08005 8.61705 2.3744 8.59231L7.94877 8.1095L10.1247 2.9195C10.2383 2.64717 10.43 2.41455 10.6756 2.25093C10.9211 2.08731 11.2096 2 11.5047 2C11.7998 2 12.0883 2.08731 12.3338 2.25093C12.5794 2.41455 12.7711 2.64717 12.8847 2.9195L15.0672 8.1095L20.6397 8.59231C20.9341 8.61705 21.2145 8.72813 21.446 8.91164C21.6775 9.09515 21.8496 9.34291 21.9408 9.62385C22.032 9.9048 22.0382 10.2064 21.9587 10.4909C21.8792 10.7754 21.7175 11.03 21.4938 11.2229H21.4891Z"
                            className="fill-slate-500 flex"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M21.4891 11.2229L17.261 14.9129L18.5275 20.4067C18.5945 20.6939 18.5754 20.9945 18.4725 21.2709C18.3697 21.5472 18.1876 21.7872 17.9491 21.9606C17.7106 22.1341 17.4262 22.2334 17.1316 22.2462C16.837 22.2589 16.5451 22.1845 16.2925 22.0323L11.501 19.1261L6.71971 22.0323C6.46712 22.1845 6.17526 22.2589 5.88062 22.2462C5.58598 22.2334 5.30164 22.1341 5.06314 21.9606C4.82464 21.7872 4.64257 21.5472 4.53969 21.2709C4.43681 20.9945 4.41769 20.6939 4.48471 20.4067L5.7494 14.9186L1.52033 11.2229C1.29665 11.03 1.13491 10.7754 1.05539 10.4909C0.975861 10.2064 0.982096 9.9048 1.07331 9.62385C1.16452 9.34291 1.33665 9.09515 1.56811 8.91164C1.79957 8.72813 2.08005 8.61705 2.3744 8.59231L7.94877 8.1095L10.1247 2.9195C10.2383 2.64717 10.43 2.41455 10.6756 2.25093C10.9211 2.08731 11.2096 2 11.5047 2C11.7998 2 12.0883 2.08731 12.3338 2.25093C12.5794 2.41455 12.7711 2.64717 12.8847 2.9195L15.0672 8.1095L20.6397 8.59231C20.9341 8.61705 21.2145 8.72813 21.446 8.91164C21.6775 9.09515 21.8496 9.34291 21.9408 9.62385C22.032 9.9048 22.0382 10.2064 21.9587 10.4909C21.8792 10.7754 21.7175 11.03 21.4938 11.2229H21.4891Z"
                            className="fill-slate-500 flex"
                            fillOpacity="0.2"
                          />
                        </svg>{" "}
                        {/* */}Popular
                      </button>
                    </a>
                    <a className="hover:no-underline grow" href="?sort=new">
                      <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg text-lg py-2 gap-2 w-full px-2 sm:px-6 border-b-4 border-slate-500 rounded-bl-none rounded-br-none rounded-tl-lg hover:border-ice-400 text-slate-600 hover:text-slate-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-sparkles fill-slate-500 flex"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M19 17v4" />
                          <path d="M3 5h4" />
                          <path d="M17 19h4" />
                        </svg>{" "}
                        {/* */}New
                      </button>
                    </a>
                  </div>
                  <div className="mx-auto mb-3 mt-4 flex w-full items-center sm:mx-0 sm:ml-auto sm:mt-0 sm:w-fit sm:gap-4 md:mb-0">
                    <button
                      className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 md:w-30 flex w-full items-center justify-center gap-2 border-gray-400"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R3agrq7la:"
                      data-state="closed"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-list-filter "
                      >
                        <path d="M3 6h18" />
                        <path d="M7 12h10" />
                        <path d="M10 18h4" />
                      </svg>
                      Filters{/* */}{" "}
                    </button>
                    <a className="hover:no-underline" href="?verified=true">
                      <button className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-30 ml-4 flex flex-1 items-center justify-center gap-2 border-gray-400 sm:ml-0">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                          fill
                        >
                          <path
                            d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
                            fill="#49ADFF"
                          />
                        </svg>
                        <span className="hidden sm:block">Verified</span>
                      </button>
                    </a>
                    <a className="hover:no-underline" href="?view=row">
                      <button className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-30 items-center justify-center gap-2 border-gray-400 hidden md:flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-grid3x3 "
                        >
                          <rect width={18} height={18} x={3} y={3} rx={2} />
                          <path d="M3 9h18" />
                          <path d="M3 15h18" />
                          <path d="M9 3v18" />
                          <path d="M15 3v18" />
                        </svg>
                        View
                      </button>
                    </a>
                  </div>
                </div>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {allCard.map((val, i) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col bg-white  text-card-foreground h-full w-full rounded-xl border shadow-lg"
                      >
                        <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
                          <a href="/tool/humata-ai">
                            <div className="relative flex flex-shrink-0 rounded-xl border">
                              <img
                                alt="Humata AI logo"
                                loading="lazy"
                                width={120}
                                height={120}
                                decoding="async"
                                data-nimg={1}
                                className="aspect-square h-[60px] w-[60px] rounded-xl"
                                style={{ color: "transparent" }}
                                // srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F98e68cf99dded6c8e83c8c280e87029a10549ce2-1024x1024.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F98e68cf99dded6c8e83c8c280e87029a10549ce2-1024x1024.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
                                // src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F98e68cf99dded6c8e83c8c280e87029a10549ce2-1024x1024.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
                                src="https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F98e68cf99dded6c8e83c8c280e87029a10549ce2-1024x1024.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
                              />
                              <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
                                <svg
                                  width={18}
                                  height={18}
                                  viewBox="0 0 18 18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
                                    fill="#49ADFF"
                                  />
                                </svg>
                              </div>
                            </div>
                          </a>
                          <div className="flex flex-col items-start">
                            <a href="/tool/humata-ai">
                              <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
                                Humata AI
                              </p>
                            </a>
                            <a href="/tool/humata-ai">
                              <div className="flex items-center gap-2 text-lg">
                                <div className="flex">
                                  <div className="flex">
                                    <svg
                                      className="text-yellow-500 h-4 w-4"
                                      fill="none"
                                      height={24}
                                      role="img"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={0}
                                      viewBox="0 0 24 24"
                                      width={24}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        fill="#FF9635"
                                      />
                                    </svg>
                                    <svg
                                      className="text-yellow-500 h-4 w-4"
                                      fill="none"
                                      height={24}
                                      role="img"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={0}
                                      viewBox="0 0 24 24"
                                      width={24}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        fill="#FF9635"
                                      />
                                    </svg>
                                    <svg
                                      className="text-yellow-500 h-4 w-4"
                                      fill="none"
                                      height={24}
                                      role="img"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={0}
                                      viewBox="0 0 24 24"
                                      width={24}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        fill="#FF9635"
                                      />
                                    </svg>
                                    <svg
                                      className="text-yellow-500 h-4 w-4"
                                      fill="none"
                                      height={24}
                                      role="img"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={0}
                                      viewBox="0 0 24 24"
                                      width={24}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        fill="#FF9635"
                                      />
                                    </svg>
                                    <svg
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <defs>
                                        <linearGradient
                                          id="half"
                                          x1="0%"
                                          y1="0%"
                                          x2="100%"
                                          y2="0%"
                                        >
                                          <stop
                                            offset="50%"
                                            style={{
                                              stopColor: "#FF9635",
                                              stopOpacity: 1,
                                            }}
                                          />
                                          <stop
                                            offset="50%"
                                            style={{
                                              stopColor: "#727272",
                                              stopOpacity: 1,
                                            }}
                                          />
                                        </linearGradient>
                                      </defs>
                                      <polygon
                                        fill="url(#half)"
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                      />
                                    </svg>
                                    <span className="sr-only">
                                      Rated 4.666666666666667 out of 5
                                    </span>
                                  </div>
                                </div>
                                ({/* */}6{/* */})
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="px-6">
                          <div className="flex justify-between text-lg">
                            <span>Freemium</span>
                            <span className="flex items-center text-slate-500">
                              <span className="mr-1">2909</span>
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
                                  role="presentation"
                                >
                                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                                </svg>
                                <span className="sr-only">Add bookmark</span>
                              </button>
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
                          ChatGPT for your files.
                        </p>
                        <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-[#4AACFF]">
                          <div className="flex flex-wrap gap-x-2 gap-y-1 ">
                            <a
                              className="hover:underline"
                              href="/ai-tools/human-resources"
                            >
                              #{/* */}human resources
                            </a>
                            <a
                              className="hover:underline"
                              href="/ai-tools/legal"
                            >
                              #{/* */}legal
                            </a>
                            <a
                              className="hover:underline"
                              href="/ai-tools/chatbots"
                            >
                              #{/* */}ai chatbots
                            </a>
                          </div>
                        </div>
                        <div className="px-6 mt-auto flex items-center justify-between pb-4">
                          <div className="flex items-center gap-2 text-[#6b7280]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#6b7280"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-star "
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>{" "}
                            {/* */}Featured
                          </div>
                          <a
                            className="hover:no-underline"
                            target="_blank"
                            rel="nofollow"
                            data-tool-name="Humata AI"
                            data-tool-category="human resources"
                            data-tool-placement="homepage"
                            data-sponsorship-status="not_active"
                            data-sponsor-position={1}
                            data-sponsor-status="not_active"
                            href="https://www.humata.ai/?via=futurepedia"
                          >
                            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
                              <span className="text-lg font-normal">Visit</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={3}
                                height={3}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-external-link h-5 w-5"
                              >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    );
                  })}

                  {/* yaha aad karna he baki ke card */}
                </div>
              </section>
              <div className="my-8 flex justify-center">
                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ice-500 text-primary-foreground hover:bg-ice-600 cursor-pointer rounded-full h-10 px-4 py-2">
                  See More
                </button>
              </div>
            </div>
          </div>


          {/* video section */}

          <section className="bg-slate-50 px-4 py-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div>
                  <h3 className="mb-2 text-4xl font-bold text-slate-800 md:text-5xl">
                    Futurepedia is on{/* */}{" "}
                    <img
                      alt="Youtube Logo"
                      loading="lazy"
                      width={178}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      className="inline"
                      style={{ color: "transparent" }}
                      // srcSet="/_next/image?url=%2Fyoutube.svg&w=256&q=75 1x, /_next/image?url=%2Fyoutube.svg&w=384&q=75 2x"
                      // src="/_next/image?url=%2Fyoutube.svg&w=384&q=75"
                      // src="https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=3840&q=75"
                      src={
                        "https://www.futurepedia.io/_next/image?url=%2Fyoutube.svg&w=384&q=75"
                      }
                    />
                  </h3>
                  <p className="text-xl text-slate-600">
                    Learn to leverage AI tools and acquire AI skills to
                    future-proof your life and business.
                  </p>
                  <div className="mt-2 flex w-full flex-col gap-2 md:mt-8 md:flex-row md:gap-16">
                    <div className="mt-4 flex gap-4">
                      <div>
                        <svg
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 6.5625C25.3645 6.5625 20.8331 7.93709 16.9788 10.5124C13.1246 13.0878 10.1205 16.7482 8.34658 21.0309C6.57265 25.3135 6.10851 30.026 7.01286 34.5724C7.9172 39.1189 10.1494 43.295 13.4272 46.5728C16.705 49.8506 20.8812 52.0828 25.4276 52.9872C29.974 53.8915 34.6865 53.4274 38.9692 51.6534C43.2518 49.8795 46.9122 46.8755 49.4876 43.0212C52.0629 39.1669 53.4375 34.6355 53.4375 30C53.4307 23.7861 50.9592 17.8286 46.5653 13.4347C42.1714 9.04082 36.2139 6.56932 30 6.5625ZM16.1414 46.5047C17.5325 44.0553 19.5478 42.0183 21.9822 40.6012C24.4167 39.1842 27.1832 38.4376 30 38.4376C32.8168 38.4376 35.5834 39.1842 38.0178 40.6012C40.4522 42.0183 42.4676 44.0553 43.8586 46.5047C39.9795 49.7712 35.0712 51.5624 30 51.5624C24.9288 51.5624 20.0205 49.7712 16.1414 46.5047ZM45.2742 45.2039C42.9452 41.3101 39.2114 38.458 34.8422 37.2352C36.8737 36.1548 38.4855 34.4261 39.4212 32.324C40.3569 30.222 40.5628 27.8674 40.0061 25.6349C39.4494 23.4024 38.162 21.4202 36.3489 20.0037C34.5357 18.5871 32.3009 17.8177 30 17.8177C27.6991 17.8177 25.4643 18.5871 23.6512 20.0037C21.838 21.4202 20.5507 23.4024 19.9939 25.6349C19.4372 27.8674 19.6431 30.222 20.5788 32.324C21.5145 34.4261 23.1264 36.1548 25.1578 37.2352C20.7886 38.458 17.0548 41.3101 14.7258 45.2039C11.7179 42.1853 9.67196 38.3431 8.84621 34.1625C8.02046 29.9819 8.45196 25.6503 10.0862 21.7148C11.7205 17.7792 14.4843 14.4162 18.0285 12.0503C21.5728 9.68437 25.7386 8.42169 30 8.42169C34.2614 8.42169 38.4272 9.68437 41.9715 12.0503C45.5157 14.4162 48.2795 17.7792 49.9138 21.7148C51.5481 25.6503 51.9796 29.9819 51.1538 34.1625C50.3281 38.3431 48.2821 42.1853 45.2742 45.2039ZM30 36.5625C28.3312 36.5625 26.6999 36.0676 25.3124 35.1405C23.9248 34.2134 22.8434 32.8956 22.2048 31.3539C21.5662 29.8121 21.3991 28.1156 21.7246 26.4789C22.0502 24.8422 22.8538 23.3388 24.0338 22.1588C25.2138 20.9788 26.7172 20.1752 28.3539 19.8496C29.9907 19.5241 31.6871 19.6912 33.2289 20.3298C34.7707 20.9684 36.0884 22.0498 37.0155 23.4374C37.9427 24.8249 38.4375 26.4562 38.4375 28.125C38.4375 30.3628 37.5486 32.5089 35.9662 34.0912C34.3839 35.6736 32.2378 36.5625 30 36.5625Z"
                            fill="#49ADFF"
                          />
                          <path
                            d="M45.2742 45.2039C42.9452 41.3101 39.2114 38.458 34.8422 37.2352C36.8737 36.1548 38.4855 34.4261 39.4212 32.324C40.3569 30.222 40.5628 27.8674 40.0061 25.6349C39.4494 23.4024 38.162 21.4202 36.3489 20.0037C34.5357 18.5871 32.3009 17.8177 30 17.8177C27.6991 17.8177 25.4643 18.5871 23.6512 20.0037C21.838 21.4202 20.5507 23.4024 19.9939 25.6349C19.4372 27.8674 19.6431 30.222 20.5788 32.324C21.5145 34.4261 23.1264 36.1548 25.1578 37.2352C20.7886 38.458 17.0548 41.3101 14.7258 45.2039C11.7179 42.1853 9.67196 38.3431 8.84621 34.1625C8.02046 29.9819 8.45196 25.6503 10.0862 21.7148C11.7205 17.7792 14.4843 14.4162 18.0285 12.0503C21.5728 9.68437 25.7386 8.42169 30 8.42169C34.2614 8.42169 38.4272 9.68437 41.9715 12.0503C45.5157 14.4162 48.2795 17.7792 49.9138 21.7148C51.5481 25.6503 51.9796 29.9819 51.1538 34.1625C50.3281 38.3431 48.2821 42.1853 45.2742 45.2039Z"
                            fill="#5570FF"
                            fillOpacity="0.1"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl font-bold text-slate-800">259K</p>
                        <p>Subscribers</p>
                      </div>
                    </div>
                    <div className="mt-4 flex  gap-4">
                      <div>
                        <svg
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M38.0203 29.2196L26.7703 21.7196C26.6291 21.6254 26.4649 21.5713 26.2954 21.563C26.1258 21.5548 25.9572 21.5928 25.8075 21.6729C25.6578 21.7531 25.5327 21.8723 25.4456 22.018C25.3584 22.1637 25.3124 22.3303 25.3125 22.5V37.5001C25.3123 37.6698 25.3582 37.8364 25.4453 37.9821C25.5324 38.1279 25.6574 38.2472 25.807 38.3274C25.9568 38.4076 26.1255 38.4456 26.2952 38.4373C26.4648 38.4291 26.6291 38.3749 26.7703 38.2805L38.0203 30.7805C38.1489 30.6949 38.2544 30.5789 38.3273 30.4428C38.4002 30.3066 38.4384 30.1545 38.4384 30.0001C38.4384 29.8456 38.4002 29.6935 38.3273 29.5574C38.2544 29.4212 38.1489 29.3052 38.0203 29.2196ZM27.1875 35.7493V24.2508L35.8102 30.0001L27.1875 35.7493ZM54.0141 16.5305C53.8308 15.8103 53.479 15.1439 52.9875 14.5865C52.496 14.029 51.8791 13.5964 51.1875 13.3243C43.2656 10.2633 30.532 10.3125 30 10.3125C29.468 10.3125 16.7344 10.2633 8.8125 13.3243C8.1212 13.5961 7.5044 14.0284 7.01296 14.5855C6.52152 15.1425 6.16951 15.8084 5.98594 16.5282C5.39063 18.8133 4.6875 23.0063 4.6875 30.0001C4.6875 36.9938 5.39063 41.1868 5.98594 43.4719C6.16951 44.1917 6.52152 44.8576 7.01296 45.4146C7.5044 45.9717 8.1212 46.404 8.8125 46.6758C16.7344 49.7368 29.468 49.6876 30 49.6876H30.1664C31.7813 49.6876 43.6617 49.5868 51.1945 46.6758C51.8858 46.404 52.5026 45.9717 52.9941 45.4146C53.4855 44.8576 53.8375 44.1917 54.0211 43.4719C54.6094 41.1844 55.3125 36.9938 55.3125 30.0001C55.3125 23.0063 54.6094 18.8133 54.0141 16.5282V16.5305ZM52.2 43.0149C52.0911 43.4469 51.881 43.8469 51.5872 44.1818C51.2935 44.5168 50.9243 44.7771 50.5102 44.9415C42.9868 47.8327 30.3469 47.8131 30.006 47.8126C30.0031 47.8126 30 47.8126 30 47.8126C30 47.8126 29.9969 47.8126 29.994 47.8126C29.6539 47.8131 17.0204 47.8327 9.49688 44.9274C9.08274 44.7631 8.71357 44.5027 8.41978 44.1678C8.12598 43.8328 7.91597 43.4329 7.80703 43.0008C7.23516 40.8211 6.5625 36.7969 6.5625 30.0001C6.5625 23.2032 7.23516 19.179 7.8 16.9993C7.90894 16.5672 8.11895 16.1673 8.41275 15.8323C8.70654 15.4974 9.07571 15.237 9.48984 15.0727C17.0134 12.1674 29.6538 12.187 29.994 12.1875C29.9969 12.1875 30 12.1875 30 12.1875C30 12.1875 30.0032 12.1875 30.0063 12.1875C30.3535 12.187 42.9818 12.1659 50.5031 15.0727C50.9173 15.237 51.2864 15.4974 51.5802 15.8323C51.874 16.1673 52.084 16.5672 52.193 16.9993C52.7648 19.179 53.4375 23.2032 53.4375 30.0001C53.4375 36.7969 52.7648 40.8211 52.2 43.0008V43.0149Z"
                            fill="#49ADFF"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M52.2 43.0149C52.0911 43.4469 51.881 43.8469 51.5872 44.1818C51.2935 44.5168 50.9243 44.7771 50.5102 44.9415C42.9868 47.8327 30.3469 47.8131 30.006 47.8126L30 47.8126L29.994 47.8126C29.6539 47.8131 17.0204 47.8327 9.49688 44.9274C9.08274 44.7631 8.71357 44.5027 8.41978 44.1678C8.12598 43.8328 7.91597 43.4329 7.80703 43.0008C7.23516 40.8211 6.5625 36.7969 6.5625 30.0001C6.5625 23.2032 7.23516 19.179 7.8 16.9993C7.90894 16.5672 8.11895 16.1673 8.41275 15.8323C8.70654 15.4974 9.07571 15.237 9.48984 15.0727C17.0134 12.1674 29.6538 12.187 29.994 12.1875L30 12.1875L30.0063 12.1875C30.3535 12.187 42.9818 12.1659 50.5031 15.0727C50.9173 15.237 51.2864 15.4974 51.5802 15.8323C51.874 16.1673 52.084 16.5672 52.193 16.9993C52.7648 19.179 53.4375 23.2032 53.4375 30.0001C53.4375 36.7969 52.7648 40.8211 52.2 43.0008V43.0149ZM26.7703 21.7196L38.0203 29.2196C38.1489 29.3052 38.2544 29.4212 38.3273 29.5574C38.4002 29.6935 38.4384 29.8456 38.4384 30.0001C38.4384 30.1545 38.4002 30.3066 38.3273 30.4428C38.2544 30.5789 38.1489 30.6949 38.0203 30.7805L26.7703 38.2805C26.6291 38.3749 26.4648 38.4291 26.2952 38.4373C26.1255 38.4456 25.9568 38.4076 25.807 38.3274C25.6574 38.2472 25.5324 38.1279 25.4453 37.9821C25.3582 37.8364 25.3123 37.6698 25.3125 37.5001V22.5C25.3124 22.3303 25.3584 22.1637 25.4456 22.018C25.5327 21.8723 25.6578 21.7531 25.8075 21.6729C25.9572 21.5928 26.1258 21.5548 26.2954 21.563C26.4649 21.5713 26.6291 21.6254 26.7703 21.7196Z"
                            fill="#5570FF"
                            fillOpacity="0.1"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl font-bold text-slate-800">59</p>
                        <p>Videos</p>
                      </div>
                    </div>
                    <div className="mt-4 flex  gap-4">
                      <div>
                        <svg
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M57.1072 29.6203C57.0276 29.4422 55.1104 25.193 50.819 20.9016C46.844 16.9266 40.0072 12.1875 29.9994 12.1875C19.9916 12.1875 13.1549 16.9266 9.1799 20.9016C4.88849 25.193 2.97131 29.4422 2.89162 29.6203C2.83943 29.7405 2.8125 29.8701 2.8125 30.0012C2.8125 30.1322 2.83943 30.2618 2.89162 30.382C2.97131 30.5625 4.88849 34.8094 9.1799 39.1008C13.1643 43.0852 19.994 47.8125 29.9994 47.8125C40.0049 47.8125 46.844 43.0758 50.819 39.1008C55.1104 34.8094 57.0276 30.5625 57.1072 30.382C57.1594 30.2618 57.1864 30.1322 57.1864 30.0012C57.1864 29.8701 57.1594 29.7405 57.1072 29.6203ZM49.4432 37.8234C44.0362 43.2141 37.4901 45.9375 29.9901 45.9375C22.4901 45.9375 15.9533 43.207 10.5369 37.8234C8.2323 35.525 6.29411 32.8865 4.79006 30C6.29691 27.1128 8.23829 24.4743 10.5463 22.1766C15.9627 16.793 22.4994 14.0625 29.9994 14.0625C37.4994 14.0625 44.0361 16.793 49.4526 22.1766C51.7603 24.4745 53.7016 27.113 55.2088 30C53.7019 32.8871 51.7605 35.5257 49.4526 37.8234H49.4432ZM29.9994 19.6875C27.9598 19.6875 25.966 20.2923 24.2701 21.4255C22.5742 22.5586 21.2525 24.1692 20.4719 26.0536C19.6914 27.9379 19.4872 30.0114 19.8851 32.0119C20.283 34.0123 21.2652 35.8498 22.7074 37.292C24.1496 38.7343 25.9871 39.7164 27.9876 40.1143C29.988 40.5123 32.0615 40.308 33.9459 39.5275C35.8302 38.747 37.4408 37.4252 38.574 35.7293C39.7071 34.0334 40.3119 32.0396 40.3119 30C40.3088 27.2659 39.2213 24.6447 37.288 22.7114C35.3547 20.7781 32.7335 19.6906 29.9994 19.6875ZM29.9994 38.4375C28.3307 38.4375 26.6993 37.9426 25.3118 37.0155C23.9243 36.0884 22.8428 34.7706 22.2042 33.2289C21.5656 31.6871 21.3985 29.9906 21.7241 28.3539C22.0496 26.7172 22.8532 25.2138 24.0332 24.0338C25.2132 22.8538 26.7166 22.0502 28.3534 21.7246C29.9901 21.3991 31.6866 21.5662 33.2283 22.2048C34.7701 22.8434 36.0878 23.9248 37.015 25.3124C37.9421 26.6999 38.4369 28.3312 38.4369 30C38.4369 32.2378 37.548 34.3839 35.9656 35.9662C34.3833 37.5486 32.2372 38.4375 29.9994 38.4375Z"
                            fill="#49ADFF"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M49.4432 37.8234C44.0362 43.2141 37.4901 45.9375 29.9901 45.9375C22.4901 45.9375 15.9533 43.207 10.5369 37.8234C8.2323 35.525 6.29411 32.8865 4.79006 30C6.29691 27.1128 8.23829 24.4743 10.5463 22.1766C15.9627 16.793 22.4994 14.0625 29.9994 14.0625C37.4994 14.0625 44.0361 16.793 49.4526 22.1766C51.7603 24.4745 53.7016 27.113 55.2088 30C53.7019 32.8871 51.7605 35.5257 49.4526 37.8234H49.4432ZM24.2701 21.4255C25.966 20.2923 27.9598 19.6875 29.9994 19.6875C32.7335 19.6906 35.3547 20.7781 37.288 22.7114C39.2213 24.6447 40.3088 27.2659 40.3119 30C40.3119 32.0396 39.7071 34.0334 38.574 35.7293C37.4408 37.4252 35.8302 38.747 33.9459 39.5275C32.0615 40.308 29.988 40.5123 27.9876 40.1143C25.9871 39.7164 24.1496 38.7343 22.7074 37.292C21.2652 35.8498 20.283 34.0123 19.8851 32.0119C19.4872 30.0114 19.6914 27.9379 20.4719 26.0536C21.2525 24.1692 22.5742 22.5586 24.2701 21.4255Z"
                            fill="#5570FF"
                            fillOpacity="0.1"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl font-bold text-slate-800">14M</p>
                        <p>Views</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@futurepedia_io"
                  target="_blank"
                >
                  {" "}
                  <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ice-500 text-primary-foreground hover:bg-ice-600 cursor-pointer rounded-full h-10 px-4 py-2">
                    Futurepedia's YouTube
                  </button>
                </a>
              </div>

              {/* modal */}
{modal &&
              <>
              <div data-state="open" className="fixed inset-0 z-50 bg-ice-100/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" style={{ pointerEvents: 'auto' }} data-aria-hidden="true" aria-hidden="true" /><div
                  role="dialog"
                  id="radix-:Rpbq7la:"
                  aria-describedby="radix-:Rpbq7laH2:"
                  aria-labelledby="radix-:Rpbq7laH1:"
                  data-state="open"
                  className="fixed left-[50%] top-[50%] z-50 w-scree min-h-sc translate-x-[-50%] translate-y-[-50%] gap-4 border bg-backgroun bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg flex aspect-video max-w-3xl items-center justify-center"
                  tabIndex={-1}
                  style={{ pointerEvents: "auto" }}
                >
                  <div
                    className="p-8 lg:p-2 bg-red-5"
                    style={{ width: "640px", height: "360px" }}
                  >
                    <div style={{ width: "100%", height: "100%" }}>
                      <iframe
                        frameBorder={0}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="I Tried 200 AI Tools, These are the Best"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/gpP_YEv_9jA?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.futurepedia.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1"
                        id="widget2"
                        data-gtm-yt-inspected-14="true" />
                    </div>
                  </div>
                  <button
                  onClick={()=>setModal(false)}
                    type="button"
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                </>
}



              <div className="grid w-full grid-flow-dense grid-cols-1 gap-4 md:grid-cols-4">
                <button
                 onClick={()=>setModal(true)}
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:Rpbq7la:"
                  data-state="closed"
                  className="md:col-span-3 md:row-span-3"
                >
                  <div className="group relative col-span-4 aspect-video h-full w-full cursor-pointer overflow-hidden rounded-xl md:col-span-2 lg:col-span-3 lg:row-span-3">
                    <img
                      alt="Youtube"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="h-auto w-full transform transition-all duration-500 ease-in-out group-hover:scale-110"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      sizes="100vw"
                      // srcSet="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=3840&q=75 3840w"
                      // src="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=3840&q=75"
                      // src='https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgpP_YEv_9jA%2Fmaxresdefault.jpg&w=3840&q=75'
                      src={mainImg}
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/25 p-8 backdrop-blur-lg">
                      <svg
                        width={26}
                        height={30}
                        viewBox="0 0 26 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 11.5359C26.6667 13.0755 26.6667 16.9245 24 18.4641L6 28.8564C3.33333 30.396 -1.46309e-06 28.4715 -1.32849e-06 25.3923L-4.19966e-07 4.6077C-2.8537e-07 1.5285 3.33333 -0.396009 6 1.14359L24 11.5359Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                {allCard.slice(0, 3).map((val,i) => {
                  return (
                    <button
                    key={i}
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R19bq7la:"
                      data-state="closed"
                      className="md:grid-start-4"
                    >
                      <div className="group relative col-span-4 aspect-video cursor-pointer overflow-hidden rounded-xl md:col-span-2 lg:col-span-1 lg:col-start-4">
                        <img
                          alt="Youtube"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="h-auto w-full transform transition-all duration-500 ease-in-out group-hover:scale-110"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent",
                          }}
                          sizes="100vw"
                          // srcSet="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=3840&q=75 3840w"
                          // src="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSbgJDL4DJ7M%2Fmaxresdefault.jpg&w=3840&q=75"
                          src={img3}
                        />
                      </div>
                    </button>
                  );
                })}

                {/* <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R1pbq7la:"
                  data-state="closed"
                  className="md:grid-start-4"
                >
                  <div className="group relative col-span-4 aspect-video cursor-pointer overflow-hidden rounded-xl md:col-span-2 lg:col-span-1 lg:col-start-4">
                    <img
                      alt="Youtube"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="h-auto w-full transform transition-all duration-500 ease-in-out group-hover:scale-110"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      sizes="100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZYUt4WE4Mrw%2Fmaxresdefault.jpg&w=3840&q=75"
                    />
                  </div>
                </button>

                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R29bq7la:"
                  data-state="closed"
                  className="md:grid-start-4"
                >
                  <div className="group relative col-span-4 aspect-video cursor-pointer overflow-hidden rounded-xl md:col-span-2 lg:col-span-1 lg:col-start-4">
                    <img
                      alt="Youtube"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="h-auto w-full transform transition-all duration-500 ease-in-out group-hover:scale-110"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      sizes="100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr1uVYzI6eg%2Fmaxresdefault.jpg&w=3840&q=75"
                    />
                  </div>
                </button> */}
              </div>


            </div>
          </section>

{/* ai tools */}

          <section className="mx-auto w-full max-w-7xl">
            <section className="mx-auto bg-white px-4 py-10">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-4xl font-bold lg:text-5xl">
                  AI Tool Categories
                </h2>
                <p className="text-center text-xl font-normal text-slate-600">
                  <span
                    data-br=":R2drq7la:"
                    data-brr={1}
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      textDecoration: "inherit",
                      textWrap: "balance",
                    }}
                  >
                    We've categorized {/* */}5582{/* */} AI tools into{/* */}{" "}
                    {/* */}10{/* */} categories.
                  </span>
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/image">
                        AI Image Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      667{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/productivity">
                        AI Productivity Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      846{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/misc-tools">
                        Misc AI Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      658{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/business">
                        AI Business Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      1932{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/automations">
                        Automation Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      145{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/text-generators">
                        AI Text Generators
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      826{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/video">
                        AI Video Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      203{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/code">
                        AI Code Tools
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      400{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/art">
                        AI Art Generators
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      256{/* */} Tools
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-normal gap-4 rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="rounded-lg bg-[#49ADFF] bg-opacity-10 p-4">
                    <svg
                      width={30}
                      height={22}
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75H28.75C29.0815 0.75 29.3995 0.881696 29.6339 1.11612C29.8683 1.35054 30 1.66848 30 2C30 2.33152 29.8683 2.64946 29.6339 2.88388C29.3995 3.1183 29.0815 3.25 28.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2ZM1.25 9.5H21.25C21.5815 9.5 21.8995 9.3683 22.1339 9.13388C22.3683 8.89946 22.5 8.58152 22.5 8.25C22.5 7.91848 22.3683 7.60054 22.1339 7.36612C21.8995 7.1317 21.5815 7 21.25 7H1.25C0.918479 7 0.600537 7.1317 0.366117 7.36612C0.131696 7.60054 0 7.91848 0 8.25C0 8.58152 0.131696 8.89946 0.366117 9.13388C0.600537 9.3683 0.918479 9.5 1.25 9.5ZM28.75 13.25H1.25C0.918479 13.25 0.600537 13.3817 0.366117 13.6161C0.131696 13.8505 0 14.1685 0 14.5C0 14.8315 0.131696 15.1495 0.366117 15.3839C0.600537 15.6183 0.918479 15.75 1.25 15.75H28.75C29.0815 15.75 29.3995 15.6183 29.6339 15.3839C29.8683 15.1495 30 14.8315 30 14.5C30 14.1685 29.8683 13.8505 29.6339 13.6161C29.3995 13.3817 29.0815 13.25 28.75 13.25ZM21.25 19.5H1.25C0.918479 19.5 0.600537 19.6317 0.366117 19.8661C0.131696 20.1005 0 20.4185 0 20.75C0 21.0815 0.131696 21.3995 0.366117 21.6339C0.600537 21.8683 0.918479 22 1.25 22H21.25C21.5815 22 21.8995 21.8683 22.1339 21.6339C22.3683 21.3995 22.5 21.0815 22.5 20.75C22.5 20.4185 22.3683 20.1005 22.1339 19.8661C21.8995 19.6317 21.5815 19.5 21.25 19.5Z"
                        fill="#49ADFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">
                      <a href="https://www.futurepedia.io/ai-tools/audio-generators">
                        AI Audio Generators
                      </a>
                    </h4>
                    <span className="text-sm font-normal text-[#757575]">
                      339{/* */} Tools
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </section>


          <div className="mx-4">
            <div className="rich-text-block mx-auto w-full max-w-7xl">
              <div className="prose:text-slate-100 prose-xl prose-slate prose-invert prose-headings:scroll-m-24 prose-headings:font-semibold prose-a:underline  prose-a:decoration-inherit prose-ol:list-decimal prose-ul:list-disc">
                <p className="my-2">
                  Futurepedia is a leading AI resource platform, dedicated to
                  empowering professionals across various industries to leverage
                  AI technologies for innovation and growth. In our rapidly
                  evolving technological landscape,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/ai-tools"
                  >
                    AI tools
                  </a>{" "}
                  like{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/chatgpt"
                  >
                    ChatGPT
                  </a>
                  ,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/runwayml"
                  >
                    Runway ML
                  </a>
                  ,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/gamma"
                  >
                    Gamma AI
                  </a>
                  ,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/facecheck-id"
                  >
                    Facecheck ID
                  </a>
                  ,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/magic-school-ai"
                  >
                    Magic School AI
                  </a>
                  ,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/looka"
                  >
                    Looka
                  </a>
                  ,{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/uberduck"
                  >
                    Uberduck AI
                  </a>{" "}
                  &amp;{" "}
                  <a
                    className="anchor"
                    href="https://www.futurepedia.io/tool/playground-ai"
                  >
                    Playground AI
                  </a>{" "}
                  are essential for advancement in nearly all areas of business.
                  Our platform offers comprehensive directories, easy-to-follow
                  guides, a weekly newsletter, and an informative YouTube
                  channel, simplifying AI integration into professional
                  practices. Committed to making AI understandable and
                  practical, we provide resources tailored to diverse
                  professional needs, fostering a community of more than 200,000
                  professionals sharing knowledge and experiences. Join us in
                  shaping a future where AI is integral to work and innovation.
                </p>
                <p className="my-2" />
                <p className="my-2" />
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* footer */}
      <footer className="bg-[#0a0e23]" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:px-0 lg:px-8 lg:pt-12">
          <div className="w-full xl:grid xl:grid-cols-[300px_1fr_200px] xl:gap-16">
            <div className="mb-10 mt-4 xl:mb-0 xl:mt-0">
              <img
                alt="Futurepedia"
                loading="lazy"
                width={195}
                height={40}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                // srcSet="/_next/image?url=%2Ffuturepedia-light.svg&w=256&q=75 1x, /_next/image?url=%2Ffuturepedia-light.svg&w=640&q=75 2x"
                // src="/_next/image?url=%2Ffuturepedia-light.svg&w=640&q=75"
                src={
                  "https://www.futurepedia.io/_next/image?url=%2Ffuturepedia-light.svg&w=640&q=75"
                }
              />
              <p className="mt-4 text-white">
                Advertiser Disclosure: Futurepedia.io is committed to rigorous
                editorial standards to provide our users with accurate and
                helpful content. To keep our site free, we may receive
                compensation when you click some links on our site.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  Categories
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/ai-tools/productivity"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Productivity Tools
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/image-generators"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Image Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/text-generators"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Text Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/video-generators"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Video Tools
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/art"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Art Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/audio-generators"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Audio Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      All AI Tools
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  Resources
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/ai-tools/art-generators/best"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Best AI Art Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/image-generators/best"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Best AI Image Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/chatbots/best"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Best AI Chatbots
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/text-generators/best"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Best AI Text Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ai-tools/3D-generator/best"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Best AI 3D Generators
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      All Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  Company
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/contact"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.passionfroot.me/futurepedia"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Advertise
                    </a>
                  </li>
                  <li>
                    <a
                      href="/submit-tool"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Submit a Tool
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tally.so/r/nWEKPQ"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Request a Feature
                    </a>
                  </li>
                  <li>
                    <a
                      href="/update-a-tool"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Update a Tool
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-left text-sm leading-6 text-gray-300 hover:text-white"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r6:"
                      data-state="closed"
                    >
                      Create an account
                    </a>
                  </li>
                  <li>
                    <button className="text-sm leading-6 text-gray-300 hover:text-white">
                      Login
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-auto mt-10 sm:max-w-[200px] xl:mt-0">
              <div className="flex flex-col items-center justify-center">
                <button
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ice-500 text-primary-foreground hover:bg-ice-600 cursor-pointer rounded-full h-10 px-4 py-2 w-full whitespace-nowrap"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r0:"
                  data-state="closed"
                >
                  Sign up for free
                </button>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/futurepedia"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400"
                    rel="noreferrer, noopener, nofollow"
                  >
                    <span className="sr-only">Linkedin</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="h-6 w-6"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/futurepedia_io"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400"
                    rel="noreferrer, noopener, nofollow"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="h-6 w-6"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@futurepedia_io"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400"
                    rel="noreferrer, noopener, nofollow"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 576 512"
                      className="h-6 w-6"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@futurepediaio"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400"
                    rel="noreferrer, noopener, nofollow"
                  >
                    <span className="sr-only">TikTok</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="h-6 w-6"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/futurepedia__io/"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400"
                    rel="noreferrer, noopener, nofollow"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="h-6 w-6"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/futurepediadotio/"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400"
                    rel="noreferrer, noopener, nofollow"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="h-6 w-6"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex gap-4">
              <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                © {/* */}2024{/* */} Futurepedia LLC. All rights reserved.
              </p>
              <a
                className="text-xs leading-5 text-ice-500 md:order-1 md:mt-0"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs leading-5 text-ice-500 md:order-1 md:mt-0"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FuturePediaWeb;

// const ai = ()=>{

//   <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/chatplayground">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="ChatPlayground AI logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fe4ec5ef055c38ab62dcc742feb0849238d22df01-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fe4ec5ef055c38ab62dcc742feb0849238d22df01-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fe4ec5ef055c38ab62dcc742feb0849238d22df01-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/chatplayground">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           ChatPlayground AI
//         </p>
//       </a>
//       <a href="/tool/chatplayground">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 5 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}1{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Free Trial</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">7</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Multi-chatbot powerhouse for AI tasks.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/students"
//       >
//         #{/* */}students
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/chatbots"
//       >
//         #{/* */}ai chatbots
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/search-engine"
//       >
//         #{/* */}search engine
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-sparkles "
//         role="presentation"
//       >
//         <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//         <path d="M5 3v4" />
//         <path d="M19 17v4" />
//         <path d="M3 5h4" />
//         <path d="M17 19h4" />
//       </svg>{" "}
//       {/* */}New
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="ChatPlayground AI"
//       data-tool-category="students"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={2}
//       data-sponsor-status="not_active"
//       href="https://www.chatplayground.ai/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/replyio">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="Reply.io  logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F33541cd646c8b8e82b6924cfc6b314e93d04f25a-192x192.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F33541cd646c8b8e82b6924cfc6b314e93d04f25a-192x192.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F33541cd646c8b8e82b6924cfc6b314e93d04f25a-192x192.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/replyio">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           Reply.io{" "}
//         </p>
//       </a>
//       <a href="/tool/replyio">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Freemium</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">124</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Automate sales outreach, analyze performance, integrate
//     seamlessly.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/marketing"
//       >
//         #{/* */}marketing
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/sales-assistant"
//       >
//         #{/* */}sales
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/email-assistant"
//       >
//         #{/* */}email assistant
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="Reply.io "
//       data-tool-category="marketing"
//       data-tool-placement="homepage"
//       data-sponsorship-status="not_active"
//       data-sponsor-position={3}
//       data-sponsor-status="not_active"
//       href="https://reply.io/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/ai-suitup">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="AI SuitUp logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Ff471d9bf09c0d11c69f636ed4c99e8b36c516491-256x256.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Ff471d9bf09c0d11c69f636ed4c99e8b36c516491-256x256.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Ff471d9bf09c0d11c69f636ed4c99e8b36c516491-256x256.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/ai-suitup">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           AI SuitUp
//         </p>
//       </a>
//       <a href="/tool/ai-suitup">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 5 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}1{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Paid</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">28</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Generates high-quality and personalized headshots for
//     professional purposes, such as LinkedIn profiles and
//     business profiles.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/portrait-generators"
//       >
//         #{/* */}portrait generators
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/design-generators"
//       >
//         #{/* */}design generators
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/image-editing"
//       >
//         #{/* */}image editing
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="AI SuitUp"
//       data-tool-category="portrait generators"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={4}
//       data-sponsor-status="not_active"
//       href="https://www.aisuitup.com/?via=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/ai-detector-writehuman">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="AI Detector logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F8e5009f0a6edb060770b3134d8134369660ef2e5-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F8e5009f0a6edb060770b3134d8134369660ef2e5-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F8e5009f0a6edb060770b3134d8134369660ef2e5-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/ai-detector-writehuman">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           AI Detector
//         </p>
//       </a>
//       <a href="/tool/ai-detector-writehuman">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Paid</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">7</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Unmask AI writing with swift, user-friendly text
//     authenticity analysis. Made by WriteHuman.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/education"
//       >
//         #{/* */}education
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/ai-detection"
//       >
//         #{/* */}ai detection
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="AI Detector"
//       data-tool-category="education"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={5}
//       data-sponsor-status="not_active"
//       href="https://writehuman.ai/ai-detector?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/plumb">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="Plumb logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fdafe4815a0e8aaf9ccfe24a59d98bea5a2a42f31-3000x3000.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fdafe4815a0e8aaf9ccfe24a59d98bea5a2a42f31-3000x3000.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fdafe4815a0e8aaf9ccfe24a59d98bea5a2a42f31-3000x3000.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/plumb">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           Plumb
//         </p>
//       </a>
//       <a href="/tool/plumb">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Contact for Pricing</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">15</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Create complex AI pipelines effortlessly in a node-based
//     editor.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/education"
//       >
//         #{/* */}education
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/no-code"
//       >
//         #{/* */}low-code/no-code
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/ai-agents"
//       >
//         #{/* */}ai agents
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="Plumb"
//       data-tool-category="education"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={6}
//       data-sponsor-status="not_active"
//       href="https://useplumb.com/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/mapedu">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="mapEDU logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb87295864a1de1a4ec7f76d1b394b4b9c63936d9-68x68.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb87295864a1de1a4ec7f76d1b394b4b9c63936d9-68x68.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb87295864a1de1a4ec7f76d1b394b4b9c63936d9-68x68.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/mapedu">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           mapEDU
//         </p>
//       </a>
//       <a href="/tool/mapedu">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Contact for Pricing</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">9</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     AI-powered curriculum optimization and exam analysis for
//     healthcare education.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/education"
//       >
//         #{/* */}education
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/health"
//       >
//         #{/* */}health
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/teachers"
//       >
//         #{/* */}teachers
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="mapEDU"
//       data-tool-category="education"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={7}
//       data-sponsor-status="not_active"
//       href="http://mapedu.com/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/immersive-fox">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="Immersive Fox logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F61a2152087e0173f8864311bc90fbb604656c7c6-50x54.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F61a2152087e0173f8864311bc90fbb604656c7c6-50x54.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F61a2152087e0173f8864311bc90fbb604656c7c6-50x54.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/immersive-fox">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           Immersive Fox
//         </p>
//       </a>
//       <a href="/tool/immersive-fox">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Freemium</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">13</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Transform text to multilingual videos with AI avatars,
//     rapidly and cost-effectively.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/marketing"
//       >
//         #{/* */}marketing
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/avatar-generator"
//       >
//         #{/* */}avatars
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/text-to-video"
//       >
//         #{/* */}text to video
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="#6b7280"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-award "
//       >
//         <circle cx={12} cy={8} r={6} />
//         <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
//       </svg>{" "}
//       {/* */}Editor's Pick
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="Immersive Fox"
//       data-tool-category="marketing"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={8}
//       data-sponsor-status="not_active"
//       href="https://www.immersive-fox.com/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/ledgeriq">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="LedgerIQ logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fbb389dcb14842636932c69b640f5d7acb870fc3e-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fbb389dcb14842636932c69b640f5d7acb870fc3e-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fbb389dcb14842636932c69b640f5d7acb870fc3e-128x128.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/ledgeriq">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           LedgerIQ
//         </p>
//       </a>
//       <a href="/tool/ledgeriq">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Contact for Pricing</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">12</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Revolutionize bookkeeping: AI-driven, intuitive, scalable
//     for freelancers and SMBs.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/finance"
//       >
//         #{/* */}finance
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/e-commerce"
//       >
//         #{/* */}e-commerce
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/startup-assistant"
//       >
//         #{/* */}startup tools
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="LedgerIQ"
//       data-tool-category="finance"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={9}
//       data-sponsor-status="not_active"
//       href="https://www.kickstarter.com/projects/ledgeriq/free-ai-powered-bookkeeping-for-self-employed?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/brand">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="Brand24 logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb3aa59aafca286701672748d186f883d6eadecc2-62x62.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb3aa59aafca286701672748d186f883d6eadecc2-62x62.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb3aa59aafca286701672748d186f883d6eadecc2-62x62.svg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/brand">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           Brand24
//         </p>
//       </a>
//       <a href="/tool/brand">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Free Trial</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">13</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Monitor, analyze, and engage with your brand's online
//     presence effortlessly.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/marketing"
//       >
//         #{/* */}marketing
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/social-media"
//       >
//         #{/* */}social media
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/research-assistant"
//       >
//         #{/* */}research
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="Brand24"
//       data-tool-category="marketing"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={10}
//       data-sponsor-status="not_active"
//       href="https://brand24.com/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=paidlisting"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/macky">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="Macky logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F0f68e17ef54039e9896b825e922bcb0fe935c091-29x30.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F0f68e17ef54039e9896b825e922bcb0fe935c091-29x30.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F0f68e17ef54039e9896b825e922bcb0fe935c091-29x30.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/macky">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           Macky
//         </p>
//       </a>
//       <a href="/tool/macky">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <svg
//                 className="text-yellow-500 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#FF9635"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 5 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}1{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Freemium</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">12</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     Unlock actionable insights and streamline complex queries
//     with cutting-edge AI-driven consulting solutions.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/marketing"
//       >
//         #{/* */}marketing
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/writing-generators"
//       >
//         #{/* */}writing generators
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/education"
//       >
//         #{/* */}education
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="Macky"
//       data-tool-category="marketing"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={11}
//       data-sponsor-status="not_active"
//       href="https://macky.ai/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg">
//   <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
//     <a href="/tool/kintext">
//       <div className="relative flex flex-shrink-0 rounded-xl border">
//         <img
//           alt="Kintext logo"
//           loading="lazy"
//           width={120}
//           height={120}
//           decoding="async"
//           data-nimg={1}
//           className="aspect-square h-[60px] w-[60px] rounded-xl"
//           style={{ color: "transparent" }}
//           srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F44d007ad1d9cbae983283ed997402c056ae02322-1024x1024.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F44d007ad1d9cbae983283ed997402c056ae02322-1024x1024.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75 2x"
//           src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F44d007ad1d9cbae983283ed997402c056ae02322-1024x1024.png%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=256&q=75"
//         />
//         <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
//           <svg
//             width={18}
//             height={18}
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
//               fill="#49ADFF"
//             />
//           </svg>
//         </div>
//       </div>
//     </a>
//     <div className="flex flex-col items-start">
//       <a href="/tool/kintext">
//         <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700">
//           Kintext
//         </p>
//       </a>
//       <a href="/tool/kintext">
//         <div className="flex items-center gap-2 text-lg">
//           <div className="flex">
//             <div className="flex">
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <svg
//                 className="text-gray-300 h-4 w-4"
//                 fill="none"
//                 height={24}
//                 role="img"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 width={24}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <polygon
//                   points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//                   fill="#727272"
//                 />
//               </svg>
//               <span className="sr-only">
//                 Rated 0 out of 5
//               </span>
//             </div>
//           </div>
//           ({/* */}0{/* */})
//         </div>
//       </a>
//     </div>
//   </div>
//   <div className="px-6">
//     <div className="flex justify-between text-lg">
//       <span>Paid</span>
//       <span className="flex items-center text-slate-500">
//         <span className="mr-1">11</span>
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-ice-500 hover:stroke-ice-500 fill-bookmark-inactive stroke-bookmark-inactive"
//             role="presentation"
//           >
//             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//           </svg>
//           <span className="sr-only">Add bookmark</span>
//         </button>
//       </span>
//     </div>
//   </div>
//   <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
//     AI-driven parenting assistant offering personalized
//     advice, milestone tracking, and community support.
//   </p>
//   <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-ice-500">
//     <div className="flex flex-wrap gap-x-2 gap-y-1 ">
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/personal-assistant"
//       >
//         #{/* */}personal assistant
//       </a>
//       <a
//         className="hover:text-underline"
//         href="/ai-tools/ai-agents"
//       >
//         #{/* */}ai agents
//       </a>
//     </div>
//   </div>
//   <div className="px-6 mt-auto flex items-center justify-between pb-4">
//     <div className="flex items-center gap-2 text-[#6b7280]">
//       {" "}
//     </div>
//     <a
//       className="hover:no-underline"
//       target="_blank"
//       rel="nofollow"
//       data-tool-name="Kintext"
//       data-tool-category="personal assistant"
//       data-tool-placement="homepage"
//       data-sponsorship-status="active"
//       data-sponsor-position={12}
//       data-sponsor-status="not_active"
//       href="https://kintext.com/?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia"
//     >
//       <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-ice-500 flex items-center gap-2 border-2 border-ice-500 hover:bg-ice-500 hover:text-white h-10 px-4 py-2">
//         <span className="text-lg font-normal">Visit</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={3}
//           height={3}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-external-link h-5 w-5"
//         >
//           <path d="M15 3h6v6" />
//           <path d="M10 14 21 3" />
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//         </svg>
//       </button>
//     </a>
//   </div>
// </div>
// }
