import React from 'react';
import filterTasks from '../filterTasks';
import { useAppSelector } from '../hooks/hooks';
import { ITask } from '../interfaces';
import { tasksSelectors } from '../slices/tasksSlice';

const TodoCounter: React.FC = () => {
  const tasks: ReadonlyArray<ITask> = useAppSelector(tasksSelectors.selectAll);
  return (
    <div className="card w-50 mx-auto mt-5">
      <div className="card-body">
        <h5 className="card-title text-center">Today&apos;s todos:</h5>
        <div className="counter d-flex justify-content-around">
          <div className="counter__completed">
            <p className="card-text">
              Completed:&nbsp;
              {filterTasks(tasks, 'completed').length}
            </p>
          </div>
          <div className="counter__unfinished">
            <p className="card-text">
              Unfinished:&nbsp;
              {filterTasks(tasks, 'unfinished').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCounter;
