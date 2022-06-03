import React from 'react';
import TaskListProps from '../interfaces';

const FilterSwitch: React.FC<TaskListProps> = ({ name }) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {name}
      </label>
    </div>
  );
};

export default FilterSwitch;
