import React from 'react';

const Checkbox: React.FC = () => {
  return (
    <div className="form-check">
      <input
        className="form-check-input todo-list-item__input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label todo-list-item__label" htmlFor="flexCheckDefault">
        Default checkbox
      </label>
    </div>
  );
};

export default Checkbox;
