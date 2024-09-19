import React from "react";
// import "./css/select-checkbox.css";

//----------------------

function Checkbox({ checked, onChange, label }) {
  return (
    <div className="select-none">
      <input
        type="checkbox"
        name={label}
        checked={checked}
        onChange={() => onChange()}
      />
      <label className="ms-2">{label}</label>
    </div>
  );
}

export default Checkbox;
