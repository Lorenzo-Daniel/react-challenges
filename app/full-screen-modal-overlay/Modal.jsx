"use client";
import React, { useEffect, useRef, useState } from "react";
import "animate.css";
function Modal({ setShowModal }) {
  const modalRef = useRef();
  const [animation, setAniamtion] = useState("animate__bounceInDown");
  const handleClickOutSide = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  let waitForEffect;
  const handleCloseModal = () => {
    setAniamtion("animate__bounceOutDown");
    waitForEffect = setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      clearTimeout(waitForEffect);
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [modalRef]);

  return (
    <div className={`modal animate__animated ${animation}`} ref={modalRef}>
      <button className="button" onClick={handleCloseModal}>
        Close Modal
      </button>
    </div>
  );
}

export default Modal;
