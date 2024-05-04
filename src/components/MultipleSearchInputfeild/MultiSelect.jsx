import React, { useState } from "react";

const MultiSelect = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectInput, setSelectInput] = useState("");

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const filterOptions = (input) =>
    options.filter(({ label }) =>
      label.toLowerCase().includes(input.toLowerCase())
    );

  const handleInputChange = (e) => {
    setSelectInput(e.target.value);
  };

  const handleOptionClick = (option) => {
    toggleOption(option);
  };

  const filteredOptions = filterOptions(selectInput);

  return (
    <div>
      <input
        type="text"
        value={selectInput}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {filteredOptions.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option)}
            style={{ cursor: "pointer" }}
          >
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              readOnly
            />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => onChange(selectedOptions)}>Apply</button>
    </div>
  );
};

export default MultiSelect;
