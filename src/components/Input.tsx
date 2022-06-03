import React from 'react';

const Input: React.FC = () => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="type task..."
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
  );
};

export default Input;
