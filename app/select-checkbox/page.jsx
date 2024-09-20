"use client";
import { useState } from "react";
import "../globals.css";
import { description } from "./data/descriptionData";
import Checkbox from "./Checkbox";
import { list } from "./data/list";
import Description from "../Description";

function SelectCheckbox() {
  const [allSelected, setAllSelected] = useState(false);
  const [listItem, setListItem] = useState(
    list.map((user) => ({ ...user, isChecked: false }))
  );

  const selectCheckboxHandler = (id) => {
    const updatedList = listItem.map((el) =>
      el.id === id ? { ...el, isChecked: !el.isChecked } : el
    );
    setListItem(updatedList);
    setAllSelected(updatedList.every((el) => el.isChecked));
  };

  const allUsersHandler = () => {
    const updatedList = listItem.map((el) => ({
      ...el,
      isChecked: !allSelected,
    }));
    setListItem(updatedList);
    setAllSelected(!allSelected);
  };

  return (
      <div  className="flex main-height w-dvw  "> 
        <Description data={description} />
        <div className="flex flex-1 justify-center items-center p-2">
          <div className=" bg-blue-200 p-10 rounded max-w-lg container divide-y">
            <div className="select-all mb-2">
              <input
                type="checkbox"
                name="selectAll"
                checked={allSelected}
                onChange={allUsersHandler}
              />
              <label className="ms-2 select-none ">Select All</label>
            </div>
            <div className="checkbox-container pt-2">
              {listItem.map((user) => {
                return (
                  <Checkbox
                    key={user.id}
                    checked={user.isChecked}
                    onChange={() => selectCheckboxHandler(user.id)}
                    label={user.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}

export default SelectCheckbox;
