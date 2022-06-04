import React from 'react';
import Form from './Form';
import FilterGroup from './FilterGroup';

const TodoHandler: React.FC = () => (
  <div className="w-50 mx-auto mt-5">
    <Form />
    <FilterGroup />
  </div>
);

export default TodoHandler;
