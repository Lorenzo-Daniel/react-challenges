"use client";
import { useState } from "react";
import "../globals.css";
import { description } from "./data/descriptionData";
import Checkbox from "./Checkbox";
import { list } from "./data/list";
import Description from "../Description";


function SelectCheckbox() {
  const [listItem, setListItem] = useState(
    list.map((user) => ({ ...user, isChecked: false }))
  );
  const [allSelected, setAllSelected] = useState(false);

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
    <div className="layout-container">
      <Description data={description} />
      <div className="layout-main-container">
        <div className="main-container">
          <div className="select-all">
            <input
              type="checkbox"
              name="selectAll"
              checked={allSelected}
              onChange={allUsersHandler}
            />
            <label>Select All</label>
          </div>
          <div className="checkbox-container">
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
