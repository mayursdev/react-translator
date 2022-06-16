import React, { useEffect, useState } from "react";
import axios from "axios";

const Translate = ({ inputText, language }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    if (!inputText) return;

    const callAPI = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: inputText,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      const translatedText = data.data.translations[0].translatedText;
      setTranslatedText(translatedText);
    };

    callAPI();
  }, [inputText, language]);

  return (
    <div className="translate">
      <p>Output</p>
      {translatedText}
    </div>
  );
};

export default Translate;
