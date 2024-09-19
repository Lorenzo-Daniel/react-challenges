"use client";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Description from "../Description";
import { description } from "./data/descriptionData";
import useOutsideClick from "./useOutsideClick";

function OutsideClick() {
  const notify = () => toast("Here is your toast.");
  const ref = useRef(null);
  useOutsideClick(ref, notify);

  return (
    <div className="flex">
    <div className="w-lg">
      <Description data={description} />
    </div>
    <div className="flex justify-center items-center w-dvw main-height">
      <div className="p-2">
        <div
          className=" p-10 rounded flex items-center justify-center text-white text-xl h-40 bg-blue-600"
          ref={ref}
        >
        <p className="text-center select-none">
          Click Outside To Show Toast!
        </p>
        </div>
      </div>
    </div>
    <Toaster
      toastOptions={{
        duration: 3000,
      }}
    />
  </div>
  );
}

export default OutsideClick;
