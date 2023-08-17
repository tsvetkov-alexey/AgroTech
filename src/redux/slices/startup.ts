import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export type Startups = Record<string, string>;

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface StartupSliceState {
  startups: Startups[];
  status: Status;
}

const initialState: StartupSliceState = {
  startups: [],
  status: Status.LOADING,
};

type FetchStartupsArgs = {
  search: string;
};

export const fetchStartups = createAsyncThunk(
  'startups/fetchStartups',
  async (params: FetchStartupsArgs) => {
    const { search } = params;
    const { data } = await axios.get<Startups[]>(`/startups?title=${search}`);
    return data;
  },
);

export const startup = createSlice({
  name: 'startups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartups.pending, (state) => {
        state.status = Status.LOADING;
        state.startups = [];
      })
      .addCase(fetchStartups.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.startups = action.payload;
      })
      .addCase(fetchStartups.rejected, (state) => {
        state.status = Status.ERROR;
        state.startups = [];
      });
  },
});

export default startup.reducer;
