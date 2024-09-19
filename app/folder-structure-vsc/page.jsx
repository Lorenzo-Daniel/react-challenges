"use client";
import { useEffect, useState } from "react";
import FolderStructure from "./FolderStructure";
import { files } from "./data";
import { filesCode } from "./data";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import Description from "../Description";
import { description } from "./descriptionData";
function App() {
  const [fileName, setFileName] = useState("");
  const [currentCode, setCurrentCode] = useState("Fake VSC");

  useEffect(() => {
    const findCode = filesCode.find((item) => item.name === fileName);
    if (findCode) {
      setCurrentCode(findCode.code);
    } else {
      return;
    }
  }, [fileName, currentCode]);

  return (
    <div className="flex">
      <div className="w-lg">
        <Description data={description} />
      </div>
      <div className="flex justify-center items-center w-dvw main-height overflow-x-scroll">
        <div className="max-w-6xl  container flex items-center pt-20 pb-10">
          <FolderStructure files={files} setFileName={setFileName} />
          <div className=" flex-1">
            <div className="">
              <div className="bg-[#2e3138] h-10 font-thin text-sm ">
                <div
                  className={`h-10 bg-[#15181e] text-white inline-block  pt-2 px-2 align-middle ${
                    fileName < 1 && "hidden"
                  }`}
                >
                  <span>{fileName}</span>
                </div>
              </div>
              <CodeMirror
                value={currentCode?.toString()}
                height="460px"
                extensions={[javascript({ jsx: true })]}
                editable={true}
                theme={"dark"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import Description from "../Description";
// import { description } from "./data/descriptionData";

// function page() {
//   const ref = useRef(null);

//   return (
//     <div className="flex">
//       <div className="w-lg">
//         <Description data={description} />
//       </div>
//       <div className="flex justify-center items-center w-dvw  h-dvh">

//       </div>

//     </div>
//   );
// }

// export default page;
