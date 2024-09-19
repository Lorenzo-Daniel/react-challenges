'use client'
import react, { useState } from 'react';
import { images } from './data';
import Mosaico from './Mosaico';
import Modal from './Modal';
const LigthBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentURL, setCurrentURL] = useState('');

  return (
    <div className="relative ">
      <div className=" flex justify-center items-center w-dvw main-height  p-2">
        <div className="grid grid-cols-3 gap-4 max-w-xl">
          {images.map((item, i) => {
            return (
              <div key={i} className="  relative max-h-[230px]">
                <img
                  src={item}
                  alt="Imagen"
                  className="w-full h-full object-cover "
                />
                <div
                  className="absolute inset-0 hover:bg-black hover:bg-opacity-50 cursor-pointer"
                  onClick={() => {
                    setCurrentURL(item);
                    setShowModal((prev) => !prev);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && <Modal img={currentURL} setShowModal= {setShowModal} setCurrentURL={setCurrentURL}/>}
  
    </div>
  );
};

export default LigthBox;

