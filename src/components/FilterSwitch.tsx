import React from 'react';
import IFilterSwitch from '../interfaces';

const FilterSwitch: React.FC<IFilterSwitch> = ({ name, id }) => (
  <div className="form-check form-switch">
    <input
      className="form-check-input form__switch-input filter__switch-input"
      type="checkbox"
      id={id}
    />
    <label className="form-check-label filter__switch-label" htmlFor={id}>
      {name}
    </label>
  </div>
);

export default FilterSwitch;
