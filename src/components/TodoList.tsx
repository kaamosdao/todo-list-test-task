import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import { ITask } from '../interfaces';
import { tasksSelectors } from '../slices/tasksSlice';
import Checkbox from './Checkbox';

const TodoList: React.FC = () => {
  const tasks: ReadonlyArray<ITask> = useAppSelector(tasksSelectors.selectAll);
  return (
    <ul className="list-group todo-list w-75 mx-auto">
      {tasks.map((task: ITask) => (
        <li className="list-group-item" key={task.id}>
          <Checkbox id={task.id} name={task.name} status={task.status} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
