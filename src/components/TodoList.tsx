import React from 'react';
import filterTasks from '../filterTasks';
import { useAppSelector } from '../hooks/hooks';
import { ITask, ITaskStatus } from '../interfaces';
import { tasksSelectors } from '../slices/tasksSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const tasks: ReadonlyArray<ITask> = useAppSelector(tasksSelectors.selectAll);
  const filterType: ITaskStatus = useAppSelector((state) => state.filter.type);
  const filteredTasks = filterTasks(tasks, filterType);
  if (tasks.length === 0) {
    return <p className="text-center">There is nothing yet...</p>;
  }
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
