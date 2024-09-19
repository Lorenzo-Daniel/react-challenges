"use client";
import { useEffect, useState } from "react";
import Description from "../Description";
import { description } from "./data/descriptionData";

function InsertText() {
  const [newText, setNewText] = useState();
  const [allText, setAllText] = useState([]);
  const [indexText, setIndexText] = useState(-1);

  const handleAddText = (e) => {
    if (e.key === "Enter") {
      setIndexText(indexText + 1);
      setAllText([...allText, newText]);
      setNewText("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleAddText(e));

    return () => window.removeEventListener("keydown", (e) => handleAddText(e));
  }, [newText, allText]);

  return (
    <div className="layout-container">
      <Description data={description} />
      <div className="layout-main-container">
        <div className="layout-main">
          <div className="container">
            <textarea
              className="textarea"
              placeholder="Enter your text here..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <div className="renderized-text">
              <span>Document</span>
              <div className="textarea">
                {allText.map((el, index) => {
                  return (
                    <p
                      key={index}
                      className={`${indexText === index ? "animation" : ""}`}
                    >
                      {el}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertText;
