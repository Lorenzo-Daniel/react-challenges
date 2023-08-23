"use client";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Description from "../Description";
import "./css/use-outside-click.css";
import { description } from "./data/descriptionData";
import useOutsideClick from "./useOutsideClick";
const notify = () => toast("Here is your toast.");

function OutsideClick() {
  const ref = useRef(null);
  useOutsideClick(ref, notify);

  return (
    <div className="layout-container">
      <Description data={description} />
      <div className="layout-main-container">
        <div className="layout-main">
          <div className="container" ref={ref}>
            <Toaster
              toastOptions={{
                duration: 3000,
              }}
            />
            Click Outside To Show Toast
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutsideClick;
