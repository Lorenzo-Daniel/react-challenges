import React from "react";
import TextGenerate from "./TextGenarate";
import Description from "../Description";
import { description } from "./data/descriptionData";


function TypeWriterPage() {
  return (
    <div  className="flex  main-height w-dvw mt-20"> 
      <Description data={description} />
    <div className="flex flex-1 justify-center items-center">
      <TextGenerate />
    </div>
    </div>
  );
}

export default TypeWriterPage;
