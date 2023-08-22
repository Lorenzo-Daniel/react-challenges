"use client";

import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./css/use-outside-click.css";
const notify = () => toast("Here is your toast.");

function UseOutsideClick() {
  const ref = useRef(null);

  const onclickOutSideHandle = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      notify();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onclickOutSideHandle);
    return () => {
      document.removeEventListener("mousedown", onclickOutSideHandle);
    };
  }, []);

  return (
    <div className="layout-main-container">
      <div className="layout-main">
        <div className="container" ref={ref}>
          <Toaster
            toastOptions={{
              duration:3000,
            }}
          />
          Click Outside To Show Toast
        </div>
      </div>
    </div>
  );
}

export default UseOutsideClick;
