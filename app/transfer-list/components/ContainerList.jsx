import React from "react";
import Checkbox from "./Checkbox";

const ContainerList = ({ currentList, setCuerrentList }) => {
  const handleOnClick = (name) => {
    setCuerrentList((prevValues) =>
      prevValues.map((item, i) =>
        item.name === name
          ? {
              ...item,
              isChecked: !item.isChecked,
            }
          : item
      )
    );
  };

  return (
    <div className="h-60 flex flex-col justify-evenly items-center border w-32 sm:w-60 md:w-80 p-2  mx-3 rounded shadow-lg">
      {currentList.map((item, i) => {
        return (
          <div
            key={i}
            className={
              item.activeClass ? "animate__animated animate__flash" : ""
            }
          >
            <Checkbox item={item} handleOnClick={handleOnClick} />
          </div>
        );
      })}
    </div>
  );
};

export default ContainerList;
