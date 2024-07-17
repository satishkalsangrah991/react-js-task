import React, { useEffect, useState } from "react";
import futureLogo from "../../images/futurelogo.svg";
const FutureNavbar = () => {
  // console.log(futureLogo);

  const [nav,setNav] = useState(false)
  const [opensearch,setOpenSearch] = useState(false)
  const [opensearch1,setOpenSearch1] = useState(false)
 
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }
  
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      // cleanup function
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);
    console.log(show)
    console.log(lastScrollY)
  return (

   
    <>

      {/* desktop start code */}

      {/* rgb(219 239 255) */}
      <div className="fixed left-0 right-0 top-0 z-10 bg-[#DCF0FF]">
      { show &&
        <div className="w-full bg-white py-2" id="compensation-info-banner">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-slate-500 xl:px-0">
            <p>
              We may earn compensation from some listings on this page.{" "}
              <a href="/disclosure" className="text-ice-500" target="_blank">
                Learn More
              </a>
            </p>
            <p className="mt-0 hidden items-center gap-2 md:flex">
              Our AI videos have over 14 million views on{" "}
              <a
                className="flex justify-end gap-4 text-ice-500"
                href="https://www.youtube.com/@futurepedia_io"
                target="_blank"
              >
                <img
                  alt="youtube"
                  loading="lazy"
                  width={60}
                  height={12}
                  decoding="async"
                  data-nimg={1}
                  // srcSet="/_next/image?url=%2Fyoutube.svg&w=64&q=75 1x, /_next/image?url=%2Fyoutube.svg&w=128&q=75 2x"
                  // src="/_next/image?url=%2Fyoutube.svg&w=128&q=75"
                  src="https://www.futurepedia.io/_next/image?url=%2Fyoutube.svg&w=128&q=75"
                  style={{ color: "transparent" }}
                />
                Go Watch →
              </a>
            </p>
            <button className="md:hidden">
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
                className="lucide lucide-circle-x "
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </button>
          </div>
        </div>
      }
        <div className="px-4 py-2">

          <nav className="hidden w-full lg:block">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <a className="pointer" href="/">
                {/* <img
                  alt="Futurepedia"
                  loading="lazy"
                  width={171}
                  height={35}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  // srcSet="https://www.futurepedia.io/_next/image?url=%2Ffuturepedia-dark.svg&w=256&q=75 1x, /_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75 2x"
                  // src="https://www.futurepedia.io/_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75"
                  // src={futureLogo}
                  // src="https://www.futurepedia.io/_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="35"
                  viewBox="0 0 171 35"
                  width="171"
                >
                  <path
                    d="M45 25.7135V8.49H48.332V25.7135H45ZM47.45 18.6575V15.693H56.1229V18.6575H47.45ZM47.45 11.43V8.49H56.5394V11.43H47.45Z"
                    fill="#273653"
                  />
                  <path
                    d="M63.1329 25.9585C62.0876 25.9585 61.1566 25.738 60.3399 25.297C59.5396 24.856 58.9108 24.2435 58.4534 23.4595C57.9961 22.6755 57.7674 21.769 57.7674 20.74V13.88H61.0014V20.6665C61.0014 21.1565 61.0831 21.5812 61.2464 21.9405C61.4097 22.2835 61.6547 22.5448 61.9814 22.7245C62.3081 22.9042 62.6919 22.994 63.1329 22.994C63.8026 22.994 64.3252 22.7898 64.7009 22.3815C65.0765 21.9732 65.2644 21.4015 65.2644 20.6665V13.88H68.4739V20.74C68.4739 21.7853 68.2452 22.7 67.7879 23.484C67.3469 24.268 66.718 24.8805 65.9014 25.3215C65.101 25.7462 64.1782 25.9585 63.1329 25.9585Z"
                    fill="#273653"
                  />
                  <path
                    d="M72.0342 25.7135V8.9555H75.2436V25.7135H72.0342ZM69.2657 16.6975V13.88H78.0121V16.6975H69.2657Z"
                    fill="#273653"
                  />
                  <path
                    d="M84.129 25.9585C83.0837 25.9585 82.1527 25.738 81.336 25.297C80.5357 24.856 79.9069 24.2435 79.4496 23.4595C78.9922 22.6755 78.7636 21.769 78.7636 20.74V13.88H81.9975V20.6665C81.9975 21.1565 82.0792 21.5812 82.2425 21.9405C82.4059 22.2835 82.6509 22.5448 82.9775 22.7245C83.3042 22.9042 83.688 22.994 84.129 22.994C84.7987 22.994 85.3213 22.7898 85.697 22.3815C86.0727 21.9732 86.2605 21.4015 86.2605 20.6665V13.88H89.47V20.74C89.47 21.7853 89.2413 22.7 88.784 23.484C88.343 24.268 87.7142 24.8805 86.8975 25.3215C86.0972 25.7462 85.1743 25.9585 84.129 25.9585Z"
                    fill="#273653"
                  />
                  <path
                    d="M91.2908 25.7135V13.88H94.5003V25.7135H91.2908ZM94.5003 19.172L93.2508 18.339C93.3978 16.8853 93.8225 15.742 94.5248 14.909C95.2271 14.0597 96.2398 13.635 97.5628 13.635C98.1344 13.635 98.6489 13.733 99.1062 13.929C99.5636 14.1087 99.9801 14.4108 100.356 14.8355L98.3467 17.1385C98.1671 16.9425 97.9466 16.7955 97.6853 16.6975C97.4403 16.5995 97.1544 16.5505 96.8278 16.5505C96.1418 16.5505 95.5783 16.771 95.1373 17.212C94.7126 17.6367 94.5003 18.29 94.5003 19.172Z"
                    fill="#273653"
                  />
                  <path
                    d="M106.073 25.9585C104.831 25.9585 103.729 25.6972 102.765 25.1745C101.801 24.6355 101.034 23.9005 100.462 22.9695C99.9068 22.0385 99.6292 20.9768 99.6292 19.7845C99.6292 18.6085 99.8987 17.5632 100.438 16.6485C100.993 15.7175 101.744 14.9825 102.692 14.4435C103.639 13.8882 104.692 13.6105 105.852 13.6105C106.995 13.6105 108 13.8718 108.866 14.3945C109.748 14.9008 110.434 15.6032 110.924 16.5015C111.43 17.3835 111.683 18.388 111.683 19.515C111.683 19.7273 111.667 19.9478 111.634 20.1765C111.618 20.3888 111.577 20.6338 111.512 20.9115L101.565 20.936V18.535L110.017 18.5105L108.719 19.515C108.686 18.8127 108.555 18.2247 108.327 17.751C108.114 17.2773 107.796 16.918 107.371 16.673C106.963 16.4117 106.456 16.281 105.852 16.281C105.215 16.281 104.66 16.428 104.186 16.722C103.712 16.9997 103.345 17.3998 103.084 17.9225C102.839 18.4288 102.716 19.0332 102.716 19.7355C102.716 20.4542 102.847 21.083 103.108 21.622C103.386 22.1447 103.778 22.553 104.284 22.847C104.79 23.1247 105.378 23.2635 106.048 23.2635C106.652 23.2635 107.2 23.1655 107.69 22.9695C108.18 22.7572 108.604 22.4468 108.964 22.0385L110.85 23.925C110.278 24.5947 109.576 25.101 108.743 25.444C107.926 25.787 107.036 25.9585 106.073 25.9585Z"
                    fill="#273653"
                  />
                  <path
                    d="M119.499 25.9585C118.65 25.9585 117.882 25.787 117.196 25.444C116.51 25.0847 115.963 24.6028 115.554 23.9985C115.146 23.3942 114.926 22.7 114.893 21.916V17.7265C114.926 16.9425 115.146 16.2483 115.554 15.644C115.979 15.0233 116.526 14.5333 117.196 14.174C117.882 13.8147 118.65 13.635 119.499 13.635C120.593 13.635 121.573 13.9045 122.439 14.4435C123.304 14.9825 123.982 15.7175 124.472 16.6485C124.979 17.5795 125.232 18.633 125.232 19.809C125.232 20.9687 124.979 22.014 124.472 22.945C123.982 23.876 123.304 24.611 122.439 25.15C121.573 25.689 120.593 25.9585 119.499 25.9585ZM118.935 22.994C119.523 22.994 120.046 22.8633 120.503 22.602C120.961 22.3243 121.312 21.9487 121.557 21.475C121.818 20.985 121.949 20.4215 121.949 19.7845C121.949 19.1638 121.818 18.6167 121.557 18.143C121.312 17.653 120.961 17.2773 120.503 17.016C120.046 16.7383 119.523 16.5995 118.935 16.5995C118.364 16.5995 117.849 16.7383 117.392 17.016C116.935 17.2773 116.575 17.653 116.314 18.143C116.069 18.6167 115.946 19.1638 115.946 19.7845C115.946 20.4215 116.069 20.985 116.314 21.475C116.575 21.9487 116.926 22.3243 117.367 22.602C117.825 22.8633 118.347 22.994 118.935 22.994ZM112.933 30.6625V13.88H116.142V16.9915L115.603 19.858L116.118 22.7245V30.6625H112.933Z"
                    fill="#273653"
                  />
                  <path
                    d="M132.261 25.9585C131.019 25.9585 129.917 25.6972 128.953 25.1745C127.989 24.6355 127.222 23.9005 126.65 22.9695C126.095 22.0385 125.817 20.9768 125.817 19.7845C125.817 18.6085 126.087 17.5632 126.626 16.6485C127.181 15.7175 127.932 14.9825 128.88 14.4435C129.827 13.8882 130.88 13.6105 132.04 13.6105C133.183 13.6105 134.188 13.8718 135.054 14.3945C135.936 14.9008 136.622 15.6032 137.112 16.5015C137.618 17.3835 137.871 18.388 137.871 19.515C137.871 19.7273 137.855 19.9478 137.822 20.1765C137.806 20.3888 137.765 20.6338 137.7 20.9115L127.753 20.936V18.535L136.205 18.5105L134.907 19.515C134.874 18.8127 134.743 18.2247 134.515 17.751C134.302 17.2773 133.984 16.918 133.559 16.673C133.151 16.4117 132.644 16.281 132.04 16.281C131.403 16.281 130.848 16.428 130.374 16.722C129.9 16.9997 129.533 17.3998 129.272 17.9225C129.027 18.4288 128.904 19.0332 128.904 19.7355C128.904 20.4542 129.035 21.083 129.296 21.622C129.574 22.1447 129.966 22.553 130.472 22.847C130.978 23.1247 131.566 23.2635 132.236 23.2635C132.84 23.2635 133.388 23.1655 133.878 22.9695C134.368 22.7572 134.792 22.4468 135.152 22.0385L137.038 23.925C136.466 24.5947 135.764 25.101 134.931 25.444C134.114 25.787 133.224 25.9585 132.261 25.9585Z"
                    fill="#273653"
                  />
                  <path
                    d="M144.119 25.9585C143.025 25.9585 142.045 25.689 141.179 25.15C140.313 24.611 139.627 23.876 139.121 22.945C138.631 22.014 138.386 20.9687 138.386 19.809C138.386 18.633 138.631 17.5795 139.121 16.6485C139.627 15.7175 140.305 14.9825 141.154 14.4435C142.02 13.9045 143.008 13.635 144.119 13.635C144.968 13.635 145.728 13.8065 146.397 14.1495C147.083 14.4925 147.63 14.9743 148.039 15.595C148.463 16.1993 148.692 16.8853 148.725 17.653V21.867C148.692 22.6347 148.472 23.3288 148.063 23.9495C147.655 24.5702 147.108 25.0602 146.422 25.4195C145.736 25.7788 144.968 25.9585 144.119 25.9585ZM144.658 22.994C145.262 22.994 145.785 22.8633 146.226 22.602C146.683 22.3243 147.034 21.9487 147.279 21.475C147.541 20.985 147.671 20.4215 147.671 19.7845C147.671 19.1638 147.541 18.6167 147.279 18.143C147.034 17.653 146.683 17.2773 146.226 17.016C145.785 16.7383 145.27 16.5995 144.682 16.5995C144.078 16.5995 143.547 16.7383 143.09 17.016C142.649 17.2937 142.298 17.6693 142.036 18.143C141.791 18.6167 141.669 19.1638 141.669 19.7845C141.669 20.4215 141.791 20.985 142.036 21.475C142.298 21.9487 142.657 22.3243 143.114 22.602C143.572 22.8633 144.086 22.994 144.658 22.994ZM150.685 25.7135H147.5V22.5285L148.014 19.6375L147.475 16.7955V8H150.685V25.7135Z"
                    fill="#273653"
                  />
                  <path
                    d="M152.789 25.7135V13.88H156.023V25.7135H152.789Z"
                    fill="#273653"
                  />
                  <path
                    d="M163.08 25.9585C162.002 25.9585 161.03 25.689 160.165 25.15C159.299 24.611 158.621 23.876 158.131 22.945C157.641 22.014 157.396 20.9687 157.396 19.809C157.396 18.633 157.641 17.5795 158.131 16.6485C158.621 15.7175 159.299 14.9825 160.165 14.4435C161.03 13.9045 162.002 13.635 163.08 13.635C163.929 13.635 164.689 13.8065 165.359 14.1495C166.028 14.4925 166.559 14.9743 166.951 15.595C167.359 16.1993 167.58 16.8853 167.613 17.653V21.916C167.58 22.7 167.359 23.3942 166.951 23.9985C166.559 24.6028 166.028 25.0847 165.359 25.444C164.689 25.787 163.929 25.9585 163.08 25.9585ZM163.668 22.994C164.566 22.994 165.293 22.7 165.849 22.112C166.404 21.5077 166.682 20.7318 166.682 19.7845C166.682 19.1638 166.551 18.6167 166.29 18.143C166.045 17.653 165.693 17.2773 165.236 17.016C164.795 16.7383 164.272 16.5995 163.668 16.5995C163.08 16.5995 162.557 16.7383 162.1 17.016C161.659 17.2773 161.308 17.653 161.047 18.143C160.802 18.6167 160.679 19.1638 160.679 19.7845C160.679 20.4215 160.802 20.985 161.047 21.475C161.308 21.9487 161.659 22.3243 162.1 22.602C162.557 22.8633 163.08 22.994 163.668 22.994ZM166.51 25.7135V22.5285L167.025 19.6375L166.51 16.7955V13.88H169.695V25.7135H166.51Z"
                    fill="#273653"
                  />
                  <ellipse
                    cx="17.4998"
                    cy="17.5"
                    fill="#273653"
                    rx="17.4998"
                    ry="17.5"
                  />
                  <path
                    d="M11.0859 20.6739C11.0859 21.0237 11.3695 21.3073 11.7193 21.3073V21.3073C14.0515 21.3073 15.9421 19.4167 15.9421 17.0845V12.8616V8.21665C15.9421 7.86684 15.6585 7.58326 15.3087 7.58326V7.58326C12.9765 7.58326 11.0859 9.47386 11.0859 11.806V20.6739Z"
                    fill="white"
                  />
                  <path
                    d="M11.0859 11.806C11.0859 9.47386 12.9765 7.58326 15.3087 7.58326L23.2263 7.58313C24.6839 7.58313 25.8655 8.76476 25.8655 10.2224C25.8655 11.68 24.6839 12.8616 23.2263 12.8616H15.9421H13.514H12.1415C11.5585 12.8616 11.0859 12.389 11.0859 11.806V11.806Z"
                    fill="white"
                  />
                  <path
                    d="M11.0859 20.2517C11.0859 17.9195 12.9765 16.0289 15.3087 16.0289H19.637C21.0946 16.0289 22.2762 17.2106 22.2762 18.6682V18.6682C22.2762 20.1258 21.0946 21.3074 19.637 21.3074H11.0859V20.2517Z"
                    fill="#49ADFF"
                  />
                  <path
                    d="M11.0859 24.7911C11.0859 26.2487 12.2676 27.4303 13.7252 27.4303V27.4303C15.1828 27.4303 16.3644 26.2487 16.3644 24.7911V24.7911C16.3644 23.3335 15.1827 22.1518 13.7251 22.1518H11.0859V24.7911Z"
                    fill="white"
                  />
                  <path
                    d="M156.512 10C156.512 11.1046 155.616 12 154.512 12C153.407 12 152.512 11.1046 152.512 10C152.512 8.89543 153.407 8 154.512 8C155.616 8 156.512 8.89543 156.512 10Z"
                    fill="#49ADFF"
                  />
                  <path
                    d="M154.512 12C153.407 12 152.512 11.1046 152.512 10V12H154.512Z"
                    fill="#49ADFF"
                  />
                </svg>

                <span className="sr-only">Home</span>
              </a>
              <div className="gtmNavbar flex justify-center gap-8">
                <a
                  className="relative cursor-pointer py-4 text-ice-950 hover:text-ice-950/60"
                  href="/ai-tools"
                >
                  AI Tools
                </a>
                <a
                  className="relative cursor-pointer py-4 text-ice-950 hover:text-ice-950/60"
                  href="/ai-tools/ai-agents"
                >
                  AI Agents
                </a>
                <a
                  className="relative cursor-pointer py-4 text-ice-950 hover:text-ice-950/60"
                  href="/tutorials"
                >
                  AI Tutorials
                </a>
                <a
                  className="relative cursor-pointer py-4 text-ice-950 hover:text-ice-950/60"
                  href="/ai-innovations"
                >
                  AI Innovations
                  <span className="absolute -right-4 top-2 text-xs text-ice-500">
                    NEW
                  </span>
                </a>
                <div className="group relative py-4">
                  <a
                    className="cursor-pointer text-ice-950 hover:text-ice-950/60"
                    href
                  >
                    Advertise
                  </a>
                  <div className="absolute left-0 top-8 z-50 mt-2 hidden w-48 flex-col overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:flex">
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="https://www.passionfroot.me/futurepedia"
                    >
                      Sponsorship Options
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/submit-tool"
                    >
                      Submit A Tool
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/youtube-interest"
                    >
                      YouTube Channel
                    </a>
                  </div>
                </div>
                <div className="group relative py-4">
                  <a
                    className="cursor-pointer text-ice-950 hover:text-ice-950/60"
                    href
                  >
                    Resources
                  </a>
                  <div className="absolute left-0 top-8 z-50 mt-2 hidden w-48 flex-col overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:flex">
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/newsletter"
                    >
                      Our Newsletter
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/videos"
                    >
                      Our Videos
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/ai-conferences-list"
                    >
                      AI Conferences
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/resources/ai-fundamentals"
                    >
                      AI Fundamentals
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/resources/ai-glossary"
                    >
                      AI Glossary
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/resources/automation"
                    >
                      Automations 101
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                {/*$*/}
                <div className="flex justify-end">
                  <form
                    className={`${opensearch1 ? "relative flex items-center gap-2 overflow-hidden p-1 transition-all w0 px0" :"relative flex items-center gap-2 overflow-hidden p-1 transition-all w-0 px-0"}`}
                    action="/"
                    method="GET"
                  >
                    <input
                      type="text"
                      className="w-full rounded-full border-none bg-gray-100 p-2 pr-20 text-black transition-all md:pr-8"
                      placeholder="Search"
                      name="search"
                      defaultValue
                    />
                    <button
                      type="submit"
                      value="Search"
                      className="absolute right-2 text-ice-500 hover:text-ice-800 md:hidden"
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
                        className="lucide lucide-arrow-right "
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={()=>setOpenSearch1(false)}
                     className="absolute right-8 mr-2 border-r border-r-slate-300 pr-2 text-slate-400 hover:text-slate-500 md:right-2 md:mr-0 md:border-none md:pr-0">
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
                        className="lucide lucide-x h-6 w-6"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </form>
                  <button
                  onClick={()=>setOpenSearch1(true)}
                   className={`${opensearch1?"hidden":"flex items-center gap-2"}`}>
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
                      className="lucide lucide-search cursor-pointer hover:text-ice-500"
                      aria-label="Search"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
                {/*/$*/}
                <div className="flex items-center justify-center gap-3">
                  <button className="text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-ice-100 rounded-full h-10 px-4 py-2 flex w-full items-center justify-center gap-2">
                    Login
                  </button>
                  <button
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ice-500 text-primary-foreground hover:bg-ice-600 cursor-pointer rounded-full h-10 px-4 py-2 w-full whitespace-nowrap"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r3:"
                    data-state="closed"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
          </nav>


{
    !nav &&
<nav className="relative left-0 top-0 block  w-full lg:hidden">
            <div className="relative z-30 flex w-full justify-between">
              <a className="flex shrink-0 items-center" href="/">
                <img
                  alt="Futurepedia"
                  loading="lazy"
                  width={171}
                  height={35}
                  decoding="async"
                  data-nimg={1}
                  className="left-4 top-4"
                  style={{ color: "transparent" }}
                  // srcSet="/_next/image?url=%2Ffuturepedia-dark.svg&w=256&q=75 1x, /_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75 2x"
                  // src="/_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75"
                  src={futureLogo}
                />
              </a>
              <div className="flex items-center gap-4">
                {/*$*/}
                <div className="flex justify-end fle justify-en absolute -left-2 right-12 md:relative md:left-auto md:right-auto md:w-auto">
                  <form
                    className={`${opensearch ? "relative flex items-center gap-2 overflow-hidden p-1 transition-all w0 px0" :"relative flex items-center gap-2 overflow-hidden p-1 transition-all w-0 px-0"}`}
                    action="/"
                    method="GET"
                  >
                    <input
                      type="text"
                      className="w-full rounded-full border-none bg-gray-100 p-2 pr-20 text-black transition-all md:pr-8"
                      placeholder="Search"
                      name="search"
                      defaultValue
                    />
                    <button
                      type="submit"
                      value="Search"
                      className="absolute right-2 text-ice-500 hover:text-ice-800 md:hidden"
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
                        className="lucide lucide-arrow-right "
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>

                    <button
                       onClick={()=>setOpenSearch(false)}
                     className="absolute right-8 mr-2 border-r border-r-slate-300 pr-2 text-slate-400 hover:text-slate-500 md:right-2 md:mr-0 md:border-none md:pr-0">
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
                        className="lucide lucide-x h-6 w-6"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                    
                  </form>

                  <button 
                  onClick={()=>setOpenSearch(true)}
                  className={`${opensearch ? "hidden" :"flex items-center gap-2"}`}>
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
                      className="lucide lucide-search cursor-pointer hover:text-ice-500"
                      aria-label="Search"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
                {/*/$*/}
                <button 
                onClick={()=>setNav(true)}
                className="right-4 top-4" aria-label="Open menu">
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
                    className="lucide lucide-menu h-8 w-8"
                  >
                    <line x1={4} x2={20} y1={12} y2={12} />
                    <line x1={4} x2={20} y1={6} y2={6} />
                    <line x1={4} x2={20} y1={18} y2={18} />
                  </svg>
                </button>
              </div>
            </div>
</nav>
}


{nav &&
<nav className="relative left-0 top-0 block  w-full lg:hidden">
      <div className="fixed left-0 top-0 z-20 flex h-screen w-full bg-white pt-20">
        <div className="absolute top-5 z-30 flex w-full justify-between px-4">
          <a href="/">
            <img
              alt="Futurepedia"
              loading="lazy"
              width={171}
              height={35}
              decoding="async"
              data-nimg={1}
              className="left-4 top-4"
              // srcSet="/_next/image?url=%2Ffuturepedia-dark.svg&w=256&q=75 1x, /_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75 2x"
              // src="/_next/image?url=%2Ffuturepedia-dark.svg&w=384&q=75"
              src={futureLogo}
              style={{ color: "transparent" }}
            />
          </a>
          <div className="flex items-center gap-4">
            <a className="right-14 top-5" href="/?focus=true">
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
                className="lucide lucide-search mr-2 cursor-pointer"
                aria-label="Search"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </a>
            <button
             onClick={()=>setNav(false)}
             className="right-4 top-4" aria-label="Close menu">
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
                className="lucide lucide-x h-8 w-8"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="gtmNavbar flex w-full flex-col">
          <a
            className="mx-4 flex items-center justify-between border-b border-gray-200 py-4 text-xl"
            href="/ai-tools"
          >
            AI Tools
          </a>
          <a
            className="mx-4 flex items-center justify-between border-b border-gray-200 py-4 text-xl"
            href="/ai-tools/ai-agents"
          >
            AI Agents
          </a>
          <a
            className="mx-4 flex items-center justify-between border-b border-gray-200 py-4 text-xl"
            href="/tutorials"
          >
            AI Tutorials
          </a>
          <a
            className="mx-4 flex items-center justify-between border-b border-gray-200 py-4 text-xl"
            href="/ai-innovations"
          >
            AI Innovations
            <span className="rounded-full bg-ice-500 px-3 py-1 text-xs text-white no-underline">
              NEW
            </span>
          </a>
          <div className="mx-4 border-b border-gray-200">
            <button className="inline-flex w-full items-center py-4 text-xl">
              Advertise
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
                className="lucide lucide-chevron-right ml-auto mt-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="mx-4 border-b border-gray-200">
            <button className="inline-flex w-full items-center py-4 text-xl">
              Resources
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
                className="lucide lucide-chevron-right ml-auto mt-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="mx-4 mt-8 gap-8">
            <div className="flex items-center justify-center gap-3">
              <button className="text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-ice-100 rounded-full h-10 px-4 py-2 flex w-full items-center justify-center gap-2">
                Login
              </button>
              <button
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-ice-500 text-primary-foreground hover:bg-ice-600 cursor-pointer rounded-full h-10 px-4 py-2 w-full whitespace-nowrap"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rc:"
                data-state="closed"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
</nav>
}

        </div>
      </div>
    </>
  );
};

export default FutureNavbar;
