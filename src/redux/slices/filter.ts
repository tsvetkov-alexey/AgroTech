import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterSliceState {
  search: string;
}

const initialState: FilterSliceState = {
  search: '',
};

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = filter.actions;

export default filter.reducer;
