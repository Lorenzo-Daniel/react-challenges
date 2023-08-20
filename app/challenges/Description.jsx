import React from "react";

function Description({data}) {
  return (
    <div className="layout-description">
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
  );
}

export default Description;
