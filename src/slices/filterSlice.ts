import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter, ITaskStatus } from '../interfaces';

const initialState: IFilter = {
  type: 'all',
};

const filterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<ITaskStatus>) => {
      state.type = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
