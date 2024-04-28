import React from 'react'

const HoverMenunavigation = () => {
  return (
   <>
    
      {/* <div className="mx-auto flex hscreen w-full items-center justify-center bg-gray-200 py-20">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5 bg-white px-4">
            <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" onclick>
              Choose Day
            </a>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </div>
          <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Sunday
            </a>
         
         
          </div>
        </div>
      </div> */}



      {/* <div className="p-4 max-w-lg mx-auto mt-24">
        <details className="mb-2 group">
          <summary className="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4">
            <span className="font-semibold menu-hover">Main Dropdown</span>
          </summary>
          <ul className="ml-8 space-y-4 invisible absolut z-50 fle w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
            <li>
              <details className="mb-2">
                <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                  <span className="font-semibold">Nested Dropdown 1</span>
                </summary>
                <div className="bg-white p-4">
                  <p className="text-gray-800">Content for Nested Dropdown 1</p>
                </div>
              </details>
            </li>
            <li>
              <details className="mb-2">
                <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                  <span className="font-semibold">Nested Dropdown 2</span>
                </summary>
                <div className="bg-white p-4">
                  <p className="text-gray-800">Content for Nested Dropdown 2</p>
                </div>
              </details>
            </li>
            <li>
              <details className="mb-2">
                <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                  <span className="font-semibold">Nested Dropdown 3</span>
                </summary>
                <div className="bg-white p-4">
                  <p className="text-gray-800">Content for Nested Dropdown 3</p>
                </div>
              </details>
            </li>
          </ul>
        </details>
      
      </div> */}
 
      <div>
        {/* component */}
        <div className="group inline-block">
          <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
            <span className="pr-1 font-semibold flex-1">Dropdown</span>
            <span>
              <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32">
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Langauges</span>
                <span className="mr-auto">
                  <svg className="fill-current h-4 w-4
            transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  ">
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Python</span>
                    <span className="mr-auto">
                      <svg className="fill-current h-4 w-4
                transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      ">
                    <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                    <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                  </ul>
                </li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
          </ul>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
      </div>



      <div>
        {/* component */}
        <div className="group inline-block">
          <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
            <span className="pr-1 font-semibold flex-1">Dropdown</span>
            <span>
              <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32">
          
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Langauges</span>
                <span className="mr-auto">
                  <svg className="fill-current h-4 w-4
            transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  ">
               
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Python</span>
                   
                  </button>
                 
                </li>
               
              </ul>
            </li>
         
          </ul>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
      </div>
   </>
  )
}

export default HoverMenunavigation