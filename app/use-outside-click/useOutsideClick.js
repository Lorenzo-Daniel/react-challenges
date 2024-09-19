"use client";
import {useEffect } from "react";

function useOutsideClick(ref, callback) {
  
  const onclickOutSideHandle = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onclickOutSideHandle);
    return () => {
      document.removeEventListener("mousedown", onclickOutSideHandle);
    };
  }, [ref, callback]);

  return [ref, callback];
}

export default useOutsideClick;
