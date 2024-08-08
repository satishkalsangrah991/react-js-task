
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  formData: {
    id: null,
    name: '',
    lastName: '',
    address: '',
    country: '',
    email: '',
    phone: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const {
  setFormData,
  addData,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;