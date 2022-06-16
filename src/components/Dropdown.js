import React from "react";

const Dropdown = ({ dropdownTitle, options, onOptionSelect }) => {
  const renderedOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="dropdown">
      <label> {dropdownTitle} </label>
      <select
        name=""
        id=""
        onChange={(e) => {
          onOptionSelect(e.target.value);
        }}
      >
        {renderedOptions}
      </select>
    </div>
  );
};

export default Dropdown;
