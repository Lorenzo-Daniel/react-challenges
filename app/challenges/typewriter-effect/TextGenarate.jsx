"use client";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import { staticCode } from "../typewriter-effect/data/sampleCode";
import "./css/text-generate.css";

function TextGenerate() {
  const [textToShow, setTextToShow] = useState([]);
  const [wordsInterval, setWordsInterval] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(wordsInterval);
    };
  }, [wordsInterval]);
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
    <div className="layout-main-container">
      <div className="layout-main">
        <div className="containerGeneratingText">
          <div className="buttonsContainer">
            <button
              className="button"
              disabled={textToShow.length > 0 ? true : false}
              onClick={handleGenerateText}
            >
              Start Generatiing
            </button>
            <button className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="codeMirror">

          <CodeMirror
            value={textToShow.toString().replace(/,/g, " ")}
            height="600px"
            maxWidth="1000px"
            extensions={[javascript({ jsx: true })]}
            editable={false}
            theme={"dark"}
            // onChange={onChange}
          />
          </div>
          {/* <div className="generatedText">
        {textToShow.map((el, index) => {
          return <span key={index}> {el} </span>;
        })}
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default TextGenerate;
