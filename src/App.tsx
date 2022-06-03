import React from 'react';
import TodoHandler from './components/TodoHandler';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <>
      <TodoHandler />
      <TodoList />
    </>
  );
};

export default App;
