"use client";

import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
import { staticCode } from "./data/sampleCode";
import ReactCodeMirror from "@uiw/react-codemirror";
function TextGenerate() {
  const [textToShow, setTextToShow] = useState([]);
  const [wordsInterval, setWordsInterval] = useState(null);

  const handleGenerateText = () => {
    const allWords = staticCode.split(" ");
    let i = 0;
    const wordsInterval = setInterval(() => {
      if (i < allWords.length) {
        setTextToShow((prev) => [...prev, allWords[i]]);
        i++;
      } else {
        clearInterval(wordsInterval);
      }
    }, 10);
    setWordsInterval(wordsInterval);
  };

  const handleReset = () => {
    clearInterval(wordsInterval);
    setTextToShow([]);
  };

  return (
    <div className="pt-20">

      <div className="flex gap-2 mb-1">
        <button
          className="border rounded hover:bg-gray-200 px-2"
          disabled={textToShow.length > 0 ? true : false}
          onClick={handleGenerateText}
        >
          Start Generating
        </button>
        <button className="border rounded hover:bg-gray-200 px-2" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="container w-[320px] h-[600px] sm:w-[600px] md:w-[800px]">
        <ReactCodeMirror
          value={textToShow.toString().replace(/,/g, " ")}
          height="400px"
          extensions={[javascript({ jsx: true })]}
          editable={false}
          theme={"dark"}
          // onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TextGenerate;
