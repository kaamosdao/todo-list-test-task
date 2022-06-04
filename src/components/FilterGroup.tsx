import React from 'react';
import FilterSwitch from './FilterSwitch';

const FilterGroup: React.FC = () => (
  <fieldset className="filter d-flex justify-content-around mb-5">
    <FilterSwitch name="completed tasks" id="flexSwitchCheckCompleted" />
    <FilterSwitch name="outstanding tasks" id="flexSwitchCheckOutstanding" />
  </fieldset>
);

export default FilterGroup;
