import React from 'react';
import { Provider } from 'react-redux';
import store from './slices/index';
import TodoHandler from './components/TodoHandler';
import TodoList from './components/TodoList';
import TodoCounter from './components/TodoCounter';

const App: React.FC = () => (
  <Provider store={store}>
    <TodoCounter />
    <TodoHandler />
    <TodoList />
  </Provider>
);

export default App;
