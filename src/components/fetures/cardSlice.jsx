
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCardData = createAsyncThunk(
  'card/fetchData',
  async ({ page, pageSize }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`);
    const data = await response.json();
    // console.log(response)
    const totalCount = response.headers.get('x-total-count');
    // console.log(totalCount)
    return { data, totalCount };
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: [],
    status: '',
    page: 1,
    pageSize: 6,
    totalPages: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    removeCard: (state, action) => {
      const index = action.payload;
      state.card.splice(index, 1);
    },
    addCard: (state, action) => {
      state.card.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.card = action.payload.data;
        const totalCount = parseInt(action.payload.totalCount, 6);
        state.totalPages = Math.ceil(totalCount / state.pageSize);
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage, setPageSize, removeCard, addCard } = cardSlice.actions;

export default cardSlice.reducer;