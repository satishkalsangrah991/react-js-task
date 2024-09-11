import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitFeedback } from '../fetures/cardsSlice';

function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFeedback(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
