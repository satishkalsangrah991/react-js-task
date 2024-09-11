import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Dummy API URL
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Add user
export const addUser = createAsyncThunk('users/addUser', async ({user,navigate}) => {
    console.log(user)
  const response = await axios.post(API_URL, user);
//   navigate("/user/list")
  return response.data;

});

// Update user
export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
    console.log(user)
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  return response.data;
});

// Delete user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        // navigate("/user/list")
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        state.users[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
