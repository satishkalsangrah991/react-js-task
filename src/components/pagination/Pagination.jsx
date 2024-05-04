import React, { useState, useEffect } from 'react';
import questions from "../../constants/quetions.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Pagination = () => {
  const [data, setData] = useState(questions); // Your data array
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Number of items per page
  const [visiblePageButtonCount] = useState(3); // Maximum number of visible pagination buttons

  // Example data fetching
  useEffect(() => {
    // Fetch your data and update setData()
    // Example:
    // const fetchData = async () => {
    //   const response = await fetch('your_data_url');
    //   const data = await response.json();
    //   setData(data);
    // };
    // fetchData();
  }, []);

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for displaying page numbers
  const totalPageCount = Math.ceil(data.length / itemsPerPage);
  const maxVisiblePage = Math.min(
    currentPage + Math.floor(visiblePageButtonCount / 2),
    totalPageCount
  );
  const minVisiblePage = Math.max(maxVisiblePage - visiblePageButtonCount + 1, 1);
  const visiblePageNumbers = [];
  for (let i = minVisiblePage; i <= maxVisiblePage; i++) {
    visiblePageNumbers.push(i);
  }

  // Handle page click
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  // Handle previous page click
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Handle next page click
  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  return (
    <div>
      {/* Render data */}

{/* {maxVisiblePage}
{minVisiblePage} */}

      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item.question}</li>
        ))}
      </ul>

      {/* Render pagination */}
      <div className='fle'>
      <ul className='flex justify-center gap-4'>
        <li>
          <button 
                      className={`${currentPage === 1 ?"hidden":"block"}`}
          onClick={handlePrevClick} disabled={currentPage === 1}>
            <div className="flex ml-1 mt-[-3px] bg-gray-200 px-1.5 py-2.5 rounded-full">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          </button>
        </li>
        {visiblePageNumbers.map((number) => (
          <li key={number}>
            <span className={`${ currentPage === number? "bg-green-600 cursor-pointer text-white px-2 py-1 rounded-full": "cursor-pointer border px-2 py-1 rounded-full bg-gray-200 text-black"}`}
             onClick={(e) => handleClick(e, number)}>
              {number}
            </span>
          </li>
        ))}
        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPageCount}
            className={`${currentPage === totalPageCount ?"hidden":"block"}`}
          >
             <div className="flex items-center justify-center ml-1 pr-1 mt-[-3px] bg-gray-200 px-1.5 py-2.5 rounded-full">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          </button>
        </li>
      </ul>

      </div>

    </div>
  );
};

export default Pagination