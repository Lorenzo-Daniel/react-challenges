import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Controls = ({
  containerRight,
  containerLeft,
  setContainerRight,
  setContainerLeft,
}) => {
  const handleOnclick = (container, setContainerA, setContainerB) => {
    const everyFalse = container.every((item) => item.isChecked === false);
    const selected = container
      .filter((item) => item.isChecked === true)
      .map((item) => ({ ...item, isChecked: false, activeClass: true }));
    const unselected = container
      .filter((item) => item.isChecked === false)
      .map((item) => ({ ...item, isChecked: false, activeClass: false }));

    if (everyFalse) {
    } else if (selected) {
      setContainerA((prevValues) =>
        [...prevValues, ...selected].sort((a, b) => a.id - b.id)
      );
      setContainerB(unselected.sort((a, b) => a.id - b.id));
    }
  };

  return (
    <div className="flex flex-col gap-8 ">
      <button
        className=" "
        onClick={() =>
          handleOnclick(containerLeft, setContainerRight, setContainerLeft)
        }
      >
        <FaArrowAltCircleRight size={30}  className=" text-gray-400 hover:text-blue-300" />
      </button>
      <button
       
        onClick={() =>
          handleOnclick(containerRight, setContainerLeft, setContainerRight)
        }
      >
        <FaArrowAltCircleLeft size={30}  className=" text-gray-400 hover:text-blue-300"/>
      </button>
    </div>
  );
};

export default Controls;
