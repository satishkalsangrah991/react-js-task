// import { useRef, useState } from "react";
// import Icons from "./Icons";

// const NoApiMultiselect = () => {
//   const [query, setQuery] = useState("");
//   const [selected, setSelected] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(true);

//   const inputRef = useRef(null);

//   const tags = [
//     "Tutorial",
//     "HowTo",
//     "DIY",
//     "Review",
//     "Tech",
//     "Gaming",
//     "Travel",
//     "Fitness",
//     "Cooking",
//     "Vlog",
//   ];

//   const filteredTags = tags.filter(
//     (item) =>
//       item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
//       !selected.includes(item)
//   );

//   const isDisable =
//     !query?.trim() ||
//     selected.filter(
//       (item) =>
//         item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
//     )?.length;

//   return (
//     <div className="bg-[#eef1f8] h-screen grid place-items-center ">
//       <div className="relative w-80 h-96 text-sm">
//         {selected?.length ? (
//           <div className="bg-white w-80 relative text-xs flex flex-wrap gap-1 p-2 mb-2">
//             {selected.map((tag) => {
//               return (
//                 <div
//                   key={tag}
//                   className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
//                   flex items-center gap-2"
//                 >
//                   {tag}
//                   <div
//                     onMouseDown={(e) => e.preventDefault()}
//                     onClick={() =>
//                       setSelected(selected.filter((i) => i !== tag))
//                     }
//                   >
//                     <Icons.Close />
//                   </div>
//                 </div>
//               );
//             })}
//             <div className="w-full text-right">
//               <span
//                 className="text-gray-400 cursor-pointer"
//                 onClick={() => {
//                   setSelected([]);
//                   inputRef.current?.focus();
//                 }}
//               >
//                 Clear all
//               </span>
//             </div>
//           </div>
//         ) : null}
//         <div className="card flex items-center justify-between p-3 w-80 gap-2.5">
//           <Icons.Search />
//           <input
//             ref={inputRef}
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value.trimStart())}
//             placeholder="Search or Create tags"
//             className="bg-transparent text-sm flex-1 caret-rose-600"
//             onFocus={() => setMenuOpen(true)}
//             onBlur={() => setMenuOpen(false)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !isDisable) {
//                 setSelected((prev) => [...prev, query]);
//                 setQuery("");
//                 setMenuOpen(true);
//               }
//             }}
//           />
//           <button
//             className="text-sm disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
//             disabled={isDisable}
//             onClick={() => {
//               if (isDisable) {
//                 return;
//               }
//               setSelected((prev) => [...prev, query]);
//               setQuery("");
//               inputRef.current?.focus();
//               setMenuOpen(true);
//             }}
//           >
//             + Add
//           </button>
//         </div>

//         {/* Menu's */}
//         {menuOpen ? (
//           <div className="card absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
//             <ul className="w-full">
//               {filteredTags?.length ? (
//                 filteredTags.map((tag, i) => (
//                   <li
//                     key={tag}
//                     className="p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full"
//                     onMouseDown={(e) => e.preventDefault()}
//                     onClick={() => {
//                       setMenuOpen(true);
//                       setSelected((prev) => [...prev, tag]);
//                       setQuery("");
//                     }}
//                   >
//                     {tag}
//                   </li>
//                 ))
//               ) : (
//                 <li className="p-2 text-gray-500">No options available</li>
//               )}
//             </ul>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default  NoApiMultiselect







// import React, { useState } from 'react';
// import { HiCheck, HiSearch } from 'react-icons/hi'; // Install react-icons for icons
// // import classNames from 'classnames'; // Install classnames for conditional class application

// const options = [ // Example options
//   { id: 1, label: 'Option 1' },
//   { id: 2, label: 'Option 2' },
//   { id: 3, label: 'Option 3' },
//   { id: 4, label: 'Option 4' },
//   { id: 5, label: 'Option 5' }
// ];

// const MultiSelectDropdown = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleToggleOption = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const filteredOptions = options.filter((option) =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="absolute w-full mt-2 bg-white rounded-md border border-gray-300 shadow-md">
//         {filteredOptions.map((option) => (
//           <div
//             key={option.id}
//             className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
//             onClick={() => handleToggleOption(option)}
//           >
//             <input
//               type="checkbox"
//               className="mr-2 cursor-pointer"
//               checked={selectedOptions.includes(option)}
//               onChange={() => handleToggleOption(option)}
//             />
//             <span>{option.label}</span>
//             {selectedOptions.includes(option) && (
//               <HiCheck className="ml-auto w-5 h-5 text-green-500" />
//             )}
//           </div>
//         ))}
//         {filteredOptions.length === 0 && (
//           <div className="px-4 py-2 text-gray-500">No options found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MultiSelectDropdown;



// MultiSelectDropdown.js

import React, { useState } from "react";

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Select options
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM7 13a1 1 0 012 0v3a1 1 0 11-2 0v-3zM13 13a1 1 0 012 0v3a1 1 0 11-2 0v-3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {/* Dropdown */}
      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center justify-between px-4 py-2 text-sm"
            >
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                onChange={() => handleOptionToggle(option)}
                checked={selectedOptions.includes(option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;

