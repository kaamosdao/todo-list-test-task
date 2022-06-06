import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
