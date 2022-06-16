import React, { useState } from "react";

import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const dropdownOptions = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const App = () => {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div>
      <InputField onInputChange={setInputText} />
      <Dropdown
        dropdownTitle="Select language"
        options={dropdownOptions}
        onOptionSelect={setLanguage}
      />
      <Translate inputText={inputText} language={language} />
    </div>
  );
};

export default App;
