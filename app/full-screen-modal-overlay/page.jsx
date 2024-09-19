"use client";
import React, { useState } from "react";
import Description from "../Description";
import { description } from "./data/descriptionData";
import "./css/full-screen-modal-overlay.css";
import Modal from "./Modal";
function FullScreenModalOverlay() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex">
      <div className="w-lg">
        <Description data={description} />
      </div>
      <div
        className={`flex justify-center items-center w-dvw  main-height ${
          showModal && "overlay"
        }`}
      >
        {!showModal ? (
          <button className="button" onClick={handleShowModal}>
            Show Modal
          </button>
        ) : (
          <Modal setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
}

export default FullScreenModalOverlay;
