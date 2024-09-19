import React from 'react';

const InputButton = ({ value, isButton, handleOnclick, isSelected }) => {
  return (
    <input
      type="button"
      className={`${
        isButton
          ? 'cursor-pointer border border-slate-300 bg-green-200 rounded px-2 py-1 hover:bg-slate-300 hover:text-slate-700 min-w-20'
          : 'cursor-pointer hover:text-slate-700  '
      }
      
      ${isSelected && 'cursor-pointer  text-green-500'}`}
      value={value}
      onClick={handleOnclick}
    />
  );
};

export default InputButton;
