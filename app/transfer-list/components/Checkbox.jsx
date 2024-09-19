import React from "react";

const Checkbox = ({ item, handleOnClick }) => {
  return (
    <button
      className={`${
        item.isChecked
          ? " text-white flex border  p-2 bg-blue-400 w-28 sm:w-56  md:w-72 rounded  focus:outline-none "
          : "flex border hover:bg-blue-300  p-2 bg-gray-400 w-28 sm:w-56 md:w-72 rounded focus:outline-none  text-white "
      }`}
      onClick={() => handleOnClick(item.name)}
    >
      {item.name}
    </button>
  );
};

export default Checkbox;
