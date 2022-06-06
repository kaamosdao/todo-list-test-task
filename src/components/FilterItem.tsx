import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { updateFilter } from '../slices/filterSlice';
import IFilterItem from '../interfaces';

const FilterItem: React.FC<IFilterItem> = ({ name, id }) => {
  const dispatch = useAppDispatch();
  const onChange = () => {
    dispatch(updateFilter(name));
  };
  return (
    <div className="form-check">
      <input
        className="form-check-input filter__input"
        type="radio"
        name="taskFilter"
        id={id}
        defaultChecked={name === 'all'}
        onChange={onChange}
      />
      <label className="form-check-label filter__label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default FilterItem;
