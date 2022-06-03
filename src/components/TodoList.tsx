import React from 'react';
import Checkbox from './Checkbox';

const TodoList: React.FC = () => {
  return (
    <ul className="list-group todo-list w-75 mx-auto">
      <li className="list-group-item todo-list-item">
        <Checkbox />
      </li>
      <li className="list-group-item">
        <Checkbox />
      </li>
      <li className="list-group-item">
        <Checkbox />
      </li>
    </ul>
  );
};

export default TodoList;
