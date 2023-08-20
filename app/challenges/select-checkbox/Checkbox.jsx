import React from "react";
import "./css/select-checkbox.css";
function Checkbox({ checked, onChange, label }) {
  return (
    <div>
      <input
        type="checkbox"
        name={label}
        checked={checked}
        onChange={() => onChange()}
      />
      <label>{label}</label>
    </div>
  );
}

export default Checkbox;
