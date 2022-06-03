import React from 'react';
import FilterSwitch from './FilterSwitch';

const FilterGroup: React.FC = () => {
  return (
    <fieldset className="form__filter d-flex justify-content-around mb-5">
      <FilterSwitch name="completed tasks" />
      <FilterSwitch name="outstanding tasks" />
    </fieldset>
  );
};

export default FilterGroup;
