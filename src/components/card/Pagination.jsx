import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../fetures/cardsSlice';

function Pagination() {
  const dispatch = useDispatch();
  const { cards, currentPage } = useSelector((state) => state.cards);
  const totalPages = Math.ceil(cards.length / 6);

  return (
    <div className="flex justify-center space-x-2 mt-12 items-center">
      <button 
        disabled={currentPage === 1}
        onClick={() => dispatch(changePage(currentPage - 1))}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? 'font-bold' : ''}
          onClick={() => dispatch(changePage(index + 1))}
        >
          {index + 1}
        </button>
      ))}
      <button 
        disabled={currentPage === totalPages}
        onClick={() => dispatch(changePage(currentPage + 1))}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
