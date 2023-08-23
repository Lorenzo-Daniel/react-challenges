"use client";
import React, { useState } from "react";
import Description from "../Description";
import { description } from "./data/descriptionData";
import "./css/full-screen-modal-overlay.css";
import Modal from "./Modal";
function FullScreenModalOverlay() {
  const [showModal, setShowModal] = useState(false);

const handleShowModal = () => {
    setShowModal(true)
}

  return (
    <div className="layout-container">
      <Description data={description} />
      <div className={`layout-main-container  ${showModal && 'overlay'}`}>
        <div className={`layout-main`}  >
          {!showModal ? (
            <button className="button" onClick={handleShowModal}>Show Modal</button>
          ) : (
            <Modal setShowModal={setShowModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FullScreenModalOverlay;
