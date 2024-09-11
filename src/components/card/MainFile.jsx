import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards, changePage, toggleViewMode } from '../fetures/cardsSlice';
import Card from './GptCard';
import Pagination from './Pagination';
import FeedbackForm from './FeedbackForm';

function MainFile() {
  const dispatch = useDispatch();
  const { cards, currentPage, viewMode, loading } = useSelector((state) => state.cards.cards);
//   console.log(cards)

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCards());
    }, 5000);
  }, [dispatch]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  const startIndex = (currentPage - 1) * 6;
  const displayedCards = cards?.slice(startIndex, startIndex + 6);

  return (
    <div className="p-4">
      <button onClick={() => dispatch(toggleViewMode())}>
        Toggle View
      </button>
      <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'list'}>
        {displayedCards&&displayedCards?.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <Pagination />
      <FeedbackForm />
    </div>
  );
}

export default  MainFile