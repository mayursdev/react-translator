import React, { useEffect, useState } from "react";

const InputField = ({ onInputChange }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    // debouncing
    let timer = setTimeout(() => {
      onInputChange(input);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [input, onInputChange]);

  return (
    <div className="input-field">
      <label htmlFor="">Enter text</label>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default InputField;
