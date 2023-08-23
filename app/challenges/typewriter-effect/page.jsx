import React from "react";
import TextGenerate from "./TextGenarate";
import Description from "../Description";
import { description } from "./data/descriptionData";


function SelectCheckbox() {
  return (
    <div  className="layout-container">
      <Description data={description} />
      <TextGenerate />
    </div>
  );
}

export default SelectCheckbox;
