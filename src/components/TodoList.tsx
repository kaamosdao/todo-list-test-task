import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import { ITask } from '../interfaces';
import { tasksSelectors } from '../slices/tasksSlice';
import TodoItem from './TodoItem';

const filterTasks = (tasks: ReadonlyArray<ITask>, filterType: string) => {
  if (filterType === 'all') {
    return tasks;
  }
  return tasks.filter((task) => task.status === filterType);
};

const TodoList: React.FC = () => {
  const tasks: ReadonlyArray<ITask> = useAppSelector(tasksSelectors.selectAll);
  const filterType: string = useAppSelector((state) => state.filter.type);
  const filteredTasks = filterTasks(tasks, filterType);
  return (
    <ul className="list-group todo-list w-75 mx-auto">
      {filteredTasks.map((task: ITask) => (
        <li className="list-group-item" key={task.id}>
          <TodoItem id={task.id} name={task.name} status={task.status} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
