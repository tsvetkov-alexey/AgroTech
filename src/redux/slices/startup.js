import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchStartups = createAsyncThunk('startups/fetchStartups', async (params) => {
  const { search } = params;
  const { data } = await axios.get(`/startups?title=${search}`);
  return data;
});

const initialState = {
  startups: [],
  status: 'loading',
};

export const startup = createSlice({
  name: 'startups',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStartups.pending]: (state) => {
      state.startups = [];
      state.status = 'loading';
    },
    [fetchStartups.fulfilled]: (state, action) => {
      state.startups = action.payload;
      state.status = 'success';
    },
    [fetchStartups.rejected]: (state) => {
      state.startups = [];
      state.status = 'error';
    },
  },
});

export default startup.reducer;
