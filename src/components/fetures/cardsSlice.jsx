import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get('/api/cards');
  return response.data;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    currentPage: 1,
    viewMode: 'grid', // 'grid' or 'list'
    loading: true,
    feedback: {
      name: '',
      email: '',
      message: '',
    },
  },
  reducers: {
    removeCard: (state, action) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
    },
    submitFeedback: (state, action) => {
      state.feedback = { name: '', email: '', message: '' };
      // Add logic to handle form submission
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.loading = false;
    });
  },
});

export const { removeCard, changePage, toggleViewMode, submitFeedback } = cardsSlice.actions;
export default cardsSlice.reducer;
