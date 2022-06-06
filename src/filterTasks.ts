import { ITask, ITaskStatus } from './interfaces';

const filterTasks = (tasks: ReadonlyArray<ITask>, filterType: ITaskStatus) => {
  if (filterType === 'all') {
    return tasks;
  }
  return tasks.filter((task) => task.status === filterType);
};

export default filterTasks;
