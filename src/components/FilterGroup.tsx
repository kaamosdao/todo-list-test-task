import React from 'react';
import FilterItem from './FilterItem';

const FilterGroup: React.FC = () => (
  <fieldset className="filter d-flex justify-content-around mb-5">
    <FilterItem name="all" id="radioAll" />
    <FilterItem name="completed" id="radioCompleted" />
    <FilterItem name="unfinished" id="radioUnfinished" />
  </fieldset>
);

export default FilterGroup;
