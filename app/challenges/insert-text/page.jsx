"use client";
import { useEffect, useState } from "react";
import Description from "../Description";
import "./css/insert-text.css";
import { description } from "./data/descriptionData";

function InsertText() {
  const [newText, setNewText] = useState();
  const [allText, setAllText] = useState([]);

console.log(allText)


  const handleAddText = (e) => {
    if (e.key === "Enter") {
        setAllText([...allText,newText])
        setNewText('')
    }
  };

  useEffect(() => {

window.addEventListener('keydown',(e)=>handleAddText(e))

return()=> window.removeEventListener('keydown',(e)=>handleAddText(e))
  }, [newText,allText]);

  console.log(newText);
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
                    <p key={index} className="animation">
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
