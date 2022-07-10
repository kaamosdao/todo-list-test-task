import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { updateTask } from '../slices/tasksSlice';
import { ITask, ITaskStatus } from '../interfaces';

const TodoItem: React.FC<ITask> = ({ id, name, status }) => {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    const newStatus: ITaskStatus = status === 'unfinished' ? 'completed' : 'unfinished';
    dispatch(updateTask({ id, changes: { status: newStatus } }));
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input todo-list-item__input"
        type="checkbox"
        value=""
        id={`todo${id}`}
        onChange={handleChange}
        checked={status === 'completed'}
      />
      <label className="form-check-label todo-list-item__label ms-2" htmlFor={`todo${id}`}>
        {name}
      </label>
    </div>
  );
};

export default TodoItem;
