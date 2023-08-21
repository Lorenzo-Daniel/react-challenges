"use client";

import React, { useEffect, useState } from "react";

function Description({ data }) {
  const [showDescription, setShowDescription] = useState();


  useEffect(()=> {
if(window.innerWidth > 910) {
  setShowDescription(true)
}else {
  setShowDescription(false)
}
  },[])
  return (
    <>
      {showDescription ? (
        <div className="layout-description">
          <div className="description-hide">
            {window.innerWidth < 910 && (
              <button className='description-show-button' onClick={() => setShowDescription(false)}>Hide description</button>
            )}
          </div>
          <h2> {data.title} </h2>
          <p>
            {data.description.split(/(´[^´]+´)/).map((part, idx) =>
              part.startsWith("´") && part.endsWith("´") ? (
                <span key={idx} className="layout-highlighted-span">
                  {part.slice(1, -1)}
                </span>
              ) : (
                part
              )
            )}
          </p>

          {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=HPRGSPWFBUs' /> */}
          <h2>User Stories</h2>
          <ol>
            {data.userStories.map((item, index) => {
              return (
                <li key={index}>
                  {item.split(/(´[^´]+´)/).map((part, idx) =>
                    part.startsWith("´") && part.endsWith("´") ? (
                      <span key={idx} className="layout-highlighted-span">
                        {part.slice(1, -1)}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <div className="description-show">
          <button
            className="description-show-button"
            onClick={() => setShowDescription(true)}
          >
            Show description
          </button>
        </div>
      )}
    </>
  );
}

export default Description;
