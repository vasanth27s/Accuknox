import React from 'react';

const Button = ({ className = '', text, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`rounded-lg py-2 px-4 font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
