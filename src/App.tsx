import React from 'react';
import { Provider } from 'react-redux';
import store from './slices/index';
import TodoHandler from './components/TodoHandler';
import TodoList from './components/TodoList';

const App: React.FC = () => (
  <Provider store={store}>
    <TodoHandler />
    <TodoList />
  </Provider>
);

export default App;
