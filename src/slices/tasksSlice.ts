import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { ITask } from '../interfaces';

const tasksAdapter = createEntityAdapter<ITask>();

const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
  },
});

export const { addTask } = tasksSlice.actions;

export const tasksSelectors = tasksAdapter
  .getSelectors<RootState>((state: RootState) => state.tasks);

export default tasksSlice.reducer;
