"use client";

import React, { useEffect, useState } from "react";

function Description({ data }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="">
      {showDescription ? (
        <div className="bg-black text-white main-height w-screen max-w-lg  overflow-y-scroll">
          <div className="flex justify-start ms-2 pt-2 ">
            <button
              className="border px-2 py-1 rounded mt-1 mr-1 hover:bg-[#071a2a]  hover:border-white border-[#293647] relative text-xs"
              onClick={() => setShowDescription(false)}
            >
              Hide description
            </button>
          </div>
          <div className="p-3 ">
            <h2 className="my-3 text-center text-2xl">
              {data.title.toUpperCase()}
            </h2>
            <div className="text-lg">
              {data.description.split(/(´[^´]+´)/).map((part, idx) =>
                part.startsWith("´") && part.endsWith("´") ? (
                  <span
                    key={idx}
                    className="bg-[#071a2a] border border-[#293647]  rounded  p-1 text-xs "
                  >
                    {part.slice(2, -2)}
                  </span>
                ) : (
                  <p key={idx} className="inline ">{part}</p>
                )
              )}
            </div>
            <h2 className="mb-1 mt-2 text-2xl">User Stories:</h2>
            <ol className="flex flex-col gap-3 text-lg">
              {data.userStories.map((item, index) => {
                return (
                  <li key={index}>
                    {item.split(/(´[^´]+´)/).map((part, idx) =>
                      part.startsWith("´") && part.endsWith("´") ? (
                        <span
                          key={idx}
                          className="bg-[#071a2a] border border-[#293647]  rounded p-1 text-xs  "
                        >
                          {part.slice(2, -2)}
                        </span>
                      ) : (
                        <p key={idx} className="inline">{part}</p>
                      )
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ) : (
        <div className=" fixed top-[72px] left-2 w-32 text-xs ">
          <button
            className="border py-1 px-2 rounded hover:bg-gray-200 "
            onClick={() => setShowDescription(true)}
          >
            Show description
          </button>
        </div>
      )}
    </div>
  );
}

export default Description;
