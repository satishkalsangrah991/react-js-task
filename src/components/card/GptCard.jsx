import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../fetures/cardsSlice';

function GptCard({ card }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 relative">
      <button 
        onClick={() => dispatch(removeCard(card.id))}
        className="absolute top-2 right-2 text-red-600"
      >
        X
      </button>
      <h2 className="text-lg font-bold">{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
}

export default  GptCard