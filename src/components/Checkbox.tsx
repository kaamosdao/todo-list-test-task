import React from 'react';
import { ITask } from '../interfaces';

const Checkbox: React.FC<ITask> = ({ id, name, status }) => (
  <div className="form-check">
    <input
      className="form-check-input todo-list-item__input"
      type="checkbox"
      value=""
      id={id}
    />
    <label className="form-check-label todo-list-item__label ms-2" htmlFor={id}>
      {name}
    </label>
  </div>
);

export default Checkbox;
