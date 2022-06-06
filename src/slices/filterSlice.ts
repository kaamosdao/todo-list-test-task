import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from '../interfaces';

const initialState: IFilter = {
  type: 'all',
};

const filterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
